<template lang='pug'>
  div#app
    nut-navbar.head(:leftShow="flag" :rightShow="false" @on-click-back="back" ) {{title}}
    div.content 
      router-view
    div#nav(v-if='footer')
      router-link(to="/") 电影
      router-link(to="/order") 订单
      router-link(to="/my") 我的
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      title: "小莱电影",
      footer: true,
      route: [
        { name: "Home", title: "小莱电影", flag: false },
        { name: "Order", title: "我的订单", flag: false },
        { name: "My", title: "我的", flag: false },
        { name: "Detail", title: "详情页", flag: true },
        { name: "Theater", title: "影院", flag: true },
        { name: "Logoin", title: "登录", flag: false },
        { name: "Register", title: "注册", flag: false },
        { name: "PinkSeats", title: "选座", flag: true }
      ],
      fotArr: ["Logoin", "Detail", "Register", "PinkSeats"]
    };
  },
  watch: {
    $route(newVal) {
      for (const item of this.route) {
        if (newVal.name === item.name) {
          this.flag = item.flag;
          this.title = item.title;
          break;
        }
      }
      for (const item of this.fotArr) {
        if (newVal.name === item) {
          this.footer = false;
          break;
        } else this.footer = true;
      }
    }
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  .head {
    height: 44px;
    text-align: center;
    line-height: 44px;
    background: #2c86e0;
    color: #fff;
  }
  .content {
    flex: 1;
    overflow: hidden;
    background: rgb(231, 228, 228);
  }
  #nav {
    height: 44px;
    background: #5881aa;
    display: flex;
    align-items: center;
    a {
      flex: 1;
      text-align: center;
      color: #fff;
    }
    .router-link-exact-active {
      color: rgb(241, 178, 40);
    }
  }
}
</style>
