<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style scoped>
  * {
      box-sizing: border-box;
      font-family: Arial;
    }

  #page-wrap {
    margin: 100px auto 100px auto;
    max-width: 800px;
    min-height: 100vh;
  }
</style>
