<template>
  <div class="service">
    <div class="service-head">
      <p>更多服务详情，加入官方电子科大自招群：453817356</p>
      <p>扫描二维码关注公众号，为您提供独家资讯</p>
    </div>
    <div class="service-describe">
      <div class="describe-item">
        <h2 class="item-title pink-color">免费咨询</h2>
        <div class="item-detail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          <a href="baidu.com" class="item-btn">详情咨询</a>
        </div>
        <img src="http://placehold.it/250x150" alt="" class="item-img">
      </div>
      <div class="describe-item">
        <h2 class="item-title yellow-color">全真模拟</h2>
        <div class="item-detail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          <a href="baidu.com" class="item-btn">详情咨询</a>
        </div>
        <img src="http://placehold.it/250x150" alt="" class="item-img">
      </div>
      <div class="describe-item">
        <h2 class="item-title blue-color">线下培训</h2>
        <div class="item-detail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          <a href="baidu.com" class="item-btn">详情咨询</a>
        </div>
        <img src="http://placehold.it/250x150" alt="" class="item-img">
      </div>
      <div class="describe-item">
        <h2 class="item-title green-color">线上课程</h2>
        <div class="item-detail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          <a href="baidu.com" class="item-btn">详情咨询</a>
        </div>
        <img src="http://placehold.it/250x150" alt="" class="item-img">
      </div>
    </div>
    <div class="more">
      更多服务，即将推出
    </div>
    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2::53" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .service {
    width: 1000px;
    margin: 50px auto;
  }

  .service .service-head {
    width: 760px;
    height: 95px;
    background-color: rgb(245, 245, 245);
    text-align: center;
    padding-top: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    font-size: 13px;
  }

  .service .service-describe {
    width: 1000px;
    overflow: hidden;
  }
  .service-describe .describe-item {
    position: relative;
    min-height: 250px;
    margin: 20px 0;
  }
  .service-describe .describe-item .item-title {
    width: 230px;
    height: 60px;
    line-height: 60px;
    font-size: 19px;
    border-radius: 2px;
    text-align: center;
    box-shadow: 3px 3px 3px #888888;
  }

  .service-describe .describe-item .item-detail {
    width: 710px;
    padding: 20px 0;
  }

  .service-describe .describe-item .item-btn {
    display: block;
    width: 85px;
    height: 33px;
    margin: 0 auto;
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    line-height: 33px;
    border-radius: 4px;
    background-color: rgb(51, 122, 183);
    color: white;
  }

  .service-describe .describe-item .item-btn:hover {
    background-color: rgb(40, 96, 144);
  }

  .service-describe .describe-item .item-img {
    width: 250px;
    height: 150px;
    position: absolute;
    top: 70px;
    right: 10px;
  }

  .pink-color {
    background-color: rgb(239, 90, 161);
  }
  .yellow-color {
    background-color: rgb(255, 223, 37);
  }
  .blue-color {
    background-color: rgb(54, 169, 206);
  }
  .green-color {
    background-color: rgb(208, 225, 125);
  }

  .service .more {
    width: 710px;
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
  }
</style>
