import blog from '@/api/blog'

export default {
  name: 'User',
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1,
      user: {}
    }
  },
  created() {
    this.userId = this.$route.params.userId
    this.page = parseInt(this.$route.query.page) || 1
    blog.getByUserId(this.userId, { page: this.page }).then((res) => {
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      if(res.data.length > 0) {
        this.user = res.data[0].user
      }
    })
  },
  methods: {
    onPageChange(newPage) {
      blog.getByUserId(this.userId, { page: newPage }).then((res) => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})  
      })
    }
  }
}