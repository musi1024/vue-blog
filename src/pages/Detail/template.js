import marked from "marked"
import blog from '@/api/blog'

export default {
  name: 'Detail',
  data() {
    return {
      title: "",       
      user: {}, 
      content: "",
      createdAt: ""
    }
  },
  created () {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      console.log(res);
      this.title = res.data.title
      this.content = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  },
  computed: {
    markdown() {
      return marked(this.content)
    }
  }
} 
