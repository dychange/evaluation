<template>
  <div class="container">
    <div class="header">
      <img v-lazy="titleImg" />
      <div class="title">心标杆教育</div>
    </div>
    <img class="code" :src="codeImg" />
  </div>
</template>

<script>
export default {
  name: "Code",
  data() {
    return {
      codeImg: "",
      titleImg: "",
      bgImg: ""
    };
  },
  created() {
    // getCode().then((result) => {
    //   if(result.data.status===200){
    //       this.codeImg=result.data.info
    //   }
    // })
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background: url("") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.code {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2rem;
  margin-left: -1.5rem;
}
.header {
  padding-top: 0.5rem;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
}
.header img {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.title {
  font-size: 0.4rem;
  letter-spacing: 0.04rem;
  font-weight: bold;
}
</style>
