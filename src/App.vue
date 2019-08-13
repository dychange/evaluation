<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    mounted() {
    let screenWidth = document.documentElement.clientWidth;
    let html = document.querySelector("html");
    html.style.fontSize = (screenWidth / 750) * 100 + "px";
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.van-button--primary{
  background-color: #99CCFF !important;
  border-color: #99CCFF !important;
}
.container {
  padding: .4rem 0.2rem 0;
}
</style>
