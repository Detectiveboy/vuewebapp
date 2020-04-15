<template lang="pug">
    div.pinkSeats
        div.movInfo
            h3 {{name}}
            p {{`今天4月15号 ${date} ${types}`}}
        div.room
            span.movRoom {{room}}
            div.seats
                div.row(v-for='o in seatNum' :key='o')
                    span(class='iconfont' v-for='n in seatNum' :key='n') &#xe636;
        div.status
            span(class='iconfont choose') 可选 &#xe636;
            span(class='iconfont choosed') 已选 &#xe511;
            span(class='iconfont sell') 已售 &#xe625;
        div.already
            h4 已选座位
            p {{xy}}
            p {{`￥${price}`}}
        nut-button(block) {{`￥${allPrice}确认选座`}}
</template>
<script>
export default {
  data() {
    return {
      name: "",
      date: "",
      room: "",
      xy: "2排5座",
      types: "",
      price: 12,
      allPrice: 12,
      seatNum: 10
    };
  },
  beforeMount() {
    const obj = this.$route.query;
    this.name = obj.name;
    this.date = obj.date;
    this.room = obj.room;
    this.types = obj.types;
  }
};
</script>
<style lang="scss" scoped>
.pinkSeats {
  height: 100%;
  display: flex;
  flex-direction: column;
  .movInfo {
    height: 60px;
    line-height: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    background: #fff;
    h3 {
      color: rgb(106, 169, 211);
    }
  }
  .room {
    flex: 1;
    text-align: center;
    .movRoom {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      width: 100px;
      background: rgb(94, 94, 105);
      color: rgb(236, 236, 243);
    }
    .seats {
      margin-top: 30px;
      .row {
        span {
          margin: 5px;
        }
      }
    }
  }
  .status {
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid rgb(204, 194, 194);
    text-align: center;
  }
  .already {
    height: 80px;
    background: #fff;
    overflow-y: auto;
    h4 {
      padding-left: 4px;
      box-sizing: border-box;
    }
    p {
      padding-left: 20px;
      box-sizing: border-box;
    }
    p:nth-child(3) {
      color: rgb(223, 166, 62);
    }
  }
  .nut-button {
    height: 50px;
    line-height: 50px;
    background: rgb(119, 119, 202);
  }
}
</style>