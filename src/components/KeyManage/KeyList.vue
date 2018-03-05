<template>
  <div class="key-list">
    <!--新增key
    密钥生成 密钥分发 密钥更新 密钥存储-->
    <el-table
    :data="keys"
    border>
    <el-table-column
      prop="id"
      label="ID"
      width="160">
    </el-table-column>
    <el-table-column
      prop="keyPath"
      label="密钥路径"
      width="500">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="生成时间"
      width="220">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="editKey(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="success"
          @click="getKeyInfo(scope.$index, scope.row)">查看详情</el-button><!-- <el-button
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
  	data() {
  		return {
  			keys:[],
        activeIndex: 1,
        total: 0,
        pageCount: 0,
      }
    },
    mounted() {
      this.activeIndex = 1;
      this.getAllKeys();
    },
    methods: {
      getAllKeys: function () {
        this.$http.get('drm/key/getAllKeys.do')
          .then((response) => {
            this.keys = response.body.result;
            this.total = this.keys.length;
            this.pageCount = this.keys/10+1;
          }, (response) => {
            this.error = response.msg;
          });
      },
      getKeyInfo () {

      }
    }
  }
</script>
<style>
  .key-list {
    margin: 10px;
    padding: 10px;
  }
</style>
