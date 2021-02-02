<template>
  <div class="admin">
    <el-container style="height:100%">
      <el-aside width="200px" >
        <el-menu default-active="6" class="el-menu-vertical-demo" style="height:100%" router>
          <el-menu-item index="/admin/user">
            <i class="el-icon-star-off"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/job">
            <i class="el-icon-setting"></i>
            <span slot="title">招聘职位</span>
          </el-menu-item>
          <el-menu-item index="/admin/news">
            <i class="el-icon-news"></i>
            <span slot="title">新闻管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/message">
            <i class="el-icon-news"></i>
            <span slot="title">消息管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/course">
            <i class="el-icon-time"></i>
            <span slot="title">历程管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/cases">
            <i class="el-icon-location-outline"></i>
            <span slot="title">案例管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/honor">
            <i class="el-icon-location-outline"></i>
            <span slot="title">荣誉管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/enterprise">
            <i class="el-icon-location-outline"></i>
            <span slot="title">合作企业</span>
          </el-menu-item>
          <el-menu-item index="/admin/dictionary">
            <i class="el-icon-setting"></i>
            <span slot="title">字典管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/imgDictionary">
            <i class="el-icon-setting"></i>
            <span slot="title">图片管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="base-padding">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "admin"
  };
</script>

<style lang="scss" soped>
  .admin {
    border-top: 1px solid rgb(238, 238, 238);
    padding: 0 0;
    width: 100%;
    height: 500px;
  }

  .base-padding {
    padding: 20px;
  }

</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
