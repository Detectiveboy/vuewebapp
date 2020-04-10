<template lang='pug'>
  div.home
    h4 影片
    div.movContent
      div.movCard(v-for='item in movList' :key='item.id')
        nut-row
          nut-col(:span="8")
            div.flex-content
              div.img(:style='`background:${item.img}`')
          nut-col(:span="16")
            div(class="flex-content flex-content-light")
              h3 {{item.name}}
              div.option
                span {{item.screen.join('、')}}
                span.score {{item.score}}
              div.types
                span {{item.types.join('、')}}
              div.actors
                span {{item.actor.toString()}}
              nut-button.buy(@click='clickHandle') 购票
</template>

<script>
export default {
  data() {
    return {
      movList: [
        {
          id: 1,
          img: "red",
          name: "芳华",
          screen: ["2D", "IMAX"],
          score: "9.9分",
          types: ["剧情", "爱情", "战争"],
          actor: ["主演", "黄轩", "苗苗"]
        }
      ]
    };
  },
  methods: {
    clickHandle() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    height: 40px;
    background: #fff;
    text-align: center;
    line-height: 40px;
    color: royalblue;
  }
  .movContent {
    flex: 1;
    overflow-y: auto;
    .movCard {
      border-bottom: 1px solid rgb(211, 208, 208);
      .flex-content {
        height: 220px;
        padding: 10px;
        box-sizing: border-box;
        .img {
          height: 100%;
        }
      }
      .flex-content-light {
        position: relative;
        .option,
        .types {
          margin: 10px 0;
        }
        .score {
          float: right;
          color: rgb(235, 166, 19);
        }
        .buy {
          position: absolute;
          right: 10px;
          bottom: 20px;
        }
      }
    }
  }
}
</style>
