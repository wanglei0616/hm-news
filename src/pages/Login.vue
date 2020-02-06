<template>
<div class="login">
    <div class="close-btn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="username">
      <hm-input placeholder="请输入用户名" v-model="username" :rules="/^1\d{4,10}$/" err-msg="输入的用户名格式错误"></hm-input>
    </div>
    <div class="password">
      <hm-input placeholder="请输入密码" v-model="password" :rules="/^\d{3,12}$/" err-msg="输入的密码格式有误"></hm-input>
    </div>
    <div class="login-btn">
        <hm-button @click="login">登录</hm-button>
    </div>
    <div class="go-register">
      没有账号？立即<router-link to="/register">注册</router-link>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'root',
      password: '123'
    }
  },
  created () {
    // console.log(this.$route)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async login () {
      console.log('登录了吗')
      if (!this.username || !this.password) return
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/login',
      //   data: {
      //     username: this.username,
      //     password: this.password
      //   }
      // })
      const res = await this.$axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
      if (res.data.statusCode === 401) {
        // alert('用户名或密码错误')
        this.$toast.fail('用户名或密码错误')
      } else {
        this.$toast.success('登陆成功')
        // alert('登录成功')
        // $route.pust('/login')
      }
    }
  }
}
</script>

<style lang="scss" scroped>
.login{
  padding: 20px;
  .close-btn{
    span{
      font-size: 27px
    }
  }
  .logo {
    text-align: center;
    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
  .login-btn{
    margin-top: 20px;
  }
  .go-register{
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 18px;
  }
}
</style>
