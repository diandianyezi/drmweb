<template>
  <div class="media-list">
    <el-button type="danger" class="delete" @click=""><i class="fa fa-trash-o">批量删除</i></el-button>
    <el-button type="primary" class="upload" @click="dialogFormVisible = true"><i class="el-icon-upload el-icon--right"></i>上传视频</el-button>

    <el-dialog title="上传视频" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form">
        <el-row>
          <el-col :span="15">
            <el-form-item label="视频名称" :label-width="formLabelWidth" >
              <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="描述信息" :label-width="formLabelWidth">
          <el-input
            type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="form.descript">
          </el-input>
        </el-form-item>
        <el-form-item label="价钱" :label-width="formLabelWidth">
          <el-input placeholder="请输入价钱" v-model="form.price">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>

       <!-- <el-form-item label="加密方式" :label-width="formLabelWidth">
        <el-select v-model="form.encryptWay" placeholder="请选择加密方式">
          <el-option label="AES" value="0"></el-option>
          <el-option label="DES" value="1"></el-option>
          <el-option label="3DES" value="2"></el-option>
          <el-option label="RSA" value="3"></el-option>
        </el-select>
      </el-form-item>-->
        <el-form-item label="选择文件" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="drm/media/uploadMedia.do"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="uploadSuccess"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">上传视频文件</div>
          </el-upload>
        </el-form-item>
        <!--<el-form-item label="密钥" :label-width="formLabelWidth">
          <el-input v-model="form.key" auto-complete="off" placeholder="请输入密钥"></el-input>
        </el-form-item>-->
        <!--<el-form-item label="密钥" :label-width="formLabelWidth">
          <el- v-model="form.key" auto-complete="off" placeholder="请输入密钥"></el->
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>

    </el-dialog>
    <el-table
      :data="videoList"
      border
      style="width: 100%;">
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
        prop="title"
        label="视频名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="上传时间">
      </el-table-column>
      <!--<el-table-column
        prop="key"
        label="密钥">
      </el-table-column>-->
      <el-table-column
        prop="descript"
        label="描述">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="editVedio(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="deleteVedio(scope.$index, scope.row)">删除</el-button>
          <!--<el-button
            size="small"
            type="success" @click="play(scope.row)">播放</el-button>-->
          <el-button
            size="small"
            type="success" @click="play(scope.row)">查看详情</el-button>
          <!--<el-button
            size="small"
            type="primary"
            @click="download(scope.row)">下载</el-button>-->
        </template>

      </el-table-column>

    </el-table>
    <el-pagination
      background
      layout="total,sizes,prev, pager, next,jumper"
      :total="total"
      :current-page.sync="currentPage"
      style="text-align: center"
      :page-sizes="[10]" 
	  @current-change='changeList'
	  >
    </el-pagination>
   <!-- <vedio controls>
      <source src="/Users/zhangting/Documents/tmp-vedio/test111.m3u8">

    </vedio>
    <video height="500" controls>
      <source src="" type="video/mp4">
      您的浏览器不支持 video 标签。
     </video>-->
  </div>
</template>
<script>
import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
export default {
  components: { ElInput },
  data() {
    return {
      videoList: null, // 全部视频的数量
      videoPageList: null, // 每页显示数量
      dialogTableVisible: false,
      dialogFormVisible: false,
      total: 0,
      pageCount: 0,
	  currentPage: 1,
      form: {
        title: "",
        encryptWay: "",
        descript: "",
        myFile: [],
        price: ""
      },
      formLabelWidth: "120px",
      fileList: [],
      activeIndex: "1"
    };
  },
  mounted() {
    this.getAllMedia();
    this.activeIndex = 1;
    console.log("vedio");
  },

  methods: {
    /*handleChange: function(file, fileList) {
      	// 这里对视频进行加密 调用后端的加密算法
        this.fileList3 = fileList.slice(-3);
      },*/
    getAllMedia: function() {
      // 请求第一页的内容
      this.$http.get("drm/media/getAllMedia.do?pageSize=10&pagenum=1").then(
        response => {
          if (response.body.code == 200) {
            //{"code":200,"msg":"success","result":[{"createTime":"1970-01-01 08:00:00","descript":null,"id":1,"picture":null,"title":"ww","updateTime":"1970-01-01 08:00:00"}]}
            this.videoList = response.body.result.medias;
            this.total = response.body.result.medias.total;
            this.pageCount = this.total / 10 + 1;
          } else {
            this.$message({
              showClose: true,
              message: "查询失败",
              type: "error"
            });
          }
        },
        response => {
          this.error = response.body.msg;
          this.$message({
            showClose: true,
            message: this.error,
            type: "error"
          });
        }
      );
    },
    close() {
      this.dialogFormVisible = false;

      if (this.form && this.form.myFile && this.form.myFile.length !== 0) {
        // 删除服务器上的文件
        this.$http
          .delete("drm/media/deleteMedia.do", { url: file.response.result[0] })
          .then(function(response) {
            if (response.code == 200) {
              // 成功
            } else {
              // 失败
            }
          })
          .catch(function(error) {});
      }
      this.form = {
        title: "",
        encryptWay: "",
        descript: "",
        myFile: []
      };
      this.fileList = [];
    },
    // 上传文件
    submitUpload() {
      this.$refs.upload.submit();
    },
    // 表单提交
    submitForm(form) {
      this.$http.post("drm/media/mediaSave.do", this.form).then(
        function(res) {
          if (res.body.code == 200) {
            this.$message({
              showClose: true,
              message: "保存成功",
              type: "success"
            });
          } else {
            this.$message({
              showClose: true,
              message: this.error,
              type: "保存失败"
            });
          }
        },
        function(error) {
          this.$message({
            showClose: true,
            message: "保存失败",
            type: "error"
          });
        }
      );
      this.dialogFormVisible = false;
    },
    // 删除文件
    handleRemove(file, fileList) {
      if (file.status == "success") {
        console.log("result", file.response.result[0]);
        // 去服务器删除 根据地址
        this.$http
          .delete("drm/media/deleteMedia.do", {
            params: { url: file.response.result[0] }
          })
          .then(function(response) {
            if (response.code == 200) {
              // 成功
            } else {
              // 失败
            }
          })
          .catch(function(error) {});
      } else {
      }
    },
    handlePreview(file) {
      console.log(file);
    },
    // 上传成功
    uploadSuccess(res, file, fileList) {
      if (file.status == "success") {
        console.log(file);
        this.form.myFile.push(file.response.result[0]);
      } else {
        this.$message({
          showClose: true,
          message: file.name + "保存失败",
          type: "error"
        });
      }
    },

    editVedio(index, row) {
      // 弹框

      this.dialogFormVisible = true;
    },
    deleteVedio(index, row) {
      this.$http
        .delete("", { id: row.id })
        .then()
        .catch();
    },

    play(row) {
      this.$router.push({ path: "/play", query: { id: row.id } });
    },

    download(row) {},

    changeList() {
      this.$http.get("drm/media/getAllMedia.do?pageSize=10&pagenum="+this.currentPage).then(
        response => {
          if (response.body.code == 200) {
            //{"code":200,"msg":"success","result":[{"createTime":"1970-01-01 08:00:00","descript":null,"id":1,"picture":null,"title":"ww","updateTime":"1970-01-01 08:00:00"}]}
            this.videoList = response.body.result.medias;
            this.total = response.body.result.medias.total;
            this.pageCount = this.total / 10 + 1;
          } else {
            this.$message({
              showClose: true,
              message: "查询失败",
              type: "error"
            });
          }
        },
        response => {
          this.error = response.body.msg;
          this.$message({
            showClose: true,
            message: this.error,
            type: "error"
          });
        }
	  );
    }
  }
};
</script>
<style>
.media-list {
  margin: 10px 10px;
  padding: 10px 10px;
}

.upload {
  margin-bottom: 10px;
  float: right;
  width: 100px;
}

.delete {
  float: right;
  margin-left: 20px;
  width: 100px;
}
</style>
