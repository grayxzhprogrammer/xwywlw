<template>
  <div class="Team">
    <el-button type="primary" size="small" @click="openDialog()">新增数据</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="img" label="图片" align="center">
        <template slot-scope="scope">
          <img style="width:100%" :src="scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
    <el-dialog title="团队风采编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="风采图片" :label-width="formLabelWidth">
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
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input size="small" v-model="formData.remark" autocomplete="off"></el-input>
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
        img: "",
        remark: "",
      },
      options: {},
      headers: {}
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
    handleSuccess(response, file, fileList) {
      window.console.log(response, file, fileList);
      this.formData.img = response.data;
    },
    loadData() {
      this.loading = true;
      this.$http
        .get("Team/GetTeamAll")
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
      this.formData.img = "";
      this.formData.remark = "";
      this.formData.createTime = new Date();

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
          .post("Team/CreateTeam", this.formData, this.options)
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
          .post("Team/ModifiedTeam", this.formData, this.options)
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
            .post(`Team/DeleteTeam?id=${row.id}`, null, this.options)
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
