<template>
  <v-ons-page>
    <div class="login">
      <div>
        <input class="input text-input--material" placeholder="请输入用户名" type="text" v-model="name" required>
        <input class="input text-input--material" placeholder="请输入密码" type="password" v-model="pwd" required>
        <v-ons-button ripple modifier="large" class="submit" @click="login()">登录</v-ons-button>
      </div>
    </div>
  </v-ons-page>
</template>
<script>
import H from '../router/request.js'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
    login() {
      H.login().then((re) => {
        console.log(re)
      }, (e) => {
        console.log(e)
      })
      // location.href = '/'
    }
  },
  computed: {}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  >div {
    width: 100%;
    padding: 0 20px;
  }

  .input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
  }
  .submit {
    margin-top: 40px;
  }
}

</style>
