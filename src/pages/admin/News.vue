<template>
  <div class="news">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名：">
        <el-input  size="small" v-model="formInline.keyword" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  size="small" @click="onSelect" :loading="loading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small" @click="openDialog()">新增</el-button>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="序号" width="50"  align="center"></el-table-column>
      <el-table-column prop="title" label="新闻标题" width="300" align="center"></el-table-column>
<!--      <el-table-column prop="img" label="图片" align="center">
        <template slot-scope="scope">
          <img style="width:100%" :src="scope.row.img" alt />
        </template>
      </el-table-column>-->
      <el-table-column prop="content" label="新闻内容"  align="center">
        <template slot-scope="scope">
          <p v-if="scope.row.content.length > 100">{{scope.row.content.substring(0,100)}} ...</p>
          <p v-else>{{scope.row.content}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
      <!-- <el-table-column prop="type" label="新闻类别"  align="center">
         <template slot-scope="scope">{{scope.row.type == 1 ? '公司新闻':'行业动态'}}</template>
      </el-table-column>-->
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
                  type="danger"
                  size="small"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="total,sizes,prev, pager, next"
            :page-sizes="[5, 10, 15, 20]"
            :total="totalCount"
            :sizes="totalPage"
            :current-page="pageIndex"
            :page-size="pageSize"
            @current-change="currentChange"
            @size-change="sizeChange"
    ></el-pagination>
    <!--  -->
    <el-dialog title="新闻编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="新闻名称" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新闻图片" :label-width="formLabelWidth">
          <el-upload
                  class="avatar-uploader"
                  action="http://localhost:80/image/save"
                  :headers="headers"
                  :show-file-list="false"
                  :on-success="handleSuccess"
          >
            <img v-if="formData.img" :src="formData.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="新闻内容" :label-width="formLabelWidth">
          <el-input size="small" type="textarea" :rows="10" v-model="formData.content" autocomplete="off"></el-input>
        </el-form-item>
        <!--<el-form-item label="新闻类别" :label-width="formLabelWidth">
          <el-radio v-model="formData.type" :label="1">公司新闻</el-radio>
          <el-radio v-model="formData.type" :label="2">行业动态</el-radio>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="handleCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        options: {},
        headers: {},
        pageIndex: 1,
        pageSize: 5,
        formInline: {
          keyword: "",
        },
        tableData: [],
        totalCount: 0,
        totalPage:0,
        formData: {
          id: 0,
          title: "",
          img: "",
          type: 1,
          content: "",
        },
        dialogFormVisible: false,
        formLabelWidth: "120px",
        loading: true
      };
    },
    mounted() {
      let token =sessionStorage.getItem("token");
      //window.console.log(token);
      this.options = {
        headers: {
          Authorization: token
        }
      };
      this.headers = {
        Authorization: token
      };
      this.onSelect();
    },
    methods: {
      handleSuccess(response, file, fileList) {
        window.console.log(response, file, fileList);
        this.formData.img = response.data;
      },
      onSelect() {
        this.loading = true;
        this.$http
                .post("news/pageNews", {keyword:this.formInline.keyword, pageNum:this.pageIndex, pageSize:this.pageSize}, this.options)
                .then(response => {
                  // window.console.log(response);
                  this.tableData = response.data.data.list;
                  this.totalCount = response.data.data.total;
                  this.totalPage = response.data.data.totalPage;
                  this.loading = false;
                })
                .catch(e => {
                  this.$message({
                    message: "网络或程序异常！" + e,
                    type: "error"
                  });
                });
      },
      currentChange(val) {
        window.console.log(`当前页: ${val}`);
        this.pageIndex = val;
        this.onSelect();
      },
      sizeChange(val) {
        window.console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.onSelect();
      },
      openDialog() {
        // 清除数据
        this.formData.id = 0;
        this.formData.title = "";
        this.formData.img = "";
        this.formData.type = 1;
        this.formData.content = "";
        this.dialogFormVisible = true;
      },
      handleCreateOrModify() {
        if (!this.formData.id) {
          this.loading = true;
          this.$http
                  .post("news/create", this.formData, this.options)
                  .then(response => {
                    window.console.log(response);
                    this.loading = false;
                    this.$message({
                      message: "创建成功！",
                      type: "success"
                    });
                    this.dialogFormVisible = false;
                    this.onSelect();
                  })
                  .catch(e => {
                    this.$message({
                      message: "网络或程序异常！" + e,
                      type: "error"
                    });
                  });
        } else {
          this.loading = true;
          this.$http
                  .post("news/update/"+this.formData.id, this.formData, this.options)
                  .then(response => {
                    this.loading = false;
                    window.console.log(response);
                    this.$message({
                      message: "修改成功！",
                      type: "success"
                    });
                    this.dialogFormVisible = false;
                    this.onSelect();
                  })
                  .catch(e => {
                    this.$message({
                      message: "网络或程序异常！" + e,
                      type: "error"
                    });
                  });
        }
      },
      //编辑
      handleEdit(index, row) {
        //index:第几行   row:这一行的数据
        window.console.log(index, row);
        this.formData = row;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
                .then(() => {
                  // 已确认删除
                  // 调接口删除
                  this.loading = true;
                  this.$http
                          .post(`news/delete/`+row.id, null, this.options)
                          .then(response => {
                            this.loading = false;
                            window.console.log(response);
                            this.$message({
                              message: "删除成功！",
                              type: "success"
                            });
                            this.onSelect();
                          })
                          .catch(e => {
                            this.$message({
                              message: "网络或程序异常！" + e,
                              type: "error"
                            });
                          });
                })
                .catch(() => {
                  this.$message({
                    type: "info",
                    message: "已取消删除"
                  });
                });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-table {
    margin-top: 20px;
  }
</style>
