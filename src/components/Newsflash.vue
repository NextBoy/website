<template>
  <div class="newsflash">
    <div class="news-list">
      <div class="search-div">
        <el-input placeholder="请输入搜索内容" style="width: 350px"></el-input>
        <el-button type="text"><i class="el-icon-search" style="color: black; font-size: 30px"></i></el-button>
      </div>
      <div class="news-item" v-for="(item, index) in newList" :key="index">
        <h2 class="type">{{ item.type }}</h2>
        <h3 class="title">{{ item.title }}</h3>
        <p class="detail" :class="{short: showStatus[index]}">{{ item.main }}</p>
        <div class="item-footer">
          <span>发布日期: {{ item.createDate }}</span>
          <i class="iconfont icon-guankan" style="font-size: 25px;vertical-align: middle"></i><span
          style="line-height: 25px;margin-right: 40px">浏览次数：{{ item.viewCount }}</span>
          <i class="iconfont icon-dianzan" style="font-size: 25px;vertical-align: baseline" @click="addLike(index)"></i><span
          style="line-height: 25px;margin-right: 140px" :class="{like: hasLike[index]}"
          @click="addLike(index)">点赞：{{item.likeCount}}</span>
          <template>
            <span @click="changeStatus(index)">
              <i class="el-icon-caret-bottom" v-if="showStatus[index]">展开阅读全文</i>
              <i class="el-icon-caret-top" v-else>收起全文</i>
          </span>
          </template>
        </div>
      </div>
    </div>
    <div class="pagination-div">
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div class="block">
      <p>现在加入官方QQ群，获得更多情报！</p>
      <p>电子科大自招群</p>
      <p>扫描下方二维码关注公众号，为您提供独家资讯</p>
      <img src="../assets/images/weixin.png" alt="" class="quickMark">
    </div>
  </div>
</template>
<script>
  import {getArticle, editArticle} from '../api/index'
  export default {
    data () {
      return {
        newList: [{
          type: '成电自招',
          title: '这是标题',
          viewCount: 99,
          likeCount: 188,
          createDate: 'xxxx-xx-xx',
          main: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Aenean euismod bibendum laoreet. Proin gravida dolor sit amet '
        }, {
          type: '成电自招',
          title: '这是标题',
          viewCount: 99,
          likeCount: 188,
          createDate: 'xxxx-xx-xx',
          main: ' Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit ametadipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet '
        }, {
          type: '成电自招',
          title: '这是标题',
          viewCount: 99,
          likeCount: 188,
          createDate: 'xxxx-xx-xx',
          main: ' Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet '
        }],  // 新闻消息
        showStatus: [],  // 展示收起栏状态
        hasLike: [],  // 是否点赞了
        currentPage: 1,  // 页码
        pageSize: 5,
        total: 50  // 条数
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      document.body.scrollTop = 0
    },
    methods: {
      // 获取数据
      getData () {
        let self = this
        let dataJson = {
          pageNum: self.currentPage,
          pageSize: self.pageSize
        }
        getArticle(dataJson)
          .then(res => {
            self.newList = res.data
            self.total = res.total
          })
        // self.newList = [1, 2, 3]
        self.newList.forEach(() => {
          self.showStatus.push(true)
          self.hasLike.push(false)
        })
      },
      // 显示或者收起
      changeStatus (index) {
        this.showStatus.splice(index, 1, !this.showStatus[index])
      },
      // 点赞
      addLike (index) {
        if (!this.hasLike[index]) {
          editArticle({
            id: this.newList[index].id,
            likeCount: this.newList[index].likeCount + 1
          })
            .then(res => {
              console.log(res)
            })
          this.newList[index].likeCount++
          // 补充点赞的数据库操作
          this.hasLike.splice(index, 1, true)
        }
      },
      // 改变页大小
      handleSizeChange (val) {
        this.pageSize = val
        this.getData()
        console.log(`每页 ${val} 条`)
      },
      // 改变页码
      handleCurrentChange (val) {
        this.currentPage = val
        this.getData()
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style scoped>
  .newsflash {
    position: relative;
    min-height: 80vh;
  }

  .newsflash .news-list {
    width: 50%;
    margin: 30px 80px;
  }

  .news-list .news-item {
    border-left: 1px solid black;
  }

  .news-item .type {
    display: inline-block;
    position: relative;
    left: -40px;
    width: 80px;
    height: 80px;
    padding: 10px;
    text-align: center;
    font-size: 25px;
    line-height: 30px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
  }

  .news-item .title {
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
  }

  .news-item .detail {
    padding-left: 40px;
  }

  .news-item .item-footer {
    padding-left: 40px;
  }

  .pagination-div {
    width: 60%;
    text-align: center;
    margin: 100px 0;
  }

  .short {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .like {
    color: red;
  }

  .block {
    position: absolute;
    right: 10%;
    top: 20%;
    width: 310px;
    height: 160px;
    font-size: 12px;
    background-color: rgb(232, 232, 232);
    padding: 10px 15px;
    text-align: center;
  }

  .block .quickMark {
    margin: 10px auto;
    width: 70px;
    height: 70px;
  }

  i:hover {
    cursor: pointer;
  }
</style>
