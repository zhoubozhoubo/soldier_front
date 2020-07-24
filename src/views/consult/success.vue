<template>
  <div class="page">
    <div class="top">
      <van-icon class="ico-success" name="checked" />
      <h2>操作成功</h2>
      <p>
        你描述的问题已提交，请耐心等待
        <br />后续我们将推送消息给你。
      </p>
    </div>
    <div class="btns">
      <van-button block type="info">返回上级页面</van-button>
      <van-button block>关闭</van-button>
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
  background-color: #f6f5f8;
  min-height: 100vh;
}
.top {
  background-color: #fff;
  text-align: center;
  padding: 0.64rem 0;
  font-size: 0;
  .ico-success {
    color: $info;
    font-size: 1.28rem;
  }
  h2 {
    font-size: 0.36rem;
    margin: 0.4rem 0 0.16rem;
  }
  p {
    font-size: 0.26rem;
    color: #999;
  }
}
.btns {
  padding: 0.24rem;
  .van-button {
    & + .van-button {
      margin-top: 0.24rem;
    }
  }
}
</style>