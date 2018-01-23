<template>
  <header class="common-head">
    <div>
      <h1 class="logo-title">菁华成长自招</h1>
      <h2>专注西南名校自招培训</h2>
    </div>
    <nav class="page-link">
      <router-link to="/home" class = 'link'>主页</router-link>
      <router-link to="/newsflash" class = 'link'>自招简讯</router-link>
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
    height: 70px;
    padding: 0 100px;
    line-height: 50px;
    background: rgb(248, 248, 248);
    margin-bottom: 30px;
  }
  .common-head .logo-title{
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
  }
  .common-head h2 {
    display: inline-block;
    font-size: 20px;
    height: 70px;
    font-weight: bold;
    line-height: 70px;
  }
  .common-head .page-link .link{
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    width: 120px;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
  .router-link-active {
    background-color: rgb(223, 223, 223);
    color: black;
  }
  @media screen and (max-width:1250px){
    .common-head {
      padding: 0 20px;
    }
    .common-head .page-link .link {
      width: 80px;
      font-size: 14px;
    }

  }
</style>
