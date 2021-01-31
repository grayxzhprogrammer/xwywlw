<template>
  <div class="partnerBox">
    <p class="partnerBox-title">
      携手客户和伙伴创造更多可能
    </p>
    <div class="partnerBox-slider1">
      <div class="scroll-temp1">
        <div class="temp-box1" ref="temp1">
          <div v-for="(item,v) in partnerImgs1" :key="v + '1'" class="li">
            <img :src="item.url"/>
          </div>
          <div v-for="(item,v) in partnerImgs1" :key="v + '2'" class="li">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
    </div>
    <div class="partnerBox-slider2">
      <div class="scroll-temp2">
        <div class="temp-box2" ref="temp2">
          <div v-for="(item,v) in partnerImgs2" :key="v + '1'" class="li">
            <img :src="item.url"/>
          </div>
          <div v-for="(item,v) in partnerImgs2" :key="v + '2'" class="li">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let x1 = 0;
  let x2 = 0;
  export default {
    name: 'HomeRecommand',
    data () {
      var huoban1=require("../assets/img/huoban1.png");
      var huoban2=require("../assets/img/huoban2.png");
      var huoban3=require("../assets/img/huoban3.png");
      var huoban4=require("../assets/img/huoban4.png");
      var huoban5=require("../assets/img/huoban5.png");
      var huoban6=require("../assets/img/huoban6.png");
      var huoban7=require("../assets/img/huoban7.png");
      var huoban8=require("../assets/img/huoban8.png");
      var huoban9=require("../assets/img/huoban9.png");
      var huoban10=require("../assets/img/huoban10.png");
      var huoban11=require("../assets/img/huoban11.png");
      var huoban12=require("../assets/img/huoban12.png");
      return {
        tempInterval1: undefined,
        partnerImgs1: [{url:huoban11},{url:huoban12}],
        tempInterval2: undefined,
        partnerImgs2: [{url:huoban1},{url:huoban2},{url:huoban3}, {url:huoban4},{url:huoban5},{url:huoban6}, {url:huoban7},{url:huoban8},{url:huoban9}, {url:huoban10}],
      }
    },
    methods: {
      rollTemp1() {
        let all1 = 0;
        let count1 = this.$refs.temp1.childElementCount;
        for (let i = 0; i < count1; i++) {
          all1 += this.$refs.temp1.children[i].offsetWidth;
        }
        let half1 = all1 >> 1;
        if (x1 < 1 - half1) {
          x1 = 0;
        }
        x1 -= 2;
        this.$refs.temp1.style.transform = "translateX(" + x1 + "px)";
      },
      rollTemp2() {
        let all2 = 0;
        let count2 = this.$refs.temp2.childElementCount;
        for (let i = 0; i < count2; i++) {
          all2 += this.$refs.temp2.children[i].offsetWidth;
        }
        let half2 = all2 >> 1;
        if (x2 < 1 - half2) {
          x2 = 0;
        }
        x2 -= 2;
        this.$refs.temp2.style.transform = "translateX(" + x2 + "px)";
      }
    },
    destroyed() {
      clearInterval(this.tempInterval1);
      clearInterval(this.tempInterval2);
    },
    mounted () {
      this.tempInterval1 = setInterval(this.rollTemp1, 50);
      this.tempInterval2 =setInterval(this.rollTemp2,50)
    }
  }
</script>

<style lang="scss" scoped>
  .partnerBox{
    width: 100%;
    height: 150px;
  &-title{
     margin-top:20px;
     margin-bottom:20px;
     text-align: center;
     font-size: 24px;
     line-height: 20px;
   }
  &-slider1{
     margin:10px 5px;
     height: 80px;
  .scroll-temp1 {
    background:white;
    font-size: 20px;
    top: 100px;
    left: 480px;
    color: #fff;
    height: 300px;
    line-height: 30px;
    overflow: hidden;
  .temp-box1 {
    white-space: nowrap;
  .li {
    display: inline;
    height: 30px;
    padding-right: 20px;
  }
  }
  }
  }
  &-slider2{
     margin:10px 5px;
     height: 80px;
  .scroll-temp2 {
    background:white;
    font-size: 20px;
    top: 20px;
    left: 480px;
    color: #fff;
    height: 300px;
    line-height: 30px;
    overflow: hidden;
  .temp-box2 {
    white-space: nowrap;
  .li {
    display: inline;
    height: 30px;
    padding-right: 20px;
  }
  }
  }
  }
  }
</style>
