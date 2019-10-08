<template>
  <div id="app">
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>

<script>
import footer from './components/footer.vue'
import header from './components/header.vue'
  export default {
    name: 'App',
    data() {
      return {

      };
    },
    components:{
      'v-footer':footer,
      'v-header':header,
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
