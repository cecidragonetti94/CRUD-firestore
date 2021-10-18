<template>
  <Loading v-if="loading"/>
  <div v-else>
 <NavBar />
  </div>
 

  <router-view />
</template>
<script>
import Loading from "./components/Loading.vue";
import NavBar from "./components/NavBar.vue";
import { firebase } from "@/firebase";
import { onMounted, ref } from "vue";

export default {
  components: {
    NavBar,
    Loading,
  },
  setup() {
    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      await firebase.getCurrentUser();
      loading.value = false;
    });
    return {loading}
  },
};
</script>





