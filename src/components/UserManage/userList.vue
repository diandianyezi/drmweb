<template>
  <div class="user-list">
    <el-button type="danger" class="delete" @click=""><i class="fa fa-trash-o">批量删除</i></el-button>
    <el-table
      :data="users"
      border>
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="注册时间">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="editUser(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="deleteUser(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="total,sizes,prev, pager, next,jumper"
      :total="total"
	  :current-page.sync="currentPage"
      :page-count="pageCount"
      style="text-align: center"
      :page-sizes=[10,20,30,40]
      :page-size = 10
	  @current-change='changeUserList'
    >
    </el-pagination>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        users: null,
        activeIndex: "2",
        pageCount: 0,
        total: 0,
		currentPage: 1,
		pageSize: 0,
		pagenum: 1,
      }
    },
    mounted() {
    	this.getAllUsers();
    },
    methods : {
      getUserById: function () {
        this.$http.get('drm/user/get.do?uid=1')
          .then((response) => {
          console.log(response.body);
            this.api = "hh";
            this.news = response.body.result;
          }, (response) => {
            this.error = response.msg;
          });
      },
      getAllUsers: function () {
        this.$http.get('drm/user/getAllUsers.do?pageSize=10&pagenum=1')
          .then((response) => {
            this.users = response.body.result.users;
            this.total = response.body.result.total;
            this.pageCount = this.users/10+1;
          }, (response) => {
            this.error = response.msg;
          });
      },
      editUser(index, row) {
        console.log(index, row);
      },
      deleteUser(index, row) {
        console.log(index, row);
      },
	  changeUserList() {
		  this.$http.get('drm/user/getAllUsers.do?pageSize=10&pagenum='+this.currentPage)
          .then((response) => {
            this.users = response.body.result.users;
            this.total = response.body.result.total;
            this.pageCount = this.users/10+1;
          }, (response) => {
            this.error = response.msg;
          });
	  }
    }
  }
</script>
<style>
  main {
    border: solid 20px #E9ECF1;
  }

  .delete {
    margin-bottom: 10px;
  }
</style>
