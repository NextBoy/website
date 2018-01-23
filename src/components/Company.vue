<template>
  <div class="company">
    <div class="company-head">
      <img src="../assets/images/u53.jpg" alt="" class="head-img">
      <p class="describe">脚踏实地，真诚服务。我们的目标，是星辰大海。</p>
    </div>
    <div class="company-item">
      <h2 class="item-head">成员介绍</h2>
      <div class="item-detail">
        2015年团队成立，2017年公司成功注册。<br>
总经理，周海铭，毕业于电子科技大学通信学院。<br>
监事兼创始人，钟施仪，毕业于电子科技大学通信学院。<br>
教研总监，许翨，毕业于电子科技大学通信学院。<br>
财务总监，胡希国，毕业于电子科技大学通信学院。<br>
      </div>
    </div>
    <div class="company-item">
      <h2 class="item-head">历年成果</h2>
      <div class="item-detail">
        公司经营培训咨询业务多年，保证了每一年的培训成果。从2015到2017年已培训近200位学员，<br/>
        已有近70名学生最终选择通过自主招生考试名额进入我校。2015年培训成员自主招生考试通过<br/>
        率32%，2016年培训成员自主招生考试通过率45.6%，2017年培训成员自主招生考试通过率54%，<br/>
        呈现连年增高的趋势。历年教师平均学生好评率超过97%。<br/>
      </div>
    </div>
    <div class="company-item">
      <h2 class="item-head">公司信念</h2>
      <div class="item-detail">
        公司创立的初衷，是为真正想进入名校的学生家长提供帮助，让学生家长能够通过自主招生<br/>
        考试的成功为高考买一份保险。秉承着对学生家长负责，对电子科大名誉负责的信念，我们<br/>
        精益求精，诚挚服务，只为得到广大学生家长的信任，只为菁华的招牌能成为成电的荣耀。<br/>
      </div>
    </div>
    <div class="img-div">
      <img src="../assets/images/u55.jpg" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      document.body.scrollTop = 0
    }
  }
</script>
<style scoped>
  .company .company-head {
    text-align: center;
    margin: 20px auto;
  }
  .company .company-head img {
    height: 400px;
    padding-bottom: 50px;
  }
  .company .company-head .describe {
    text-align: center;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
  .company .company-item {
    margin-bottom: 100px;
    text-align: center;
    font-size: 17px;
  }
  .company .company-item .item-head {
    text-align: center;
    font-size: 32px;
    padding: 20px 0;
    font-weight: bold;
  }
  .company .img-div {
    margin-bottom: 150px;
    text-align: center;
  }
  .company .img-div img {
    /*width: 430px;
    height: 200px;*/
  }
  .item-detail {
    font-size: 20px;
  }
</style>
