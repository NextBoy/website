<template>
  <div>
    <!--轮播图-->
    <div class="block">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="(item, index) in imgSrc" :key="index">
          <img :src="item" alt="" class="img-item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--公司介绍-->
    <div class="show show-1">
      <div class="cover"></div>
      <h1>&nbsp;</h1>
      <el-button type="primary" class="btn">
        <router-link to="/company" style="color: white;">公司介绍</router-link>
      </el-button>
    </div>
    <!--课程详情-->
    <div class="show show-2">
      <div class="cover"></div>
      <h1>&nbsp;</h1>
      <el-button type="primary">
        <router-link to="/service" style="color: white">课程详情</router-link>
      </el-button>
      <div class="item">
        <div class="item-1">
          <h2>全真模拟</h2>
        </div>
        <div class="item-2">
          <h2>线下培训</h2>
        </div>
        <div class="item-3">
          <h2>线上教学</h2>
        </div>
      </div>
    </div>
    <!--加入我们-->
    <div class="show show-3">
      <div class="cover"></div>
      <h1>菁华自招</h1>
      <el-button type="primary">
        <router-link to="/joinUs" style="color: white">加入我们</router-link>
      </el-button>
    </div>
  </div>
</template>
<script>
  import banner from '@/assets/images/u0.png'
  export default {
    data () {
      return {
          // 轮播图图片地址
        imgSrc: [banner, banner]
      }
    }
  }
</script>
<style scoped>
  .block {
    width: 85%;
    margin: 0 auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .img-item {
    width: 100%;
    height: 100%;
  }

  .show {
    position: relative;
    width: 85%;
    height: 400px;
    margin: 10px auto;
    border-radius: 6px;
    padding-top: 50px;
  }

  .show h1 {
    font-size: 50px;
    text-align: center;
  }

  .show .el-button {
    display: block;
    margin: 50px auto 0;
  }

  .show-1 {
    /*公司介绍背景图*/
    background: url(./../assets/images/u46.png)  no-repeat;
    background-size: 100% 100%;
    background-color: yellowgreen;
  }
  .show-2 {
    /*公司介绍背景图*/
    background: url(./../assets/images/u44.png)  no-repeat;
    background-size: 100% 100%;
    background-color: yellowgreen;
  }

  .show-3 {
    /*加入我们背景图*/
    background: url(./../assets/images/u2.png)  no-repeat;
    background-size: 100% 100%;
    background-color: yellowgreen;
  }

  .show-2 {
    position: relative;
  }

  .show-2 .item {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .show-2 .item div {
    width: 32%;
    border-radius: 5px;
    /*background-color: #0074D9;*/
  }

  .show-2 .item h2 {
    text-align: center;
    font-size: 23px;
    margin-top: 20px;
  }

  /*课程详情三张并列背景图*/
  .show .item .item-1 {
  }

  .show .item .item-2 {
  }

  .show .item .item-3 {
  }

  /*蒙层*/
  .cover {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .el-button {
    width: 140px;
    height: 56px;
    font-size: 22px;
    position: absolute;
    z-index: 20;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);

  }
</style>
