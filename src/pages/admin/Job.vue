<template>
  <div class="cases">
    <el-button type="primary" size="small" @click="openDialog()">发布职位</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="job" label="职位" width="180"  align="center"></el-table-column>
      <el-table-column prop="city" label="城市" width="100"  align="center"></el-table-column>
      <el-table-column prop="workYears" label="工作年限" width="180"  align="center"></el-table-column>
      <el-table-column prop="education" label="学历" width="180"  align="center"></el-table-column>
      <el-table-column prop="createTime" label="发布日期" width="180"  align="center"></el-table-column>
      <el-table-column label="操作" width="180"  align="center">
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
    <el-dialog title="职位编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData" ref="form">
        <el-form-item label="职位名称" prop="job" :label-width="formLabelWidth">
          <el-input v-model="formData.job" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="城市" prop="city" :label-width="formLabelWidth">
          <el-input v-model="formData.city" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工作年限" prop="workYears" :label-width="formLabelWidth">
          <el-select v-model="formData.workYears" placeholder="请选择" >
            <el-option
                    v-for="item in workYearItems"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name"/>
          </el-select>
        </el-form-item>
        <el-form-item label="学历" prop="education"  :label-width="formLabelWidth">
          <el-select v-model="formData.education" placeholder="请选择" >
            <el-option
                    v-for="item in educationItems"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name"/>
          </el-select>
        </el-form-item>
        <el-form-item label="工作职责" prop="responsibilities"  :label-width="formLabelWidth">
          <el-input type="textarea" v-model="formData.responsibilities" :autosize="{minRows:2,maxRows:4}" autocomplete="off" clearable/>

          </el-input>
        </el-form-item>
        <el-form-item label="任职资格" prop="qualifications" :label-width="formLabelWidth">
          <el-input  type="textarea" v-model="formData.qualifications"  :autosize="{minRows:2,maxRows:4}" autocomplete="off" clearable/>
        </el-form-item>
        <el-form-item label="邮箱地址"  prop="email"  :label-width="formLabelWidth"
                      :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
        >
          <el-input  v-model="formData.email" autocomplete="off" clearable/>
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
        workYearItems: [],
        educationItems: [],
        formData: {
          id: 0,
          job: "",
          city: "",
          workYears: "",
          education: "",
          responsibilities: "",
          qualifications: "",
          email:"",
        },
        options: {},
        headers: {}
      };
    },
    mounted() {
      let token =sessionStorage.getItem("token");
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
                .post("job/listAll", {}, this.options)
                .then(response => {
                  this.tableData = response.data.data;
                  this.loading = false;
                })
                .catch(e => {
                  this.$message({
                    message: "网络或程序异常！" + e,
                    type: "error"
                  });
                });
        this.$http
                .post("dataDictionary/selectDataDictionaryData?type=工作年限", {}, this.options)
                .then(response => {
                  this.workYearItems = response.data.data;
                })
                .catch(e => {
                  this.$message({
                    message: "网络或程序异常！" + e,
                    type: "error"
                  });
                });
        this.$http
                .post("dataDictionary/selectDataDictionaryData?type=学历", {}, this.options)
                .then(response => {
                  this.educationItems = response.data.data;
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
        this.formData.job = "";
        this.formData.city = "";
        this.formData.workYears = "";
        this.formData.education = "";
        this.formData.responsibilities = "请输入内容";
        this.formData.qualifications = "请输入内容";
        this.formData.email="";
        this.dialogFormVisible = true;
      },
      // 新增
      handleCreateOrModify() {
        window.console.log(this.formData);
        //window.console.log(JSON.stringify(this.formData));
        this.$refs.form.validate((valid) => {
          if (valid) {
            if (!this.formData.id) {
              // ID 无效时 视为新增
              this.loading = true;
              this.$http
                      .post("job/create", this.formData, this.options)
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
                      .post("job/update/" + this.formData.id, this.formData, this.options)
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
          } else {
            console.log('error submit!!');
            return false;
          }
        })
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
                          .post(`job/delete/`+row.id, null, this.options)
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
      }
    }
  };
</script>

<style scoped>
  .el-table {
    margin-top: 20px;
  }
</style>

