<template>
    <div class="contactUs">
        <banner  title="联系我们"/>

        <div class="contactUs-section" >
            <div class="contactUs-section-content">
                <div  class="joinUs">
                    <p class="title">职位列表</p>
                    <el-table
                            ref="table"
                            style="width: 80%;margin:0 auto"
                            :data="tableData"

                            :row-key="getRowKeys"
                            :expand-row-keys="expands"
                            @expand-change="exChange">
                        <el-table-column
                                prop="job"
                                label="招聘职位"
                                align="center">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="工作地址"
                                align="center">
                        </el-table-column>
                        <el-table-column
                                prop="workYears"
                                label="工作年限"
                                align="center">
                        </el-table-column>
                        <el-table-column
                                prop="education"
                                label="学历"
                                align="center">
                        </el-table-column>
                        <el-table-column
                                prop="createDate"
                                label="发布日期"
                                align="center">
                        </el-table-column>
                        <el-table-column type="expand" >
                            <template slot-scope="props">
                                <el-form label-position="center" inline class="demo-table-expand" @mouse-leave="expandLeave()">
                                    <el-row>
                                        <el-form-item >
                                            <p>工作职责</p>
                                            <p>{{ props.row.jobResponsibilities }}</p>
                                        </el-form-item>
                                    </el-row>
                                    <el-row>
                                        <el-form-item label="">
                                            <p>任职资格</p>
                                            <p>{{ props.row.qualifications }}</p>
                                        </el-form-item>
                                    </el-row>
                                    <el-row>
                                        <el-form-item label="">
                                            <p>请发送邮件至job@qiekj.com</p>
                                        </el-form-item>
                                    </el-row>
                                </el-form>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <el-divider class="el-divider-active">
                    <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
                </el-divider>
                <div class="loc">
                    <div class="loc-left">
                        <p class="contact_title">联系我们</p>
                        <span class="title_sub">高度决定视野,角度改变观念,尺度把握人生。</span>
                        <span class="title_sub">产品不好我们不做！没有能力我们不做！</span>
                        <span>共创全国最大的校园共享服务平台</span>
                     <!--   <p class="contact_title">智慧物联</p>
                        <span class="title_sub">王经理18656357947</span>
                        <span class="title_sub">张经理13771943619</span>
                        <span class="title_sub">曹经理13604049809</span>
                        <p class="contact_title">高端洗衣房加盟</p >
                        <span> 400-668-9966</span>
                        <p class="contact_title"> 互动营销</p>
                        <span>手机：18868787059</span>
                        <span>邮箱：service@xwy.com</span>-->
                        <p class="contact_title">公司地址</p>
                        <span>浙江省杭州市临安区青山湖街道大园路1188号2幢3层</span>
                        <p class="contact_title">赣州服务中心</p>
                        <span>江西省赣州市章贡区经三路3号4楼</span>
                    </div>
                    <div class="loc-right" >
                        <AMap />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    import Banner from "../../components/Banner";
    import AMap from "../../components/AMap";
    export default {
        name: 'ContactUs',
        components:{
            Banner,
            AMap
        },
        data () {
            return {
                loading: true,
                expands: [],
                getRowKeys: (row) => {
                    return row.eqId
                },
                tableData: [{
                    eqId:1,
                    job: '测试工程师',
                    city: '杭州',
                    workYears: '3-5年',
                    education:'大专以上',
                    createDate:'2019-11-03',
                    jobResponsibilities:'工作职责内容1',
                    qualifications:'任职资格内容1'
                }, {
                    eqId:2,
                    job: '人事行政专员',
                    city: '杭州',
                    workYears: '1-3年',
                    education:'大专',
                    createDate:'2019-11-03',
                    jobResponsibilities:'工作职责内容2',
                    qualifications:'任职资格内容2'
                }, {
                    eqId:3,
                    job: '测试工程师',
                    city: '杭州',
                    workYears: '3-5年',
                    education:'大专以上',
                    createDate:'2019-11-03',
                    jobResponsibilities:'工作职责内容1',
                    qualifications:'任职资格内容1'
                }, {
                    eqId:4,
                    job: '人事行政专员',
                    city: '杭州',
                    workYears: '1-3年',
                    education:'大专',
                    createDate:'2019-11-03',
                    jobResponsibilities:'工作职责内容2',
                    qualifications:'任职资格内容2'
                }],
            }
        },
        mounted() {
            // 初始化地图对象，加载地图
            /*       MapLoader().then(aMap => {
                       console.log('%地图异步加载成功%')
                       AMap = aMap;
                       setTimeout(() => {
                         //  this.request();
                           this.createAmap();
                       }, 500)
                   })*/
        },
        methods: {
            exChange(row, rowList) {
                this.loading = true
                var that = this
                if (rowList.length) {
                    that.expands = []
                    if (row) {
                        that.expands.push(row.eqId)
                    }
                } else {
                    that.expands = []
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .contactUs {
        width: 100%;
        height: 100%;
        background-color: #14679f;
        position: relative;
        overflow: hidden;
    &-section {
         width: 100%;
    &-content {
         width: 1240px;
         height: auto;
         margin: 0 auto;
         background-color: #fff;
         padding-top: 20px;
    .joinUs{
        margin-top:20px;
        margin-bottom:50px;
    .title{
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
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

    .loc {
        height: auto;
        overflow:hidden;
        margin-top:20px;
        margin-bottom:50px;
    .loc-left {
        margin-left: 50px;
        margin-bottom: 50px;
        float:left;
    .contact_title {
        font-size: 20px;
        line-height: 40px;
    }
    span {
        word-break: normal;
        width: auto;
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: hidden;
    .title_sub {
        font-size: 14px;
        line-height: 22px;
        padding-bottom: 20px;
    }
    }
    }
    .loc-right {
        margin-right: 50px;
        float:right;
    }

    }

    }

    }
    }
</style>
