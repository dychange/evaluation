<template>
  <div class="container">
    <div class="detailimg">
      <img v-lazy="detailInfo.src" width="100%" height="100%" />
    </div>
    <div class="author">
      <span>{{detailInfo.name}}</span>
      <div>{{detailInfo.reply}}</div>
    </div>
    <div class="comment">
      <h4>导师评论</h4>
      <p>{{detailInfo.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      detailInfo: {
        id: 1,
        name: "abc",
        reply: "aaa",
        good: 123,
        src: "https://img.yzcdn.cn/vant/apple-1.jpg",
        answer:
          "很好阿萨打扫打扫的撒阿斯打扫打扫打扫大所大所阿萨斯大所大所大所大所大所",
        isLike: false
      }
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.detailimg {
  width: 100%;
  height: 6rem;
}
.detailimg img {
  border-radius: 0.2rem;
}

.van-cell,
.van-cell__label,
.van-panel {
  background-color: transparent;
  border-radius: 0.2rem;
}
.van-panel {
  margin-bottom: 0.4rem;
  border: 0.02rem solid #f5f5f5;
}
.author,
.comment {
  padding: 0.2rem;
}
.author {
  border-bottom: 0.02rem solid #ccc;
}
.author div {
  font-size: 0.28rem;
  color: #909399;
}
.comment p{
    text-align: justify;
}
</style>