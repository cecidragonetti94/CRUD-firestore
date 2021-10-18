<template>
  <nav class="navbar navbar-dark bg-dark w-100">
    <div class="container">
      <router-link class="navbar-brand" to="/"> {{ userName }}</router-link>
      <div>
        <button class="btn btn-light" @click="singIn" v-if="!isAuthenticated">
          Log in
        </button>
        <div v-else>
          <router-link to="/crud" class="btn btn-primary mx-1">CRUD</router-link>
           <router-link to="/profile" class="btn btn-primary mx-1">Profile</router-link>
             <button class="btn btn-danger mx-1" @click="singOut">Go out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUser } from "../hooks/useUser";
import { useAuth } from "@vueuse/firebase";
import { computed } from "vue";
export default {
  setup() {
    const { singIn, singOut } = useUser();
    const { user, isAuthenticated } = useAuth(); //me traigo la info del usuario si es q esta autenticado o no

    const userName = computed(() => {
      return isAuthenticated.value ? user.value.displayName : "Sin Auth";
    });
    return { singIn, singOut, user, isAuthenticated, userName };
  },
};
</script>

<style>
nav {
  box-shadow: 1px 4px 5px 0px rgba(120, 105, 105, 0.75);
  -webkit-box-shadow: 1px 4px 5px 0px rgba(120, 105, 105, 0.75);
  -moz-box-shadow: 1px 4px 5px 0px rgba(120, 105, 105, 0.75);
}
</style>




