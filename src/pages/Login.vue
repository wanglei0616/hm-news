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
    <div class="btn">
        <hm-button @click="login">登录</hm-button>
    </div>
    <!-- <van-button type="danger" round size="large">登录</van-button> -->
    </div>
</template>

<script>
import axios from 'axios'
import HmInput from '../components/HmInput'
import HmButton from '../components/HmButton'

export default {
  components: {
    // 'hm-input': HmInput
    HmInput,
    HmButton
  },
  data () {
    return {
      username: 'root',
      password: '123'
    }
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
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
      if (res.data.statusCode === 401) {
        alert('用户名或密码错误')
      } else {
        alert('登录成功')
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
  .btn{
    margin-top: 20px;
  }
}
</style>
