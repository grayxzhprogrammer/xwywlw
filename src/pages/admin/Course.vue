<template>
  <div class="cases">
    <el-button type="primary" size="small" @click="openDialog()">新增数据</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50"  align="center"></el-table-column>
      <el-table-column prop="year" label="历程年份" width="180"  align="center"></el-table-column>
      <el-table-column prop="content" label="历程内容"  width="550" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
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
    <el-dialog title="发展历程编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="历程年份" :label-width="formLabelWidth">
            <el-date-picker
                    v-model="formData.year"
                    type="month"
                    placeholder="选择月份"
                    format="yyyy-MM"
                    value-format="yyyy-MM"
            >
            </el-date-picker>
<!--          <el-input size="small" v-model="formData.year" autocomplete="off"></el-input>-->
  <!--          <el-date-picker
                    v-model="propValue"
                    class="timePicker"
                    type="month"
                    format="yyyy年MM月"
                    value-format="yyyy年MM月"
                    clearable></el-date-picker>-->
        </el-form-item>
        <el-form-item label="历程内容" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.content" autocomplete="off"></el-input>
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
      tableData: [],
      formData: {
        id: 0,
        year: "",
        content: "",
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
        .post("course/listAll", {}, this.options)
        .then(response => {
          window.console.log(response);
          this.tableData = response.data.data;
          this.loading = false;
        })
        .catch(e => {
          this.$message({
            message: "网络或程序异常！" + e,
            type: "error"
          });
        });
    },
    openDialog() {
      // 清除数据
      this.formData.id = 0;
      this.formData.year = "";
      this.formData.content = "";
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
          .post("course/create", this.formData, this.options)
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
          .post("course/update/"+this.formData.id, this.formData, this.options)
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
            .post(`course/delete/`+row.id, null, this.options)
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
