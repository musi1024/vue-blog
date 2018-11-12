import blog from '@/api/blog'

export default {
  name: 'Create',
  data() {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: ''
    }
  },
  methods: {
    onCreate() {
      blog.create({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then((res) => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
    }
  }
}
