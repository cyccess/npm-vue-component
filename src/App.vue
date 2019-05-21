<template>
  <div id="app">

    <vue-layout :msg="msg"></vue-layout>
    <vue-header></vue-header>

    <vue-menu></vue-menu>

  </div>
</template>

<script>
  import  Vue from 'vue'
  import myComponents from './components/index'

  Vue.use(myComponents);

  // import {VueLayout, Menu} from './components/index'

  export default {
    name: 'app',
    components: {
      // VueLayout, Menu
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {

    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
