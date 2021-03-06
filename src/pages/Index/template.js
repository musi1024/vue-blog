import blog from '@/api/blog'
import {mapGetters} from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndex({ page: this.page }).then((res) => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },
  methods: {
    onPageChange(newPage) {
      blog.getIndex({ page: newPage }).then((res) => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/', query: { page: newPage}})  
      })
    },
    toUser(id) {
      if (this.user && this.user.id === id) {
        this.$router.push({ path: '/my'})
      } else {
        this.$router.push({ path: `/user/${id}`})
      }
    }
  },
  computed: {
    ...mapGetters(['user']),
  }
}
