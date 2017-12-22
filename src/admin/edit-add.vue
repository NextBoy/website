<template>
  <div class="edit-add">
    <div class="admin">
      <span style="color: green;margin-right: 20px">管理员:{{ admin }}</span>
      <el-button type="warning" @click="exitLogin">退出</el-button>
    </div>
    <el-form :model="formData" class="form-wrap">
      <el-form-item label="大标签（最多四个字）" class="input-item" required>
        <el-input v-model.trim="formData.type" placeholder="请限制在四个字内（包含四个字）"></el-input>
      </el-form-item>
      <el-form-item label="标题" class="input-item" required>
        <el-input v-model.trim="formData.type"></el-input>
      </el-form-item>
      <el-form-item label="设置点击量" class="input-item" required>
        <el-input v-model="formData.viewCount"></el-input>
      </el-form-item>
      <el-form-item label="设置点赞数" class="input-item" required>
        <el-input v-model="formData.likeCount"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" class="date-item" required>
        <el-date-picker
          v-model="formData.createDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <vue-editor v-model="formData.main" class="vue-editor"></vue-editor>
      <el-button type="success" class="btn">确认</el-button>
    </el-form>
  </div>
</template>
<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {VueEditor},
    data () {
      return {
        admin: sessionStorage.jhEduAdmin,
        formData: {
          type: '',
          tittle: '',
          createDate: new Date(),
          likeCount: 0,
          viewCount: 0,
          main: ''
        }
      }
    },
    methods: {
      exitLogin () {
        sessionStorage.removeItem('jhEduAdmin')
        sessionStorage.removeItem('token')
        this.$router.replace({
          path: '/admin/login'
        })
      }
    }
  }
</script>
<style scoped>
  .admin {
    text-align: right;
    margin-right: 20px;
  }
  .vue-editor {
    width: 80%;
    height: 400px;
    margin: 20px auto;
  }
  .form-wrap .input-item{
    width: 400px;
    margin: 0 auto;
  }
  .form-wrap .date-item {
    width: 300px;
    margin: 20px auto;
  }
  .form-wrap .btn {
    display: block;
    margin: 120px auto 100px;
  }
</style>
