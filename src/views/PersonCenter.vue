<template>
  <div class="pcontainer">
    <div class="avatar">
      <van-image
        round
        width="2rem"
        height="2rem"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <span>昵称</span>
    </div>
    <van-cell-group title="个人中心" class="user-group">
     <van-cell icon='label-o' title="个人上传" is-link to="/self" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "PersonCenter"
};
</script>

<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.3rem;
}
.van-image {
  margin: 1rem 0 0.3rem;
}
</style>