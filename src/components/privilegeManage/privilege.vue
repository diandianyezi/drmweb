<template>
  <div class="privilege-list">
    <el-button type="danger" class="delete" @click=""><i class="fa fa-trash-o">批量删除</i></el-button>

    <el-table
    :data="licenses"
    border>
     <el-table-column
       type="selection"
       width="55">
     </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      width="160">
    </el-table-column>
    <el-table-column
      prop=""
      label="许可证"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="生成时间">
    </el-table-column>
     <el-table-column
       prop="username"
       label="用户名称">
     </el-table-column>
     <el-table-column
       prop="mediaTitle"
       label="多媒体名称">
     </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="editKey(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="deleteKey(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="total,sizes,prev, pager, next, jumper"
    :total="total"
    :page-count="pageCount"
    style="text-align: center"
    :page-sizes=[10,20,30,40]
    :page-size = 10
  >
  </el-pagination>
  </div>
</template>
<script>
  export default {
  	data(){
  		return {
  			licenses:[],
        total: 0,
        pageCount: 0,
      }
    },
    mounted(){
  		this.getAllLicenses();
    },
    methods: {
      getAllLicenses: function () {
        this.$http.get("drm/privileges")
          .then((response) => {
          this.pris = response.body.result;
          this.total = this.pris.length;
          this.pageCount = this.pris / 10 + 1;
        }, (response) => {
          this.error = response.msg;
        });
      }
    }
  }
</script>
<style>
  .privilege-list {
    margin: 10px;
    padding: 10px;
  }
</style>
