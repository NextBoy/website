<template>
  <div id="app">
    <EduHead></EduHead>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
  import EduHead from './components/common/EduHead.vue'
  import Foot from './components/common/Foot.vue'
  export default {
    name: 'app',
    components: {EduHead, Foot},
    mounted () {
      document.title = '菁华成长自招'
    }
  }
</script>

<style>
  @import url("./assets/reset.css");
  @import url("./assets/font/iconfont.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .router-link-exact-active {
    background-color: #7f7f7f;
    color: yellow;
  }
</style>
