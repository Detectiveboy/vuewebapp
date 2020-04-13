<template lang="pug">
    div.my
        div.line(v-for='(item,index) in list' :key='index')
            span.title
                label {{item}}
            span.selected-option >
        nut-button(@click='clickHandle' block) 退出登录
</template>
<script>
export default {
  data() {
    return {
      list: ["我的订单", "优惠卷", "影院会员卡", "想看的电影", "看过的电影"]
    };
  },
  methods: {
    clickHandle() {
      this.$router.push("/logoin");
    }
  }
};
</script>
<style lang="scss" scoped>
.line {
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #bbb3b3;
  box-sizing: border-box;
  padding: 0 10px;
  .selected-option {
    float: right;
  }
}
.line:nth-child(4) {
  margin-top: 10px;
}
</style>