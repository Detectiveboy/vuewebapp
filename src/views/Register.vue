<template lang="pug">
    div.register
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
        nut-textinput(
            v-model="sure"
            placeholder="请再次输入密码"
            :clearBtn="true"
            :has-border='false')
        nut-checkbox(v-model='checkbox') 同意协议
        nut-button(block @click='clickHandle') 注册
</template>
<script>
export default {
  data() {
    return {
      account: "",
      passward: "",
      sure: "",
      checkbox: true
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
      if (!this.passward === this.sure) {
        alert("密码两次不一致");
        return false;
      }
      if (!this.checkbox) {
        alert("请先同意协议");
        return false;
      }
      localStorage.setItem("user", true);
      this.$router.push("/logoin");
    }
  }
};
</script>
<style lang="scss" scoped>
.register {
  height: 100%;
  .nut-textinput {
    border-bottom: 1px solid rgb(133, 130, 130);
    margin: 10px 0 0;
  }
  .nut-button {
    margin-top: 10px;
  }
}
</style>