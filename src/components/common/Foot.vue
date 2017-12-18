<template>
  <footer  class="edu-footer">
    <dl>
      <dt>关于我们</dt>
      <dd>列表内容</dd>
      <dd>列表内容</dd>
    </dl>
    <dl>
      <dt>联系我们</dt>
      <dd>列表内容</dd>
      <dd>列表内容</dd>
    </dl>
    <dl>
      <dt>法律信息</dt>
      <dd>列表内容</dd>
      <dd>列表内容</dd>
    </dl>
    <dl>
      <dt>微信关注</dt>
      <dd><img src="http://placehold.it/110x110" alt=""></dd>
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
