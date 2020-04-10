<template lang="pug">
    div.theater
        div.top 
           span.name {{name}}
           span.score {{score}}
        div.content
            div.card(v-for='item in list' :key='item.id')
                nut-row(:gutter="10")
                    nut-col(:span="6")
                        div.flex-content {{item.date}}
                    nut-col(:span="6")
                        div.flex-content
                            span {{item.types}}
                            br
                            span {{item.xy}}
                    nut-col(:span="6")
                        div.flex-content {{`${item.price}￥`}}
                    nut-col(:span="6")
                        div.flex-content
                            nut-button(small) 选择购票 
</template>
<script>
export default {
  data() {
    return {
      name: "芳华",
      score: "9.5",
      list: [
        {
          id: 1,
          date: "16:16",
          types: "国语3D",
          xy: "3号厅",
          price: 33.5
        },
        {
          id: 2,
          date: "16:16",
          types: "国语3D",
          xy: "3号厅",
          price: 33.5
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.theater {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 40px;
    background: #fff;
    text-align: center;
    line-height: 40px;
    .name {
      font-size: 20px;
      color: rgb(33, 33, 206);
      font-weight: 600;
    }
    .score {
      margin-left: 4px;
      color: sandybrown;
    }
  }
  .content {
    flex: 1;
    overflow-y: auto;
    .card {
      background: #fff;
      margin-top: 14px;
      .flex-content {
        height: 80px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>