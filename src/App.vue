<template>
  <div class="hero w-screen ">
   <div id="nav" class="pa-6 d-flex ga-16  justify-center bg-blue-lighten-2 text-decoration-none ">
    <router-link to="/" class="text-decoration-none font-weight-black text-black text-h5">Add Todo</router-link> 
    <router-link to="/todos" class="text-decoration-none font-weight-black text-black text-h5">Todo List</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style scoped>
.hero {
  background: url('./assets/todo2.jpg');
  background-size: cover;
  height: 100%;
}
</style>