<template>
    <div id="app">
        <el-container>
            <el-header>
                <div class="logo">
                    <img src="./assets/img/toplogo2.png" alt />
                </div>
                <el-menu
                        :default-active="defaultActive"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        :router="router"
                >
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/about">简介</el-menu-item>
                    <el-menu-item index="/business">产品服务</el-menu-item>
                    <el-menu-item index="/solution">解决方案</el-menu-item>
                    <el-menu-item index="/companyDynamics">企业动态</el-menu-item>
                    <el-menu-item index="/contactUs">联系我们</el-menu-item>
                    <el-menu-item index="/systemLogin">系统登入</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <div class="footer" v-show="isShow">
                <div class="footer-content">
                    <ul class="content-nav">
                        <li>
                            <p>走进星望月</p>
                            <span>发展历程</span>
                            <span>企业文化</span>
                        </li>
                        <li>
                            <p>新闻资讯</p>
                            <span>公司新闻</span>
                        </li>
                        <li>
                            <p>产品中心</p>
                            <span>平台目标</span>
                        </li>
                        <li>
                            <p>联系我们</p>
                            <span>邮箱：xwywlwkj@163.com</span>
                            <span>电话：17857068905</span>
                            <span>地址：浙江省杭州市临安区青山湖街道大园路1188号2幢3层</span>
                        </li>
                    </ul>
                   <!-- <img src="./assets/img/ercode.png" alt />-->
                </div>
                <hr align=center width=100% color=#987cb9 SIZE=1/>
                <div class="copyright">
                    <a href="https://beian.miit.gov.cn/"> <span>版权所有 © 星望月物联网科技有限公司 xwyzn.com All Right Reserved 丨浙ICP备20001182号-1</span>
                    </a>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                router: true,
                defaultActive: "/",
                isShow: true
            };
        },
        methods: {
            handleSelect(key) {
                this.isShow = this.defaultActive != key;
                window.console.log(this.isShow);
            }
        }
    };
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    html,
    body {
        height: 100%;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .el-header {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 1240px;
        margin: 0 auto;
    //background-color: #fff;

    .logo {
        width: 280px;
        padding: 10px;
    img {
        width: 100%;
        line-height: 60px;
    }
    }
    }
    .el-main {
        padding: 0 !important;
    }

    .footer {
        width: 100%;
        height: 216px;
        overflow: hidden;
        background-color: #14679f;
    &-content {
         width: 1240px;
         margin: 0 auto;
         padding-top: 20px;
         padding-bottom: 20px;
         display: flex;
         justify-content: space-between;
    .content-nav {
        display: flex;
        justify-content: space-around;
    li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    //justify-content: center;
        align-items: flex-start;
    p {
        font-size: 20px;
        color: #d4edff;
        padding: 10px 0;
    }
    span {
        color: #f7f7f7;
        font-weight: 300;
        padding: 5px 0;
    }
    }
    }
    img {
        width: 170px;
        height: 170px;
        padding: 10px;
    }
    }
    .dividerLine{
        align:center;
        width:300px;
        color:#987cb9;
        SIZE:1px;
    }
    .copyright {
        height: 30px;
        margin-top: 10px;
        background: #125688;
        text-align: center;
    a{
        text-decoration:none;
    span {

        color: #fff;
        line-height: 30px;

    }
    }
    }
    }
</style>
