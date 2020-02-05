<template>
  <div id="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h3>
        <i class="el-icon-star-off"></i> 
        <span>vuex练习</span>
      </h3>
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">注册</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          //所有规则都成立
          if (valid) {//把用户信息传到后台
            this.$axios.post("/api/login",{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }).then(res=>{
              if(res.data.errno){//如果登录失败,则弹出失败的提示
                this.$message.error("该用户不存在,请先注册");
                return
              }
              this.$message({
                message: '登陆成功',
                type: 'success'
              });
              //登陆成功 跳转页面
              this.$router.push("/admin")//编程式导航跳转页面admin

              
              /*
              把username的值通过vuex的mutations属性的saveloginUser函数处理
              要修改store(仓库)中的state数据 必须触发函数mutations中的对应函数在函
              数内部修改state的数据
              */
              this.$store.commit("saveloginUser",this.ruleForm.username)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].validate((valid) => {
          //所有规则都成立
          if (valid) {//把用户信息传到后台
            this.$axios.post("/api/register",{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }).then(res=>{
              if(res.data.errno){//返回1 用户已被注册
                this.$message.error("该用户已被注册,请换个用户名");
                return
              }
              this.$message({
                message: '恭喜你注册成功!',
                type: 'success'
              });
            })
              
           
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login{
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    width:500px;
    height:250px;
    padding:20px 30px 40px 0;
    margin:auto;
    box-shadow:0 0 10px 0 blue;
  }
  #login h3{
    font-size:28px;
    text-align:center;
    line-height:70px;
  }
  .el-col{
    border-radius:4px;
  }
  .bg-purple-dark{
    background:#99a9bf;
  }
  .bg-purple{
    background:#d3dce6;
  }
  .bg-purple-light{
    background:#e5e9f2;
  }
  .grid-content{
    border-radius:4px;
    min-height:36px;
  }
  .row-bg{
    padding:10px 0;
    background-color:#f9fafc;
  }
</style>
