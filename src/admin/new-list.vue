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
</template>
<script>
  import {getArticle} from '../api/index'
  export default {
    data () {
      return {
        admin: sessionStorage.jhEduAdmin,
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
        },
        currentPage: 1,  // 页码
        pageSize: 5,
        total: 50  // 条数
      }
    },
    created () {
      if (sessionStorage.jhEduAdmin && sessionStorage.token) {
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
        let self = this
        let dataJson = {
          pageNum: self.currentPage,
          pageSize: self.pageSize
        }
        getArticle(dataJson)
          .then(res => {
            self.tableData = res.data
            self.total = res.total
          })
        // self.newList = [1, 2, 3]
        self.newList.forEach(() => {
          self.showStatus.push(true)
          self.hasLike.push(false)
        })
      },
      // 执行查询
      doQuery () {
      },
      // 删除操作
      deleteNews () {
      },
      exitLogin () {
        sessionStorage.removeItem('jhEduAdmin')
        sessionStorage.removeItem('token')
        this.$router.replace({
          path: '/admin/login'
        })
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
