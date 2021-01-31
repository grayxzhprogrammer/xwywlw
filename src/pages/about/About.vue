<template>
  <div class="about">
    <banner title="走进星望月" img="../assets/img/about.jpg"  />
    <div class="about-section" v-loading="loading">
      <div class="about-section-content">
        <div class="content-summary">
          <div class="summary-left">
            <p class="title">公司简介</p>
            <p class="eTitle">ABOUT US</p>
            <p class="content">
              星望月物联网科技有限公司是一家全面致力于打造智慧校园生态产业发展的企业。总部位于有“浙江硅谷”之称的杭州市临安区青山湖科技园区，在江西省赣州市设立了运营服务中心。
            </p>
            <p class="content" style=" text-indent:2em;">
              公司本着精益求精且不断创新的原则，以人为本，全面发展，引领创新的服务平台。通过运用智能感应、智能识别、云端大数据等物联网技术对校园环境、资源等各方面进行全方位综合管理，24小时为在校师生创造便捷、高效、智能、环保的生活品质，公司已构建了全方位校园智慧服务生态体系：智能洗衣、智慧超市、新零售、智慧出行、智慧电商等，满足学生全方位、多元化的服务，助力学校智慧后勤建设，提高学校声誉及知名度。
            </p>
            <p class="content" style=" text-indent:2em;">
              公司宗旨：以服务筑口碑，用信誉谋发展，紧跟物联网时代潮流，专注于校园智能化领域的产业投资、运营和服务。
            </p>
          </div>
          <div class="summary-right">
            <img src="../../assets/img/jianjietopmin2.jpg" alt />
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="content-visionAndMission">
          <p class="title">愿景及使命</p>
          <p class="eTitle">Vision And Mission</p>
          <p class="content">
            企业使命：建立智能校园生态圈，用科技推动教育发展。
          </p>
          <p class="content">
            企业愿景：一点一滴铸就成功，同心同德营造辉煌。
          </p>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="content-course">
          <div class="top">
            <h3>发展历程</h3>
            <p>DEVELOPMENT</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div class="course-time">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in courseList" :key="index">
                <div class="time-show">
                  <div class="time-show-item" v-for="(courseOne,one) in item" :key="one">
                    <div class="item-top" :class="{'order-top' : one%2===1}"></div>
                    <el-divider>
                      <i class="el-icon-mobile-phone"></i>
                    </el-divider>
                    <div class="item-bottom" :class="{'order' : one%2===1}">
                      <div class="item-bottom-content">
                        <p>{{courseOne.content}}</p>
                        <p>{{courseOne.year}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="content-culture">
          <p class="title">企业文化</p>
          <p class="eTitle">CULTURE</p>
          <p class="content">
            我们只专注一件事情——工程项目管理
            <br />确保工程无重大安全事故
            <br />确保工程施工单位无大面积返工
            <br />确保工程材料及设备无伪劣产品
            <br />确保工程管理留下痕迹、实施过程可追溯
          </p>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="content-ourOffices">
          <p class="title">办公地点</p>
          <p class="eTitle">Our Offices</p>
          <p class="content">
            杭州总部：浙江省杭州市临安区青山湖街道大园路1188号2装3层
            <br />江西赣州服务中心：江西省赣州市章贡区经三路3号4楼
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "../../components/Banner";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'About',
    components: {
      Banner,
      swiper,
      swiperSlide
    },
    data() {
      return {
        loading: false,
        partnerImg: [],
        courseList: [],
        teamItem:[],
        swiperOption: {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        dialogTableVisible: false,
        dialogUrl: "",
        dialogTitle: ""
      };
    },
    mounted() {
      var courseListData= [{"id":1,"year":"2019年12月","content":"星望月物联网科技有限公司成立"},
        {"id":2,"year":"2020年10月","content":"星望月物联网科技有限公司全资收购蜗居(杭州)信息科技有限公司"},
        {"id":3,"year":"2020年12月","content":"星望月物联网科技有限公司在江西赣州设立服务中心"}];
      var groupCount = Math.ceil(courseListData.length / 2);
      window.console.log(groupCount);
      window.console.log(groupCount);
      for (let i = 0; i < groupCount; i++) {
        let img2 = [];
        for (let j = 0; j < 2; j++) {
          if (courseListData.length - 1 >= i * 2 + j) {
            img2.push(courseListData[i * 2 + j]);
          }
        }
        this.courseList.push(img2);
      }
      window.console.log(this.courseList);
    }
  };
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .about {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    position: relative;
    overflow: hidden;
  &-section {
    width: 100%;
  &-content {
     width: 1240px;
     margin: 0 auto;
     background-color: #fff;

  .content-summary {
  //height: 500px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
  .summary-left {
    width: 600px;
  .title {
    font-size: 25px;
    color: #e13834;
  }
  .eTitle {
    font-size: 17px;
    color: #e13834;
    padding: 20px 0;
  }
  .content {
    color: #14679f;
    font-size: 14px;
    text-indent: 25px;
    line-height: 30px;
  }
  }

  .summary-right {
    width: 400px;
    height: 310px;
    border: 2px solid #1d42b9;
  //animation: imgboxkey 4s infinite;
    border-radius: 10px;
    margin-top: 80px;
    text-align: center;

  img {
    width: 360px;
    height: 270px;
    margin-top: 20px;
  //animation: imgbo 4s infinite;
  }
  }
  }
  .content-visionAndMission{
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
  .title {
    font-size: 25px;
    color: #e13834;
  }
  .eTitle {
    font-size: 17px;
    color: #e13834;
    padding: 20px 0;
  }
  .content {
    color: #14679f;
    font-size: 14px;
    line-height: 30px;
  }
  }
  .content-course {
    padding: 50px 0;
  .course-time {
    width: 1000px;
    height: 400px;
    margin: 20px auto;
  .time-show {
    width: 700px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  .time-show-item {
    width: 350px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

  .item-top,
  .item-bottom {
    height: 190px;
  }
  .item-bottom {
  // display: flex;
  // align-content: center;
  .item-bottom-content {
    background-color: #1667a0;
    margin: 20px 0;
  p {
    color: #fff;
    text-align: center;
    padding: 15px;
  }
  }
  }
  }
  }
  }
  }


  .content-culture {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    .title {
      font-size: 25px;
      color: #e13834;
    }
    .eTitle {
      font-size: 17px;
      color: #e13834;
      padding: 20px 0;
    }
    .content {
      color: #14679f;
      font-size: 14px;
      line-height: 30px;
    }
  }

  .content-ourOffices {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    .title {
      font-size: 25px;
      color: #e13834;
    }
    .eTitle {
      font-size: 17px;
      color: #e13834;
      padding: 20px 0;
    }
    .content {
      color: #14679f;
      font-size: 14px;
      line-height: 30px;
    }
  }
  }
  }
  }

  @keyframes imgboxkey {
    0% {
      border: solid rgb(29, 66, 185) 2px;
    }
    40% {
      border: solid rgb(255, 255, 255) 2px;
    }
    60% {
      border: solid rgb(255, 255, 255) 2px;
    }
    100% {
      border: solid rgb(29, 66, 185) 2px;
    }
  }

  @keyframes imgbo {
    0% {
      transform: scale(1);
      box-shadow: 0px 0px 0px 0px #ababab;
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0px 0px 10px 5px #ababab;
    }
    100% {
      transform: scale(1);
      box-shadow: 0px 0px 0px 0px #ababab;
    }
  }
  .el-divider --horizontal {
    margin: 1px 0;
  }

  .top {
  h3,
  p {
    text-align: center;
    color: #3c6088;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
  }
  .order {
    order: -1;
  }
  .order-top {
    order: 1;
  }
  .el-divider {
    background-color: red;
    height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid red;
  }
  }
  .el-divider-active {
    background-color: #3c6088;
  }
  .honor-big-img {
    width: 100%;
    height: 100%;
    z-index: 10;
    text-align: center;
    padding-bottom: 20px;
    padding: 5%;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

  .el-dialog__body {
    overflow: hidden;
  img {
    width: 100%;
  }
  }
  }
  }
</style>
