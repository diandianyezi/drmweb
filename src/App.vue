<template>
  <div id="app" style="width: 100%;">
    <!-- 头部导航 -->
    <header class="header">
      <el-row :span="24">
        <el-col :span="20">
          <el-menu class="el-menu-demo" router
                   :default-active="$route.path.replace('/','')" mode="horizontal">
            <el-menu-item index="vedio"><router-link to="/vedio">多媒体管理</router-link></el-menu-item>
            <el-menu-item index="users"><router-link to="/users">用户管理</router-link></el-menu-item>
            <el-menu-item index="privilegeManage"><router-link to="/privilegeManage">许可管理</router-link></el-menu-item>
            <el-menu-item index="keyManage"><router-link to="/keyManage">密钥管理</router-link></el-menu-item>
            <el-menu-item index="purchaseRecord"><router-link to="/purchaseRecord">购买记录管理</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4" >
          <el-menu class="el-admin-demo" mode="horizontal" @select="" style="width: 100%;">
            <!--<el-menu class="login" mode="horizontal">-->
          <!--<el-button type="text">注册</el-button>-->
          <!--<el-button type="text">管理员</el-button>-->
          <el-submenu index="1" style="float: right;">
            <template slot="title">管理员</template>
            <el-menu-item index="1-1">密码设置</el-menu-item>
            <el-menu-item index="1-2">个人信息</el-menu-item>
            <el-menu-item index="1-3">退出</el-menu-item>
          </el-submenu>
          </el-menu>
          <!--<el-button type="text"><router-link to="/login">登录</router-link></el-button>
       -->
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
        username: "管理员",
        activeIndex: '1'
      }
    },
    methods: {

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
</style>
