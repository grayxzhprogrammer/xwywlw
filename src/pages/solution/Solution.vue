<template>
    <div class="news">
        <banner title="解决方案" />
        <div class="news-section" v-loading="loading">
            <div class="news-section-content">
                <div class="solution">
                    <div class="content-nav">
                        <div
                                class="content-nav-btn"
                                :class="{'content-nav-active':solutionType == 1}"
                                @click="solutionType = 1"
                        >
                            <span>用户端</span>
                        </div>
                        <div
                                class="content-nav-btn"
                                :class="{'content-nav-active':solutionType == 2}"
                                @click="solutionType = 2 "
                        >
                            <span>设备端</span>
                        </div>
                        <div
                                class="content-nav-btn"
                                :class="{'content-nav-active':solutionType == 3}"
                                @click="solutionType = 3 "
                        >
                            <span>商户端</span>
                        </div>
                    </div>

                    <div class="content-nav-item">
                        <div class="item-list" v-for="(item,index) in solutionList" :key="index">
                            <div class="item-img" v-lazy:background-image="item.img"></div>

                            <p class="item-list-title">{{item.title}}</p>
                            <p class="item-list-content">{{item.content1}}</p>
                            <p class="item-list-content">{{item.content2}}</p>
                            <p class="item-list-content">{{item.content3}}</p>
                        </div>
                    </div>
                </div>

                <el-divider class="el-divider-active">
                    <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
                </el-divider>
                <div class="manage">
                    <p class="title">基于物联网技术的智能化管理</p>
                    <div class="content-nav-item">
                        <div class="item-list" v-for="(item,index) in manageList" :key="index">
                            <div class="item">
                                <div class="item-left">
                                    <div class="item-img" v-lazy:background-image="item.img"></div>
                                </div>
                                <div class="item-right">
                                    <p class="item-list-title">{{item.title}}</p>
                                    <span class="item-list-content" style="word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden;">{{item.content1}}</span>
                                    <span class="item-list-content" style="word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden;">{{item.content2}}</span>
                                    <span class="item-list-content" style="word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden;">{{item.content3}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <el-divider class="el-divider-active">
                    <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
                </el-divider>
                <div class="support"> <p class="title">依托大数据的精准营销支持</p>
                    <p class="eTitle">基于大数据与多维度模型搭建，支持场景化的精准运营，为项目管理和营收增值搭建流畅、平衡的解决方案。</p>
                    <div class="content-nav-item">
                        <div class="item-list" v-for="(item,index) in supportList" :key="index">
                            <div class="item-img" v-lazy:background-image="item.img"></div>
                            <p class="item-list-title">{{item.title}}</p>
                            <span class="item-list-content">{{item.content1}}</span>
                            <span class="item-list-content">{{item.content2}}</span>
                            <span class="item-list-content">{{item.content3}}</span>
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
        name: "Solution",
        components: {
            Banner
        },
        data() {
            return {
                loading: true,
                solutionList:[],
                solutionType: 1,
                solution1List:[{
                    "id": 1,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '手机扫码支付，便捷、安全',
                    "content1": '即用即走',
                    "content2": '预约下单',
                    "content3": '订单留存',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '支付宝战略合作，专业，实惠',
                    "content1": '无现金支付',
                    "content2": '数字化运营',
                    "content3": '线上优惠活动',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '7X24h客服系统，智能，高效',
                    "content1": '机器人客服',
                    "content2": '人工远程协同',
                    "content3": '实时跟踪反馈',
                }],
                solution2List:[{
                    "id": 1,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '手机扫码支付，便捷、安全',
                    "content1": '即用即走',
                    "content2": '预约下单',
                    "content3": '订单留存',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '支付宝战略合作，专业，实惠',
                    "content1": '无现金支付',
                    "content2": '数字化运营',
                    "content3": '线上优惠活动',
                },{
                    "id": 3,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '7X24h客服系统，智能，高效',
                    "content1": '机器人客服',
                    "content2": '人工远程协同',
                    "content3": '实时跟踪反馈',
                }],
                solution3List:[{
                    "id": 1,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '手机扫码支付，便捷、安全',
                    "content1": '即用即走',
                    "content2": '预约下单',
                    "content3": '订单留存',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '支付宝战略合作，专业，实惠',
                    "content1": '无现金支付',
                    "content2": '数字化运营',
                    "content3": '线上优惠活动',
                },{
                    "id": 3,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '7X24h客服系统，智能，高效',
                    "content1": '机器人客服',
                    "content2": '人工远程协同',
                    "content3": '实时跟踪反馈',
                }],
                manageList:[{
                    "id": 1,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '设备管理',
                    "content1": '运行状态',
                    "content2": '远程复位',
                    "content3": '快速添加',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '订单管理',
                    "content1": '快速查询',
                    "content2": '一键退款',
                    "content3": '优惠补偿',
                },{
                    "id": 3,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '活动管理',
                    "content1": '快速设置',
                    "content2": '数据跟踪',
                    "content3": '效益分析',
                },{
                    "id": 4,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '智能客服',
                    "content1": '24h实时服务',
                    "content2": '客单问题跟进反馈',
                    "content3": '线下服务快速派单',
                },{
                    "id": 5,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '店铺管理',
                    "content1": '多店铺并行管理',
                    "content2": '多级管理员设置',
                    "content3": '管理权限实时控制',
                },{
                    "id": 6,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '账目管理',
                    "content1": '项目收益一键提现',
                    "content2": '系统自动化分账',
                    "content3": '账目明细留存',
                }],
                supportList:[{
                    "id": 1,
                    "img":'/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg',
                    "title": '手机扫码支付，便捷、安全',
                    "content1": '即用即走',
                    "content2": '预约下单',
                    "content3": '订单留存',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '支付宝战略合作，专业，实惠',
                    "content1": '无现金支付',
                    "content2": '数字化运营',
                    "content3": '线上优惠活动',
                },{
                    "id": 2,
                    "img":'/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg',
                    "title": '7X24h客服系统，智能，高效',
                    "content1": '机器人客服',
                    "content2": '人工远程协同',
                    "content3": '实时跟踪反馈',
                }],
            };
        },
        methods: {
            loadDataBySolutionType() {
                this.loading = true;
                if(this.solutionType==1){
                    this.solutionList=this.solution1List;
                }
                if(this.solutionType==2){
                    this.solutionList=this.solution2List;
                }
                if(this.solutionType==3){
                    this.solutionList=this.solution3List;
                }
                this.loading = false;
                /*this.$http
                    .get(`News?type=${this.solutionType}&num=6`)
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
            this.loadDataBySolutionType();
        },
        watch: {
            solutionType(solutionType) {
                this.loadDataBySolutionType();
            }
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
    .solution{
    .content-nav {
        width: 400px;
        height: 55px;
        margin: 0 auto;
        display: flex;
    //justify-content: center;
        align-items: center;
        position: relative;
        bottom: 30px;
        border: 1px solid red;

    &-btn {
         width: 50%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #e4e4e4;
         transition: all 0.2s;

     }

    .content-nav-active {
        background-color: red;
        color: #fff;
    }
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
        height: 500px;
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
         margin: 5px 0;
         overflow: hidden;
         text-overflow: ellipsis;
         text-align: center;
     }


    }
    }
    }

    .manage {
         width: 1240px;
     // height: 1600 px;
         margin: 0 auto;
         background-color: #fff;
     // border: 1 px solid red;

    .title {
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        font-size: 24px;
    }

    .content-nav-item {
        width: 1070px;
        margin: 0 auto;
        padding-bottom: 50px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    // border: 1 px solid blue;

    .item-list {
        width: 330px;
        height: 330px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px 10px;
        border: 1px solid #15669e;

    .item {
        padding-left: 10px;
    .item-left {
        float: left;
    .item-img {
        width: 100px;
        height: 100px;
        background-color: #cecece;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-origin: content-box;
    }

    }
    .item-right {
        float: right;
        width: calc(100% - 100px);
        padding-left: 20px;
    &-title {
         line-height: 60px;
         color: #15669e;
         font-size: 28px;
         font-weight: bold;
         padding: 0 10px;
         margin: 20px 0;
         overflow: hidden;
         text-overflow: ellipsis;
         text-align: center;
     }
    &-content {
         line-height: 30px;
         font-size: 14px;
         color: gray;
         text-align: center;
     }

    }
    }
    }
    }
    }
    .support{
         width: 1240px;
     //height: 1600px;
         margin: 0 auto;
         background-color: #fff;
     // border: 1px solid red;
    .title{
        padding-top: 20px;
        text-align: center;
        font-size: 24px;
    }
    .eTitle{
        padding-bottom: 20px;
        text-align: center;
        font-size: 14px;
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
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 10px;
        border: 1px solid #15669e;

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
         margin: 5px 0;
         overflow: hidden;
         text-overflow: ellipsis;
         text-align: center;
     }

    &-content {
         line-height: 30px;
         font-size: 14px;
         color: gray;
         text-align: center;
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
    .text-decoration {
        text-decoration: none;
    }

    }
</style>
