.<template>
<div  v-if="isAuthenticated">
    <h1>crud</h1>
    <Loading v-if="loading"/>
    <div v-else>
      <pre>{{toDo}}</pre>
    </div>
</div>

</template>

<script>
import {useAuth} from '@vueuse/firebase'
import {useDb} from '../hooks/useDb'
import Loading from '../components/Loading.vue'
import {onMounted, ref} from 'vue'

export default {
  components:{
    Loading,
  },
  setup(){
    const {isAuthenticated} = useAuth()
    const {getTodos,loading} = useDb()
    const toDo = ref([])

    onMounted(async()=>{
      toDo.value = await getTodos()
      if(toDo.value.res){
        console.log(toDo.value.error)
      }
    })
    return {isAuthenticated,toDo,loading}
  }
}
</script>

<style>

</style>