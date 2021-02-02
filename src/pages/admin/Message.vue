<template>
    <div class="cases">
        <el-table border :data="tableData" v-loading="loading" style="width: 100%">
            <el-table-column prop="id" label="序号" width="50"  align="center"></el-table-column>
            <el-table-column prop="name" label="联系人姓名" width="100"  align="center"></el-table-column>
            <el-table-column prop="phone" label="联系人电话"  width="150" align="center"></el-table-column>
            <el-table-column prop="company" label="联系人企业"  width="200" align="center"></el-table-column>
            <el-table-column prop="email" label="联系人邮箱"  width="180" align="center"></el-table-column>
            <el-table-column prop="content" label="消息内容"  width="300" align="center"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"  width="150" align="center"></el-table-column>
            <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                    <el-button
                            type="danger"
                            size="small"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.$index, scope.row)"
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
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
                    .post("message/listAll", {}, this.options)
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
                            .post(`message/delete/`+row.id, null, this.options)
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
