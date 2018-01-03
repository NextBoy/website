<template>
  <header class="common-head">
    <div>
      <h1 class="logo-title">菁华成长自招</h1>
      <h2>专注西南名校自招培训</h2>
    </div>
    <nav class="page-link">
      <router-link to="/home" class = 'link'>主页</router-link>
      <router-link to="/newsflash" class = 'link'  style="display: none">自招简讯</router-link>
      <router-link to="/company" class = 'link'>公司介绍</router-link>
      <router-link to="/service" class = 'link'>服务介绍</router-link>
      <router-link to="/joinUs" class = 'link'>加入我们</router-link>
    </nav>
  </header>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .common-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    padding: 0 100px;
    line-height: 50px;
    background: rgb(248, 248, 248);
  }
  .common-head .logo-title{
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
  }
  .common-head h2 {
    display: inline-block;
  }
  .common-head .page-link .link{
    display: inline-block;
    width: 80px;
    text-align: center;
  }
</style>
