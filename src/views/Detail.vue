<template lang="pug">
    div.detail
        div.detailTop
            nut-row
                nut-col(:span="8")
                    div.flex-content
                        div.img(:style='`background:${img}`')
                nut-col(:span="16")
                    div(class='flex-content flex-content-right')
                        h4 {{name}}
                        nut-rate.star(v-model="star" :readOnly="true")
                        p {{score}}
                        div.tag {{tag.join('、')}}
                        div.actor {{actor.toString()}}
                        div.date {{date}}
        div.detailMiddle {{text}}
        div.detailBottom(@click='clickHandle(name)') 立即购买
</template>
<script>
export default {
  data() {
    return {
      text: "",
      name: "芳华",
      img: "red",
      star: 5,
      score: "9.5",
      tag: ["剧情", "爱情", "战争"],
      actor: ["主演", "黄轩,", "苗苗"],
      date: "2020-04-10大陆"
    };
  },
  created() {
    const obj = this.$route.query;
    this.name = obj.name;
    this.img = obj.img;
    this.text =
      "忽冷忽热不是爱，时近时远是备胎，明白这14个字，你的感情会少走很多弯路。真正的爱情，并不是单纯的我爱你，而是遇见你以后，我会更爱我自己，因为最完美的自己，才能配上最好的你。可能每个人都会遇到一个爱而不得的人吧，相比于最初得不到时的哭天抢地，后来的我们渐渐变得平和，开始接受生命里的不可得。所谓爱情，不过是骗骗对方、骗骗自己。运气好的，双方都信了。运气不好不坏的，对方信了、你没信。运气差的，对方没信，你却深信不疑了。我们都已经过了耳听爱情的年纪，再多的甜言蜜语抵不过一碗暴雨后的热姜汤，再深刻的海誓山盟比不上困难来临时，紧紧拉住你的那一双手。";
  },
  methods: {
    clickHandle(name) {
      this.$router.push({
        path: "/theater",
        query: {
          name: name
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  .detailTop {
    background: bisque;
    .flex-content {
      height: 220px;
      box-sizing: border-box;
      padding: 5px;
      .img {
        height: 100%;
      }
      .star {
        margin: 10px 0 20px;
      }
      p {
        margin: 10px 0 10px;
      }
      .tag,
      .actor {
        margin-bottom: 10px;
      }
    }
  }
  .detailMiddle {
    flex: 1;
    color: rgb(141, 141, 160);
    font-size: 18px;
    text-indent: 2em;
    box-sizing: border-box;
    padding: 5px;
  }
  .detailBottom {
    height: 50px;
    color: #fff;
    font-weight: 800;
    text-align: center;
    line-height: 50px;
    background: rgb(56, 56, 163);
  }
}
</style>