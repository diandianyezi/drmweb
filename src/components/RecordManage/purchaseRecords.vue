<template>
  <div class="record-list">
    <el-button type="danger" class="delete" @click=""><i class="fa fa-trash-o">批量删除</i></el-button>

    <el-table
      :data="records"
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
        prop="mediaTitle"
        label="视频名称">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名称">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="购买时间">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价钱">
      </el-table-column>

      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            type="success"
            @click="editKey(scope.$index, scope.row)">查看详情</el-button>
         <!-- <el-button
            size="small"
            type="danger"
            @click="deleteKey(scope.$index, scope.row)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,sizes,prev, pager, next,jumper"
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
        records:[],
        total: 0,
        pageCount: 0,
      }
    },
    mounted(){
      this.getAllRecords();
    },
    methods: {
      getAllRecords: function () {
        this.$http.get("drm/records")
          .then((response) => {
            this.records = response.body.result;
            this.total = this.records.length;
            this.pageCount = this.records / 10 + 1;
          }, (response) => {
            this.error = response.msg;
          });
      }
    }
  }
</script>
<style>
  .record-list {
    margin: 10px;
    padding: 10px;
  }

  .delete {
    margin-bottom: 10px;
    float: right;
  }
</style>
