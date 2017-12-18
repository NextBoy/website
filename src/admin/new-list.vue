<template>
  <div class="new-list">
    <div class="admin">
      <span style="color: green;margin-right: 20px">管理员:{{ admin }}</span>
      <el-button type="warning" @click="exitLogin">退出</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in Object.keys(tableTitle)"
        :prop="item"
        :key="index"
        :label="tableTitle[item]">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{name: 'editAdd'}">编辑</router-link>
          <span @click="deleteNews">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          type: '大标题',
          title: '小标题',
          likeCount: '点赞数',
          viewCount: '阅读量',
          createDate: '发布日期'
        }, {
          type: '大标题',
          title: '小标题',
          likeCount: '点赞数',
          viewCount: '阅读量',
          createDate: '发布日期'
        }],  // 表单数据
        // 表头
        tableTitle: {
          type: '大标题',
          title: '小标题',
          likeCount: '点赞数',
          viewCount: '阅读量',
          createDate: '发布日期'
        }
      }
    },
    created () {
      if (sessionStorage.admin && sessionStorage.token) {
        this.getData()
      } else {
        this.$router.replace({
          path: '/admin/login'
        })
      }
    },
    methods: {
      // 获取数据
      getData () {
      },
      // 执行查询
      doQuery () {
      },
      // 删除操作
      deleteNews () {
      },
      exitLogin () {
        sessionStorage.removeItem('admin')
        this.$router.replace({
          path: '/admin/login'
        })
      }
    }
  }
</script>
<style>
  .new-list {
    margin: 50px auto;
  }
  .admin {
    text-align: right;
    margin-right: 50px;
    margin-bottom: 50px;
  }
</style>
