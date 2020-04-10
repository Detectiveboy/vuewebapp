<template lang='pug'>
  div#app
    div.head {{msg}}
    div.content 
      router-view
    div#nav
      router-link(to="/")
        span(@click='clickHandle("home")') 电影
      router-link(to="/order")
        span(@click='clickHandle("order")') 订单
      router-link(to="/my")
        span(@click='clickHandle("my")') 我的
</template>
<script>
export default {
  data() {
    return {
      msg: "小莱电影"
    };
  },
  methods: {
    clickHandle(str) {
      switch (str) {
        case "home":
          this.msg = "小莱电影";
          break;
        case "order":
          this.msg = "我的订单";
          break;
        case "my":
          this.msg = "我的";
          break;
      }
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
