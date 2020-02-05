<template>
  <div id="newuser">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>用户列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
</el-card>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="_id" label="用户id" ></el-table-column>
        <el-table-column prop="username" label="用户名" ></el-table-column>
        <el-table-column prop="password" label="用户密码" ></el-table-column>
        <el-table-column prop="age" label="用户年龄" ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
   data() {
      return {
        tableData:[]
      }
    },
    created(){
        //从数据库中获取数据
        this.tableData = this.$store.getters.newUsers
    }
  };
</script>

<style>
 
</style>
