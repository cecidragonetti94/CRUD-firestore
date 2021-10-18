.<template>
  <div v-if="isAuthenticated">
    <h1>crud</h1>
    <Loading v-if="loading" />
    <div v-else>
      <Errror v-if="pintarError" />
      <ToDoForm />
      <Todo v-for="todo in toDo" :key="todo.id" :toDo="todo" />
     
    </div>
  </div>
</template>

<script>
import { useAuth } from "@vueuse/firebase";
import { useDb } from "../hooks/useDb";
import Loading from "../components/Loading.vue";
import { onMounted, provide, ref, computed } from "vue";
import Errror from "../components/Errror.vue";
import ToDoForm from "../components/ToDoForm.vue";
import Todo from "../components/Todo.vue";

export default {
  components: {
    Loading,
    Errror,
    ToDoForm,
    Todo,
  },
  setup() {
    const { isAuthenticated } = useAuth();
    const { getTodos, loading } = useDb();
    const toDo = ref([]);
    const error = ref(null);

    provide("error", error);
    provide("toDo", toDo);

    const pintarError = computed(() => (error.value ? true : false));
    onMounted(async () => {
      toDo.value = await getTodos();
      if (toDo.value.res) {
        console.log(toDo.value.error);
        error.value = toDo.value.res;
      }
    });
    return { isAuthenticated, toDo, loading, pintarError };
  },
};
</script>

<style>
</style>