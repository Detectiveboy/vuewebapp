<template lang="pug">
    div.logoin
        div.img 登录
        nut-textinput(
            v-model="account"
            placeholder="请输入账号"
            :clearBtn="true"
            :has-border='false')
        nut-textinput(
            v-model="passward"
            placeholder="请输入密码"
            :clearBtn="true"
            :has-border='false')
        nut-button(block @click='clickHandle') 登录
        span(@click='register') 注册
</template>
<script>
export default {
  data() {
    return {
      account: "",
      passward: ""
    };
  },
  methods: {
    clickHandle() {
      const regAccount = /^[A-Za-z0-9]{4,15}$/;
      const regPassward = /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      if (!regAccount.test(this.account)) {
        alert(`账号格式不正确`);
        return false;
      }
      if (!regPassward.test(this.passward)) {
        alert(`密码格式不正确`);
        return false;
      }
      const user = localStorage.getItem("user");
      if (!user) alert("请先注册");
      else this.$router.push("/");
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="scss" scoped>
.logoin {
  height: 100%;
  .img {
    height: 230px;
    line-height: 230px;
    text-align-last: center;
    font-size: 30px;
    background: linear-gradient(
      to bottom right,
      rgb(75, 75, 104),
      rgb(126, 144, 223)
    );
  }
  .nut-textinput {
    border-bottom: 1px solid rgb(133, 130, 130);
    margin: 10px 0 0;
  }
}
</style>