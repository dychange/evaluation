<template>
  <div class="container">
    <div class="detailimg">
      <img v-lazy="detailInfo.src" width="100%" height="100%" />
    </div>
    <div class="author">
      <span>{{detailInfo.name}}</span>
    </div>
    <div class="comment">
      <h4>绘画心理分析</h4>
      <div>{{detailInfo.answer}}</div>
    </div>
    <div class="analysis">
      <h4>维度分析</h4>
      <div class="analysis-item">
        <div><i class="iconfont">&#xe61d;</i>色彩：<span></span></div>
        <div><i class="iconfont">&#xe62f;</i>构图：<span></span></div>
        <div><i class="iconfont">&#xe624;</i>笔触：<span></span></div>
        <div><i class="iconfont">&#xe82b;</i>造型：<span></span></div>
        <div><i class="iconfont">&#xe63a;</i>空间：<span></span></div>
        <div><i class="iconfont">&#xe65f;</i>创意：<span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getListDetail} from '../api/list'
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
  },
  created() {

  },
};
</script>

<style scoped>
h4{
  margin:0 0 .3rem ;
}
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
.comment,
.analysis {
  padding: 0.2rem;
}
.author {
  border-bottom: 0.02rem solid #ccc;
}

.comment div{
    text-align: justify;
}
.analysis-item{
  display: flex;
  flex-direction: column;
}
.analysis-item div{
  margin-bottom: .2rem;
}
.analysis-item .iconfont{
  color: #99ccff;
}
.analysis-item span{
  color: #909399;
  font-size: .3rem;
}
</style>