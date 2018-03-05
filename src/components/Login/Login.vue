<!--<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="40px">
      <el-form-item label="用户名">
        <el-input v-model="form.adminname" placeholder="请输入管理员用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          adminname: '',
        }
      }
    }
  }
</script>
<style>
  .login {
    height: 800px;
    width: 800px;
    margin: 0 auto;
  }
</style>-->
<template>
  <div class="dialog">
    <div class="loginPage">
      <h1>版权保护系统</h1>
      <el-form>
        <el-form-item label="管理员">
          <i class="fa fa-user" aria-hidden="true"></i>
          <el-input type="text" id="user" v-model="login.user" @blur="inputBlur('user',login.user)"></el-input>
          <p>{{login.userError}}</p>
        </el-form-item>
        <el-form-item label="密码">
          <i class="fa fa-key" aria-hidden="true"></i>
          <el-input type="password" id="password" v-model="login.password" @blur="inputBlur('password',login.password)"></el-input>
          <p>{{login.passwordError}}</p>
        </el-form-item>
        <el-button type="primary" @click="submitForm('formName')" v-bind:disabled="login.beDisabled">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        login: {
          adminname: '',
          password:''
        }
      }
    }
  }
</script>
<style scoped>
  html,body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  .dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
  }
  .loginPage{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -175px;
    width: 350px;
    min-height: 300px;
    padding: 30px 20px 20px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .loginPage p{
    color: red;
    text-align: left;
  }
</style>
