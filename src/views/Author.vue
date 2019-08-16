<template>
  <div></div>
</template>

<script>
// import { saveUserInfo } from "../utils/localStorage";
export default {
  name: "Author",
  created() {
    let status = this.$route.query.status;
    let url = "/psychology/" + this.$route.query.url;
    if (status == 1) {
      let msg = {
        token: this.$route.query.token,
        openid: this.$route.query.openid
      };
      sessionStorage.setItem('userInfo',JSON.stringify(msg))
      // saveUserInfo("userInfo", msg);
      window.location.href = window.location.origin + url + '?t='+new Date().getTime();
    } else if (status == 0) {
          window.location.href = window.location.origin + "/psychology/code";
    }
  }
};
</script>