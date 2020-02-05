<template>
  <div id="userlist">


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
import {mapState,mapActions} from "vuex"//辅助函数简写 代码
export default {
    data() {
      return {
        tableData: [{}]
      }
    },
    created(){//在创建模板的时候获取数据 异步数据
        // this.$store.dispatch("getUserList").then(()=>{
        //     this.tableData = this.$store.state.userList //得到数据
        // })
        this.getUserList().then(()=>{
            this.tableData = this.userList //得到数据
        })
    },
    computed:{
        ...mapState(["userList"])
    },
    methods:{
        ...mapActions(["getUserList"])
    }
}
</script>

<style>
 
</style>