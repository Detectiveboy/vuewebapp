<template lang='pug'>
  div.order
    div.movCard(v-for='item in orderList' :key='item.id')
        nut-row.row
          nut-col(:span="6")
            div.flex-content
              div.img(:style='`background:${item.img}`')
          nut-col(:span="18")
            div(class="flex-content flex-content-light")
              div.msg
                span {{item.name}}
                span {{`${item.num}张`}}
              p.date {{item.date}}
              div.xy
                span {{item.xy.join(',')}}
        div.cardEnd
          span.price {{`总价:${item.price}元`}}
          span.status {{item.status? '已完成':'未完成'}}
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          id: 1,
          img: "red",
          name: "芳华",
          num: 4,
          date: "4月10号 12:00",
          xy: ["位置一", "位置二", "位置三", "位置四"],
          price: 120,
          status: 1
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.order {
  height: 100%;
  overflow-y: auto;
  .movCard {
    border-bottom: 1px solid rgb(211, 208, 208);
    background: #fff;
    .row {
      border-bottom: 1px solid rgb(214, 206, 206);
      .flex-content {
        height: 120px;
        padding: 10px;
        box-sizing: border-box;
        .img {
          height: 100%;
        }
        .msg {
          margin: 10px 0 20px;
        }
        .date {
          margin-bottom: 10px;
        }
      }
    }
    .cardEnd {
      height: 30px;
      line-height: 30px;
      .status {
        float: right;
        margin-right: 10px;
      }
    }
  }
}
</style>
