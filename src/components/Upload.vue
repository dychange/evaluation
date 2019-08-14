<template>
  <div class="container">
    <form action="/api/upload" method="post" enctype="multipart/form-data" class="form">
      <van-uploader
        v-model="formList.fileList"
        :max-count="1"
        :before-read="beforeRead"
        :after-read="afterRead"
        preview-size="4.5rem"
        upload-text="请上传图片"
      />
      <van-field v-model="formList.name" placeholder="请输入姓名" />
      <van-button type="primary" native-type="submit" round icon="upgrade">确认上传</van-button>
    </form>
  </div>
</template>

<script>
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
    afterRead(file) {
      let formData = new FormData();
      formData.append("file", file.file);
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
form button {
  width: 4.5rem;
  margin-top: 2rem;
}
.van-cell {
  width: 4.5rem;
  border-bottom: 0.04rem solid #99ccff;
  border-radius: .2rem;
}
</style>