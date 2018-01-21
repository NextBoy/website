<template>
  <footer  class="edu-footer">
    <dl>
      <dt>关注我们</dt>
      <dd><img src="../../assets/images/icon.png" alt="微信">微信</dd>
      <dd class="QQ">
        <img src="../../assets/images/icon.png" alt="QQ">
        <img src="../../assets/images/QQhover.png" class="QQhover">
        QQ</dd>
    </dl>
    <dl>
      <dt>联系我们</dt>
      <dd>合作洽谈</dd>
      <dd>联系方式</dd>
    </dl>
    <dl>
      <dt>法律信息</dt>
      <dd>知识产权</dd>
      <dd>公司信息</dd>
    </dl>
    <!--<dl>
      <dt>QQ扫码加群</dt>
      <dd><img src="../../assets/images/u73.png" alt="" style="width: 80px"></dd>
    </dl>-->
  </footer>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .edu-footer {
    display: flex;
    flex-direction: row;
    background-color: rgb(215, 215, 215);
    padding: 30px 0;
  }
  .edu-footer dl{
    flex: 1;
    text-align: center;
    line-height: 2;
  }
  .edu-footer dl dt {
    font-weight: bold;
  }
  .QQ {
    position: relative;
  }
  .QQhover {
    position: absolute;
    width: 200px;
    right: -10px;
    bottom: 20px;
    display: none;
  }
  .QQ:hover .QQhover {
    display: block;
  }
</style>
