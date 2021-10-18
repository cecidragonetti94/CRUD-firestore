.<template>
  <form @submit.prevent="processForm">
      <input type="text" placeholder="Enter toDo" class="form-control my-3" v-model.trim="text">  
  </form>
</template>

<script>
import { ref,inject } from 'vue'
import {useDb} from '../hooks/useDb'
export default {
setup(){
    const {addTodo} = useDb()
    const text = ref('')
    const toDo = inject('toDo') 
    const error = inject('error')
    const processForm = async() => {
        if(!text.value.trim()){
            console.log('texto vacio')
            return
        }
        const toDos = await addTodo(text.value)
        if(toDos.res){
            error.value = toDos.error
            text.value = ''
            
        }
        toDo.value = [...toDo.value, toDos]
        text.value = ''
    }
    return{text,processForm}
}
}
</script>

<style>

</style>