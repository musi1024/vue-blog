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
