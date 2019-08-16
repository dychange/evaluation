<template>
  <div class="container">
    <div class="form">
      <van-uploader
        v-model="formList.fileList"
        :max-count="1"
        :before-read="beforeRead"
        preview-size="4.5rem"
        upload-text="请上传图片"
      />
      <van-field v-model="formList.name" placeholder="请输入姓名" />
      <van-button type="primary" round icon="upgrade" @click="handleUpload(formList.fileList)">确认上传</van-button>
    </div>
  </div>
</template>

<script>
import { userUpload } from "../api/list";
export default {
  name: "Upload",
  data() {
    return {
      formList: {
        name: "",
        fileList: []
      }
    };
  },
  methods: {
    beforeRead(file) {
      let isImg = file.type.split("/")[0];
      if (isImg !== "image") {
        this.$toast.fail({
          message: "请上传图片",
          duration: 1500,
          forbidClick: true
        });
        return false;
      }
      return file;
    },
    handleUpload(filelist) {
      let that = this;
      let formData = new FormData();
      if (filelist.length === 0 || !this.formList.name) {
        this.$toast.fail({
          message: "请填写您的\n完整信息",
          duration: 1500
        });
      } else {
        formData.append("file", filelist[0].file);
        formData.append("name", this.formList.name);
        // userUpload(formData).then(result => {
        //   if (result.data.status === 200) {
        //     this.$toast.success({
        //       message: "上传成功\n请等待审核",
        //       duration: 1500
        //     });
        //     this.$router.replace("/index");
        //   }
        // });
      }
    }
  }
};
</script>

<style scoped>
.form {
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-uploader >>> .van-uploader__upload,
.van-uploader >>> .van-uploader__preview {
  margin: 0 0 0.6rem 0;
}
.van-button {
  width: 4.5rem;
  margin-top: 2rem;
}
.van-cell {
  width: 4.5rem;
  border-bottom: 0.04rem solid #99ccff;
  border-radius: 0.2rem;
}
</style>