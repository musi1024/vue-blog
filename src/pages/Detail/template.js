import marked from "marked"
import blog from '@/api/blog'
import {
  mapGetters,
} from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      title: "",       
      content: "",
      createdAt: "",
      otherUser: {},
    }
  },
  created () {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      console.log(res);
      this.title = res.data.title
      this.content = res.data.content
      this.createdAt = res.data.createdAt
      this.otherUser = res.data.user
    })
  },
  computed: { 
    ...mapGetters(['user']),
    routerTo() {
      if (this.user && this.user.id === this.otherUser.id) {
        return 'my'
      } else {
        return  `user/${this.otherUser.id}`
      }
    },
    markdown() {
      return marked(this.content)
    }
  }
} 
