import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'
window.blog = blog
window.auth = auth
window.request = request


export default {
  name: 'Index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    click1() {
      this.$message.error('错了哦，这是一条错误消息')
    }
  }
}
