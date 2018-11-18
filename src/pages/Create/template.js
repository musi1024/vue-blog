import blog from '@/api/blog'

export default {
  name: 'Create',
  data() {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: false,
    }
  },
  methods: {
    onCreate() {
      if (this.title === '') {
        this.$message.error('博客标题不能为空')
      } else if (this.content === '') {
        this.$message.error('博客内容不能为空')
      } else {
        blog.create({
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
  },

}
