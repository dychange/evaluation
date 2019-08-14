<template>
  <div class="scontainer">
    <div class="list" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <div class="list-img">
        <van-image width="100%" height="100%" fit="cover" :src="item.src" />
      </div>
      <div class="list-item">
        <div class="item-title">{{item.name}}</div>
        <div class="item-info">{{item.reply}}</div>
        <div class="item-comment">{{item.answer}}</div>
        <div class="item-check">
          <img v-if="item.isCheck" src="../assets/imgs/checked.png" />
          <img v-else src="../assets/imgs/checking.png" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfUpload",
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
          isCheck: false
        },
        {
          id: 2,
          name: "qwe",
          reply: "zxc",
          good: 123,
          src: "https://img.yzcdn.cn/vant/apple-2.jpg",
          answer: "很好阿萨打扫打扫的撒",
          isCheck: true
        },
        {
          id: 3,
          name: "zxc",
          reply: "fdf",
          good: 123,
          src: "https://img.yzcdn.cn/vant/apple-2.jpg",
          answer: "很好阿萨打扫打扫的撒",
          isCheck: false
        }
      ]
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push("/detail/" + id);
    }
  }
};
</script>

<style scoped>
.scontainer {
  padding: 0 0 0.2rem;
}
.list {
  padding: 0.2rem 0;
  background-color: #fff;
  margin-bottom: 0.2rem;
  display: flex;
  position: relative;
}
.list:focus, .list:active{
  background-color: #6699CC;
}
.list-img {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.2rem;
}
.list-item {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.item-info {
  color: #909399;
  font-size: 0.28rem;
  padding-bottom: 0.06rem;
  border-bottom: 0.02rem solid #ccc;
}
.item-comment {
  margin-top: 0.1rem;
}
.item-check{
  position: absolute;
  right: 0;
  top: 0;
}
</style>