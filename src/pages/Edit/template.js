import blog from '@/api/blog'

export default {
  name: 'Edit',
  data() {
    return {
      blogId: null,
      title: '',
      content: '',
      description: '',
      atIndex: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({
      blogId: this.blogId
    }).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit() {
      if (this.title === '') {
        this.$message.error('博客标题不能为空')
      } else if (this.content === '') {
        this.$message.error('博客内容不能为空')
      } else {
        blog.update({
            blogId: this.blogId
          }, {
            title: this.title,
            content: this.content,
            description: this.description,
            atIndex: this.atIndex
          })
          .then((res) => {
            this.$message.success(res.msg)
            this.$router.push({
              path: `/detail/${res.data.id}`
            })
          })
      }
    }
  }
}
