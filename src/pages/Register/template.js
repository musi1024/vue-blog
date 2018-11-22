import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register', 'login']),

    onRegister() {
      this.register({username: this.username, password: this.password})
        .then(() => {
          console.log(auth.getInfo())
          this.$router.push({path: '/'})
        })
    }
  }
}
