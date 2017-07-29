<template>
  <!-- 左侧导航 -->
  <div class="main">
    <div class="main-left">
      <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/keyManage/add">增加</el-menu-item>
        <el-menu-item index="/keyManage/remove">删除</el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧主内容区 -->
    <div class="main-right" >
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  /* 主内容区 */
  .main{ display: -webkit-box; display: -ms-flexbox; display: flex; min-height: 800px; border: solid 40px #E9ECF1; background-color: #FCFCFC; }
  .main .main-left{text-align: center;width: 200px;float: left;}
  .main .main-right{-webkit-box-flex: 1; -ms-flex: 1; flex: 1; background-color: #fff; padding: 50px 70px; }
  .main .el-menu{background-color: transparent!important;}
</style>
