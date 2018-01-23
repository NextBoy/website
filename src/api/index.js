import axios from 'axios'

axios.defaults.baseURL = 'http://119.28.108.118:8080/'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error.data)
})

const fetch = (method, url, dataJson) => {
  let config = {
    method: method,
    url: url
  }
  if (method === 'GET' || method === 'get') {
    config.params = dataJson
  } else {
    config.data = dataJson  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  }
  return axios(config)
}

// 获取文章
export const getArticle = (dataJson) => fetch('get', '/noname/article/list/a', dataJson)
// 修改文章
export const editArticle = (dataJson) => fetch('POST', '/noname/article/update', dataJson)
