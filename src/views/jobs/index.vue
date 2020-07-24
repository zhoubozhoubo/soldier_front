<template>
  <div class="page">
    <div class="title">退役军人就业服务/招聘信息</div>
    <div class="stitle">
      <span>军人e家</span>
    </div>
    <div v-for="v in 10" :key="v" class="item">
      <div class="info">
        <h2 class="ell2">成都某大型事业单位,春温智活动策划岗位,待遇优厚</h2>
        <div class="time">发布时间:2020-06-06</div>
      </div>
      <img src="/imgs/test.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 0.33rem 0.48rem;
}
.title {
  font-size: 0.36rem;
}
.stitle {
  margin: 0.24rem 0;
  font-size: 0.26rem;
  span {
    color: $primary;
  }
}
.item {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #eee;
  .info {
    h2 {
      font-size: 0.3rem;
    }
    .time {
      margin-top: 0.18rem;
      font-size: 0.26rem;
      color: #999;
    }
  }
  & > img {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
    margin-left: 0.2rem;
  }
}
</style>