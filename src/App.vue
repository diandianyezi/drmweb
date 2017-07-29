<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1"><router-link to="/keyManage">密钥管理</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/mediaManage">多媒体管理</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 60px;width: 100%;"></div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(Element)
  export default {
    name: 'app',
    data: function (){
      return {
        active:true
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
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease; border-top: solid 4px #3091F2; background-color: #fff; box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04); }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 300px!important;}
  a {text-decoration: none}
</style>
