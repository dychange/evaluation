<template>
  <div class="container">
    <van-list
      v-model="loading"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
    >
        <van-panel
          v-for="item in list"
          :key="item.id"
          :title="item.name"
          :desc="item.reply"
          @click="goDetail(item.id)"
        >
          <div class="content">
            <img v-lazy="item.src" width="100%" height="100%" />
          </div>
          <div slot="footer" class="foot">
            <h4>绘画心理分析：</h4>
            <div class="comment">{{item.answer}}</div>
          </div>
        </van-panel>
    </van-list>
    <van-button type="primary" round icon="plus" class="upload" to="/psychology/upload">上传你的作品</van-button>
  </div>
</template>

<script>
import {getList} from '../api/list'
export default {
  name: "home",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "abc",
          reply: "aaa",
          good: 123,
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          answer:
            "很好阿萨打扫打扫的撒阿斯打扫打扫打扫大所大所阿萨斯大所大所大所大所大所",
          isLike: false
        },
        {
          id: 2,
          name: "qwe",
          reply: "zxc",
          good: 123,
          src: "https://img.yzcdn.cn/vant/apple-2.jpg",
          answer: "很好阿萨打扫打扫的撒",
          isLike: true
        },
        {
          id: 3,
          name: "zxc",
          reply: "fdf",
          good: 123,
          src: "https://img.yzcdn.cn/vant/apple-2.jpg",
          answer: "很好阿萨打扫打扫的撒",
          isLike: false
        }
      ],
      error: false,
      finished: false,
      loading: false
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    },
    goDetail(id) {
      this.$router.push("/psychology/detail/" + id);
    }
  }
};
</script>

<style scoped>
.van-cell,
.van-cell__label {
  font-size: 0.32rem;
  border-radius: 0.2rem;
}
.van-panel {
  margin-bottom: 0.4rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.04rem 0.24rem 0 rgba(0, 0, 0, 0.1);
}
.van-panel__footer {
  padding-right: 0.2rem;
}
.content {
  width: 100%;
}
.foot {
  display: flex;
  flex-direction: column;
}
h4{
  margin: 0 0 .1rem;
}
.comment {
  flex: 1;
  padding-right: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.upload {
  width: 3rem;
  position: fixed;
  bottom: 0.3rem;
  left: 50%;
  margin-left: -1.5rem;
}
</style>