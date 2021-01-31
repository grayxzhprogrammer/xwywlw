<template>
  <div class="news">
    <banner title="产品服务" />
    <div class="news-section" v-loading="loading">
      <div class="news-section-content">
        <div class="washing">
          <p class="title">校园智慧洗涤</p>
          <p class="eTitle">通过物联网技术，搭配云端大数据，在校园内以智能洗衣机为点，搭建校园智能洗涤网络。为在校师生提供24小时智慧洗涤服务的同时，传播”科技，让生活更美好”的项目理念。
            后续将以校园智慧洗涤为切入点，全面提校园园师生的生活水平。</p>
          <div class="content-nav-item">
            <div class="item-list" v-for="(item,index) in washingImgList" :key="index">
              <div class="item-img" v-lazy:background-image="imgserver + item.img"></div>
              <p class="item-list-title">{{item.title}}</p>
              <p class="item-list-content">{{item.content}}</p>
            </div>
          </div>
        </div>

        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="market">
          <p class="title">校园智慧商超</p>
          <p class="eTitle">智慧超市是线下商超发展的新方向。智慧超市系统是智慧超市实现的基础，其是基于互联网、物联网和云计算技术等新兴技术，围绕零售行业打造的智能管理系统，可以实现智慧结算、智慧推荐、智能防盗、智慧管理等功能。</p>
          <div class="content-nav-item">
            <div class="item-list" v-for="(item,index) in marketImgList" :key="index">
              <div class="item-img" v-lazy:background-image="imgserver + item.img"></div>
              <p class="item-list-title">{{item.title}}</p>
              <p class="item-list-content">{{item.content}}</p>
            </div>
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <div class="retail">
          <p class="title">校园智慧新零售</p>
          <p class="eTitle">在充分调查校园校园环境后，本着精益求精的精神，为了解决传统校园零售中的弊端，公司以智慧支付为基础，推出了校园智慧新零售业务。</p>
          <div class="content-nav-item">
            <div class="item-list" v-for="(item,index) in retailImgList" :key="index">
              <div class="item-img" v-lazy:background-image="imgserver + item.img"></div>
              <p class="item-list-title">{{item.title}}</p>
              <p class="item-list-content">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "../../components/Banner";
  export default {
    name: "news",
    components: {
      Banner
    },
    data() {
      return {
        loading: true,
        washingImgList: [{
          "id": 1,
          "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
          "title": '多通道无限传输',
          "content": '支持 2G / 4G / NB- IoT/ WIFI /蓝牙等多种无线数据传输方式',
        },{
          "id": 2,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '物联通讯稳定',
          "content": '联网速度快，网络连接稳定，掉线后自动重连',
        },{
          "id": 3,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '信息加密',
          "content": '多重加密技术，确保通信链路数据安全',
        }],
        marketImgList: [{
          "id": 1,
          "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
          "title": '多通道无限传输',
          "content": '支持 2G / 4G / NB- IoT/ WIFI /蓝牙等多种无线数据传输方式',
        },{
          "id": 2,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '物联通讯稳定',
          "content": '联网速度快，网络连接稳定，掉线后自动重连',
        },{
          "id": 3,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '信息加密',
          "content": '多重加密技术，确保通信链路数据安全',
        }],
        retailImgList: [{
          "id": 1,
          "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
          "title": '多通道无限传输',
          "content": '支持 2G / 4G / NB- IoT/ WIFI /蓝牙等多种无线数据传输方式',
        },{
          "id": 2,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '物联通讯稳定',
          "content": '联网速度快，网络连接稳定，掉线后自动重连',
        },{
          "id": 3,
          "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
          "title": '信息加密',
          "content": '多重加密技术，确保通信链路数据安全',
        }],
      };
    },
    methods: {
      loadData() {
        this.loading = true;
        this.loading = false;
        /*this.$http
                .get(`News?type=${this.newstype}&num=6`)
                .then(response => {
                  //console.log(response);
                  this.newsList = response.data;
                  this.loading = false;
                  //window.console.log(this.newsList);
                })
                .catch(function(error) {
                  window.console.log(error);
                });*/
      }
    },
    mounted() {
      this.loadData();
    },
    watch: {
    }
  };
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .news {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    position: relative;
    overflow: hidden;

  &-section {
     width: 100%;
   //height: 1600px;

  &-content {
     width: 1240px;
   //height: 1600px;
     margin: 0 auto;
     background-color: #fff;
   // border: 1px solid red;

  .title{
    padding-top: 50px;
    font-size: 34px;
    text-align: center;
  }
  .eTitle{
    font-size: 20px;
    text-align: center;
    text-indent: 4ex;
    line-height: 30px;
  }
  .content-nav-item {
    width: 1070px;
    margin: 0 auto;

    padding-bottom: 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  //border: 1px solid blue;

  .item-list {
    width: 330px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
    border: 1px solid #15669e;

  &:hover {
     border: 1px solid #fff;
     box-shadow: 0 0 5px 2px #bfd3e0;
   }
  .item-img {
    width: 300px;
    height: 210px;
    background-color: #cecece;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
  }

  &-title {
     line-height: 60px;
     color: #15669e;
     font-size: 22px;
     padding: 0 10px;
     margin: 10px 0;
     overflow: hidden;
     text-overflow: ellipsis;
     text-align: center;
   }

  &-content {
     line-height: 30px;
     font-size: 14px;
     color: gray;
     text-align: center;

   // 文本长度处理 begin
   overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 5;
     -webkit-box-orient: vertical;
     white-space: normal !important;
     word-wrap: break-word;
   // 文本长度处理 ending
   }

  &-more {
     width: 273px;
     padding-top: 20px;
     display: flex;
     justify-content: flex-start;
     align-items: center;

  img {
    width: 12px;
    height: 12px;
  }
  span {
    color: #e13834;
    padding: 0 5px;
  }
  }
  }
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
  }



  }
  }

</style>
