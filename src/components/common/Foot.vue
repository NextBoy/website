<template>
  <footer  class="edu-footer">
    <dl>
      <dt>关注我们</dt>
      <dd>微信</dd>
      <dd>QQ</dd>
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
    <dl>
      <dt>QQ扫码加群</dt>
      <dd><img src="../../assets/images/u73.png" alt="" style="width: 100px"></dd>
    </dl>
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
  }
  .edu-footer dl{
    flex: 1;
    text-align: center;
  }
  .edu-footer dl dt {
    font-weight: bold;
  }
</style>
