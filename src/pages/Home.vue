<template>
  <div class="home" v-loading="loading">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one">
        <div class="page">
          <h3>星望月物联网</h3>
          <p>XingWangYue IoT</p>
        </div>
        <p class="slogan">立人立己 达人达己</p>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <div class="page">
          <h3>经典案例</h3>
          <p>Suecessful Cass</p>
        </div>
        <ul class="case-item">
          <li
                  v-for="(item,index) in caseList"
                  :key="index"
                  v-lazy:background-image="imgserver + item.Img"
          >
            <router-link
                    class="text-decoration"
                    :to="{ name: 'casedetails', params: { id: item.Id }}"
            >
              <div class="case-item-hover">
                <p class="hover-title">{{item.Title}}</p>
                <div class="bottom"></div>
                <div class="more">
                  <span>MORE</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="page">
          <h3>最新资讯</h3>
          <p>Latest News</p>
        </div>
        <div class="news-content">
          <div class="news-content-item" v-for="(news,i) in newsList" :key="i">
            <div :style="'order: '+ (i%2==0 ? 1: 3)">
              <router-link
                      class="text-decoration"
                      :to="{ name: 'companyDynamicdetails', params: { id: news.Id }}"
              >
                <div class="item-img" v-lazy:background-image="imgserver + news.Img"></div>
              </router-link>
            </div>
            <div style="order: 2">
              <el-divider>
                <i class="el-icon-apple"></i>
              </el-divider>
            </div>
            <div class="item-content" :style="'order: '+ (i%2==0 ? 3: 1)">
              <h3>{{news.Title}}</h3>
              <p>{{news.Content}}</p>
              <span>{{news.CreateTime}}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="row">
      <div class="partner" >
        <p class="title">
          携手客户和伙伴创造更多可能
        </p>
        <div class="partner-content">
          <div class="partner-content-slider1">
            <div class="scroll-temp1">
              <div class="temp-box1" ref="temp1">
                <div v-for="(item,v) in partnerImgs1" :key="v + '1'" class="temp-box1-img">
                  <img :src="item.url"/>
                </div>
                <div v-for="(item,v) in partnerImgs1" :key="v + '2'" class="temp-box1-img">
                  <img :src="item.url"/>
                </div>
              </div>
            </div>
          </div>
          <div class="partner-content-slider2">
            <div class="scroll-temp2">
              <div class="temp-box2" ref="temp2">
                <div v-for="(item,v) in partnerImgs2" :key="v + '1'" class="temp-box2-img">
                  <img :src="item.url"/>
                </div>
                <div v-for="(item,v) in partnerImgs2" :key="v + '2'" class="temp-box2-img">
                  <img :src="item.url"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { swiper, swiperSlide } from "vue-awesome-swiper";
  let x1 = 0;
  let x2 = 0;
  export default {
    name: "Home",
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      var huoban1=require("../../src/assets/img/huoban1.png");
      var huoban2=require("../../src/assets/img/huoban2.png");
      var huoban3=require("../../src/assets/img/huoban3.png");
      var huoban4=require("../../src/assets/img/huoban4.png");
      var huoban5=require("../../src/assets/img/huoban5.png");
      var huoban6=require("../../src/assets/img/huoban6.png");
      var huoban7=require("../../src/assets/img/huoban7.png");
      var huoban8=require("../../src/assets/img/huoban8.png");
      var huoban9=require("../../src/assets/img/huoban9.png");
      var huoban10=require("../../src/assets/img/huoban10.png");
      var huoban11=require("../../src/assets/img/huoban11.png");
      var huoban12=require("../../src/assets/img/huoban12.png");
      return {
        loading: false,
        tempInterval1: undefined,
        partnerImgs1: [{url:huoban11},{url:huoban12}],
        tempInterval2: undefined,
        partnerImgs2: [{url:huoban1},{url:huoban2},{url:huoban3}, {url:huoban4},{url:huoban5},{url:huoban6}, {url:huoban7},{url:huoban8},{url:huoban9}, {url:huoban10}],
        caseList:[{"Id":29,"Img":"/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg","Title":"上海市公共安全教育实训基地项目位","Content":"位于上海市青浦区沪青平公路6888号“东方绿舟”东南 角，四界范围为：东临城市河道，南至沪青平公路，西界绿湖路，北靠现有的东方绿舟停机 坪。项目用地面积65048平方米（以实测为准），新建总建筑面积约为26467平方米（地上 23500平方米，地下2967平方米）","Del":null,"CreateTime":"2020-06-05T21:12:45.387"},{"Id":28,"Img":"/imagestore/2020/0605/fcebfcd1-7b8c-4214-9fc4-c9c275ccaaf0.jpg","Title":"高端装备用特种电缆检测评估服务基地","Content":"高端装备用特种电缆检测评估服务基地建设 一期工程位于上海市宝山区山连路558号， 项目建筑面积为19324.03平方米（地上建 筑面积为15446.74平方米，地下建筑面积\n为3877.29平方米）。","Del":null,"CreateTime":"2020-06-05T21:05:45.157"},{"Id":27,"Img":"/imagestore/2020/0605/e6cad4d5-0f76-4241-a112-8660acf8c281.jpg","Title":"中国移动上海公司临港数据中心","Content":"上海移动临港IDC研发与产业化基地项目一 期数据中心2#机楼微模块机房配套工程","Del":null,"CreateTime":"2020-06-05T21:02:05.567"},{"Id":26,"Img":"/imagestore/2020/0605/0c6fa4a8-94da-4fc5-bac4-76c59d52c2b2.jpg","Title":"上海合作组织国际司法交流培训基地项目","Content":"上海合作组织国际司法交流合作培训基地（上海政法学院）工程位于松江区泗陈公路5488号\n上海政法学院东南部，项目用地面积66125平方米（以实测为准），新建总建筑面积约为 24976平方米，其中地上建筑面积为22476平方米，地下建筑面积约为2500平方米。","Del":null,"CreateTime":"2020-06-05T20:58:05.57"}],
        newsList:[
          {
            "Id":1,
            "Title":"星望月物联网科技有限公司成立",
            "Img":"/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg",
            "Type":1,
            "Content":"      热烈祝贺星望月物联网科技有限公司成立!",
            "CreateTime":"2019-12-17T19:46:46.673"
          },
          {
            "Id":2,
            "Title":"星望月物联网科技有限公司全资收购蜗居(杭州)信息科技有限公司",
            "Img":"/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg",
            "Type":1,
            "Content":"      热烈祝贺星望月物联网科技有限公司全资收购蜗居(杭州)信息科技有限公司。",
            "CreateTime":"2020-10-23T16:24:11.633"
          },
          {
            "Id":3,
            "Title":"星望月物联网科技有限公司在江西赣州设立服务中心",
            "Img":"/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg",
            "Type":1,
            "Content":"      热烈祝贺星望月物联网科技有限公司在江西赣州设立服务中心",
            "CreateTime":"2020-10-23T16:24:11.633"
          }
        ],
        swiperOption: {
          notNextTick: false, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          direction: "vertical", //水平方向移动
          grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
          mousewheelControl: true, //同上
          height: window.innerHeight - 60, // 高度设置，占满设备高度
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          //debugger: true,

          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          on: {
            //监听滑动切换事件，返回swiper对象
            // slideChange: () => {
            //   let swiper = this.$refs.mySwiper.swiper;
            //   //console.log(swiper.activeIndex); //滑动打印当前索引
            //   if (swiper.activeIndex === this.list.length - 1) {
            //     //到最后一个加载更多数据
            //     let newList = [];
            //     let listLength = this.list.length;
            //     for (let i = 0; i < 10; i++) {
            //       newList.push(listLength + i);
            //     }
            //     this.list = this.list.concat(newList);
            //   }
            // }
          },
        },
      };
    },
    created() {
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }

    },
    mounted() {
      this.tempInterval1 = setInterval(this.rollTemp1, 50);
      this.tempInterval2 =setInterval(this.rollTemp2,50)
       /* this.$http
          .all([
            this.$http.get("Cases/GetCasesAll"),
            this.$http.get(`News?type=1&num=3`)
          ])
          .then(
            this.$http.spread((responseCases, responseNews) => {
              this.caseList = responseCases.data;
              this.newsList = responseNews.data;
              this.loading = false;
            })
          );*/
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
  };
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .home {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    position: relative;
    overflow: hidden;
  .swiper-slide {
    font-size: 24px;
  // text-align: center;
  // line-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

  .page {
    text-align: center;
    height: 100px;
    overflow: hidden;
  h3,
  p {
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
  }


  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
  }


  .case-item {
    width: 1100px;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  li {
    width: 330px;
    height: 250px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;

  &:hover {
  .case-item-hover {
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }
  }
  }
  }
  .case-item-hover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }
  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }
  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;
  span {
    color: #fff;
    font-size: 20px;
  }
  }
  }
  // .swiper-slide:nth-child(2n) {
     //   background: skyblue;
     // }
  // .swiper-slide:nth-child(2n-1) {
     //   background: seashell;
     // }
  .slide-one {
    background: url(../assets/img/home_top.jpg) no-repeat center;
    background-size: cover;
  }
  .slide-two {
    background: url(../assets/img/home_do.jpg) no-repeat center;
    background-size: cover;
  }
  .slide-three {
    background: url(../assets/img/home_anli.jpg) no-repeat center;
    background-size: cover;
  }
  .news-content {
    width: 1240px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: center;

  &-item {
     width: 400px;
     display: flex;
     flex-direction: column;

  .item-img {
    width: 360px;
    height: 230px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 0 auto;
  }
  .el-divider {
    background-color: #fff;
    height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
  }
  }
  .item-content {
    width: 360px;
    height: 230px;
    margin: 0 auto;
  //border: 1px solid paleturquoise;
  h3 {
    font-size: 22px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    font-size: 15px;
    height: 80px;
    overflow: hidden;
    margin: 10px 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    word-wrap: break-word;
  }
  span {
    display: block;
    font-size: 14px;
    text-align: end;
  }
  h3,
  p,
  span {
    color: #fff;
  }
  }
  }
  }

  .order {
    order: -1;
  }
  .order-img {
    order: 1;
  }
  .row {
    background-color: white;
    width: 100%;
    height: 320px;
  .partner {
    margin-left: 50px;
    margin-right: 50px;
    width: 100%;
    height: 320px;
    overflow: hidden;


  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    color: #e13834;
    text-align: center;
  }

  .partner-content {
    margin: 0 auto;
    padding-top: 20px;

  .partner-content-slider1 {
    margin: 10px 5px;
    height: 80px;

  .scroll-temp1 {
    line-height: 80px;
    overflow: hidden;

  .temp-box1 {
    white-space: nowrap;

  .temp-box1-img {
    display: inline;
    height: 30px;
    padding-right: 30px;

  img {
    vertical-align: middle;
  }

  }
  }
  }
  }
  .partner-content-slider2 {
    margin: 10px 5px;
    height: 80px;

  .scroll-temp2 {
    line-height: 80px;
    overflow: hidden;

  .temp-box2 {
    white-space: nowrap;

  .temp-box2-img {
    display: inline;
    height: 30px;
    padding-right: 30px;

  img {
    vertical-align: middle;
  }

  }
  }
  }
  }
  }
  }
  }

  }

</style>
