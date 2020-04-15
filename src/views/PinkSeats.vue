<template lang="pug">
    div.pinkSeats
        div.movInfo
            h3 {{name}}
            p {{`今天4月15号 ${date} ${types}`}}
        div.room
            span.movRoom {{room}}
            div.seats
                span(class='iconfont' v-for='item in seats' :key='item.id' @click='seatsClick(item)') {{item.status==1? '&#xe511':item.status==2? '&#xe625':'&#xe636'}}
        div.status
            span(class='iconfont') 可选 &#xe636;
            span(class='iconfont') 已选 &#xe511;
            span(class='iconfont') 已售 &#xe625;
        div.already
            h4 已选座位
            div(v-for='item in pinkSeats' :key='item.id' @click='clickHandle(item)')
              p {{`${item.row} 排${item.col} 座`}}
              p {{`￥${price}`}}
        nut-button(block @click='pay') {{`${allPrice}确认选座`}}
</template>
<script>
export default {
  data() {
    return {
      name: "",
      date: "",
      room: "",
      types: "",
      price: 12,
      row: 6,
      col: 10,
      seats: [
        { id: 1, row: 1, col: 1, status: 0 },
        { id: 2, row: 1, col: 2, status: 0 },
        { id: 3, row: 1, col: 3, status: 0 },
        { id: 4, row: 1, col: 4, status: 0 },
        { id: 5, row: 1, col: 5, status: 0 },
        { id: 6, row: 1, col: 6, status: 0 },
        { id: 7, row: 1, col: 7, status: 0 },
        { id: 8, row: 1, col: 8, status: 0 },
        { id: 9, row: 1, col: 9, status: 0 },
        { id: 10, row: 1, col: 10, status: 0 },

        { id: 11, row: 2, col: 1, status: 0 },
        { id: 12, row: 2, col: 2, status: 0 },
        { id: 13, row: 2, col: 3, status: 0 },
        { id: 14, row: 2, col: 4, status: 0 },
        { id: 15, row: 2, col: 5, status: 0 },
        { id: 16, row: 2, col: 6, status: 0 },
        { id: 17, row: 2, col: 7, status: 0 },
        { id: 18, row: 2, col: 8, status: 0 },
        { id: 19, row: 2, col: 9, status: 0 },
        { id: 20, row: 2, col: 10, status: 0 },

        { id: 21, row: 3, col: 1, status: 0 },
        { id: 22, row: 3, col: 2, status: 0 },
        { id: 23, row: 3, col: 3, status: 0 },
        { id: 24, row: 3, col: 4, status: 0 },
        { id: 25, row: 3, col: 5, status: 0 },
        { id: 26, row: 3, col: 6, status: 0 },
        { id: 27, row: 3, col: 7, status: 0 },
        { id: 28, row: 3, col: 8, status: 0 },
        { id: 29, row: 3, col: 9, status: 0 },
        { id: 30, row: 3, col: 10, status: 0 },

        { id: 31, row: 4, col: 1, status: 0 },
        { id: 32, row: 4, col: 2, status: 0 },
        { id: 33, row: 4, col: 3, status: 0 },
        { id: 34, row: 4, col: 4, status: 0 },
        { id: 35, row: 4, col: 5, status: 0 },
        { id: 36, row: 4, col: 6, status: 0 },
        { id: 37, row: 4, col: 7, status: 0 },
        { id: 38, row: 4, col: 8, status: 0 },
        { id: 39, row: 4, col: 9, status: 0 },
        { id: 40, row: 4, col: 10, status: 0 },

        { id: 41, row: 5, col: 1, status: 0 },
        { id: 42, row: 5, col: 2, status: 0 },
        { id: 43, row: 5, col: 3, status: 0 },
        { id: 44, row: 5, col: 4, status: 0 },
        { id: 45, row: 5, col: 5, status: 0 },
        { id: 46, row: 5, col: 6, status: 0 },
        { id: 47, row: 5, col: 7, status: 0 },
        { id: 48, row: 5, col: 8, status: 0 },
        { id: 49, row: 5, col: 9, status: 0 },
        { id: 50, row: 5, col: 10, status: 0 },

        { id: 51, row: 6, col: 1, status: 0 },
        { id: 52, row: 6, col: 2, status: 0 },
        { id: 53, row: 6, col: 3, status: 0 },
        { id: 54, row: 6, col: 4, status: 0 },
        { id: 55, row: 6, col: 5, status: 0 },
        { id: 56, row: 6, col: 6, status: 0 },
        { id: 57, row: 6, col: 7, status: 0 },
        { id: 58, row: 6, col: 8, status: 0 },
        { id: 59, row: 6, col: 9, status: 0 },
        { id: 60, row: 6, col: 10, status: 0 }
      ],
      pinkSeats: []
    };
  },
  computed: {
    allPrice() {
      return this.pinkSeats.length > 0
        ? `￥${this.price * this.pinkSeats.length}`
        : "";
    }
  },
  beforeMount() {
    const obj = this.$route.query;
    this.name = obj.name;
    this.date = obj.date;
    this.room = obj.room;
    this.types = obj.types;
  },
  methods: {
    seatsClick(item) {
      if (item.status == 0) {
        item.status = 1;
        this.pinkSeats.push(item);
        return false;
      }
      if (item.status == 1) {
        item.status = 0;
        for (const obj of this.pinkSeats) {
          if (item.id === obj.id) {
            const index = this.pinkSeats.indexOf(obj);
            this.pinkSeats.splice(index, 1);
            break;
          }
        }
        return false;
      }
      if (item.status == 2) {
        return false;
      }
    },
    clickHandle(item) {
      if (item.status == 1) {
        item.status = 0;
        for (const obj of this.pinkSeats) {
          if (item.id === obj.id) {
            const index = this.pinkSeats.indexOf(obj);
            this.pinkSeats.splice(index, 1);
            break;
          }
        }
        return false;
      }
    },
    pay() {
      if (this.pinkSeats.length > 0) {
        for (const item of this.pinkSeats) {
          item.status = 2;
        }
        alert("购票成功");
      } else {
        alert("请选择座位");
      }
    }
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
      word-break: break-all;
      span {
        margin: 5px;
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
    height: 200px;
    background: #fff;
    overflow-y: auto;
    h4 {
      padding-left: 4px;
      box-sizing: border-box;
    }
    div {
      width: 100px;
      height: 50px;
      background: greenyellow;
      display: inline-block;
      margin-left: 2px;
      margin-bottom: 2px;
      p {
        padding-left: 20px;
        box-sizing: border-box;
      }
      p:nth-child(2) {
        color: rgb(223, 166, 62);
      }
    }
  }
  .nut-button {
    height: 50px;
    line-height: 50px;
    background: rgb(119, 119, 202);
  }
}
</style>