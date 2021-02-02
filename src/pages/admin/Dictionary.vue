<template>
  <div class="cases">
    <el-button type="primary" size="small" @click="openDialog()">新增数据</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" width="270" align="center"></el-table-column>
      <el-table-column prop="typeKey" label="键" width="270" align="center"></el-table-column>
      <el-table-column prop="name" label="值" width="270" align="center"></el-table-column>
      <el-table-column label="操作" width="250" align="center">
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
    <el-dialog title="案例编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="数据类型" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据键" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.typeKey" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据值" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
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
    data() {
      return {
        loading: true,
        dialogFormVisible: false,
        formLabelWidth: "120px",
        pageIndex: 1,
        pageSize: 5,
        tableData: [],
        totalCount: 0,
        totalPage:0,
        formData: {
          id: 0,
          type: "",
          typeKey:0,
          name: "",
        },
        options: {}
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
      this.loadData();
    },
    methods: {
      loadData() {
        this.loading = true;
        this.$http
                .post("dataDictionary/pageDataDictionary", { pageNum:this.pageIndex, pageSize:this.pageSize}, this.options)
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
        this.loadData();
      },
      sizeChange(val) {
        window.console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.loadData();
      },
      openDialog() {
        // 清除数据
        this.formData.id = 0;
        this.formData.type = "";
        this.formData.typeKey = "";
        this.formData.name = "";
        this.dialogFormVisible = true;
      },
      // 新增
      handleCreateOrModify() {
        window.console.log(this.formData);
        //window.console.log(JSON.stringify(this.formData));
        if (!this.formData.id) {
          // ID 无效时 视为新增
          this.loading = true;
          this.$http
                  .post("dataDictionary/create", this.formData, this.options)
                  .then(response => {
                    this.loading = false;
                    window.console.log(response);
                    this.$message({
                      message: "创建成功！",
                      type: "success"
                    });
                    this.dialogFormVisible = false;
                    this.loadData();
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
                  .post("dataDictionary/update/"+this.formData.id, this.formData, this.options)
                  .then(response => {
                    this.loading = false;
                    window.console.log(response);
                    this.$message({
                      message: "修改成功！",
                      type: "success"
                    });
                    this.dialogFormVisible = false;
                    this.loadData();
                  })
                  .catch(e => {
                    this.$message({
                      message: "网络或程序异常！" + e,
                      type: "error"
                    });
                  });
        }
      },
      handleEdit(index, row) {
        window.console.log(index, row);
        this.formData = row;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        window.console.log(index, row);
        this.$confirm("此操作将永久此条数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
                .then(() => {
                  // 已确认删除
                  // 调接口删除
                  this.loading = true;
                  this.$http
                          .post(`dataDictionary/delete/`+row.id, null, this.options)
                          .then(response => {
                            this.loading = false;
                            window.console.log(response);
                            this.$message({
                              message: "删除成功！",
                              type: "success"
                            });
                            this.loadData();
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
      },
    }
  };
</script>

<style scoped>
  .el-table {
    margin-top: 20px;
  }
</style>
