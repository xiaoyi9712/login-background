<template>
  <div class="admin">
      <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
     <el-menu-item index="/" class="title" >
        <template slot="title"><i class="el-icon-edit-outline"></i>vuex练习</template>
     </el-menu-item >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-custom"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="/userlist">用户列表</el-menu-item>
          <el-menu-item index="/olduser">大龄用户</el-menu-item>
          <el-menu-item index="/newuser">年轻用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-2">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{$store.state.loginUser}}</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }; return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
    .title{
        font-size:20px;
        background:#333!important
    }
</style>
