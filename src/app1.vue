<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row :span="24">
        <el-col :span="20">
          <el-menu class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1"><router-link to="/keyManage">密钥管理</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/users">用户管理</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/privilegeManage">授权管理</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/vedio">多媒体管理</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4" style="background-color: #eef1f6;height: 60px;line-height: 60px;">
          <!--<el-menu class="login" mode="horizontal">-->
          <el-button type="text">注册</el-button>
          <el-button type="text"><router-link to="/login">登录</router-link></el-button>
          <!--</el-menu>-->
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 10px;width: 100%;"></div>
    <main>

      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  import ElButton from "../node_modules/element-ui/packages/button/src/button";
  Vue.use(Element)
  export default {
    components: {ElButton}, name: 'app',
    data: function (){
      return {
        active:true,
        username: "哈哈"
      }
    }
  }
</script>
<style>
  body{margin: 0;}
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header{
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 4px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  }
  header .el-menu-demo{
    padding-left: 300px!important;
  }
  a {
    text-decoration: none
  }
