<template>
  <div class="page">
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(v, i) in bannerList" :key="i">
        <img :src="v.image" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div class="title">法律援助点({{ list.length }})</div>
      <div v-for="(v, i) in list" :key="i" class="item">
        <img :src="v.image" />
        <div class="info">
          <h2 class="ell">{{ v.name }}</h2>
          <p>
            <span class="ell">{{ v.address }}</span>
            <van-icon name="location-o" />
          </p>
          <a class="p" :href="`tel:${v.phone}`">
            <span class="ell">{{ v.work_time }}</span>
            <van-icon name="phone-o" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHelpSpot, getBanner } from '@/api'
// import loadMore from '@/mixin/loadMore'
export default {
  data() {
    return {
      bannerList: [],
      spot_type: 1,
      list: []
    }
  },
  // mixins: [loadMore],
  mounted() {
    if (!this.$route.query.spot_type) {
      this.$dialog.alert({ message: '非法操作' }).then(res => {
        this.$router.go(-1)
      })
      return
    }
    this.spot_type = this.$route.query.spot_type
    this.init()
  },
  methods: {
    init() {
      getHelpSpot({
        spot_type: this.spot_type
      }).then(res => {
        this.list = res.data.list
      })
      getBanner({
        banner_type: this.spot_type == 1 ? 3 : 4
      }).then(res => {
        this.bannerList = res.data.list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 0.24rem;
  background-color: #f7f5f6;
  min-height: 100vh;
  box-sizing: border-box;
}
.my-swipe {
  width: 100%;
  height: 2.8rem;
  border-radius: 0.1rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  margin-top: 0.24rem;
  padding: 0 0.24rem;
  background-color: #fff;
  border-radius: 0.1rem;
  .title {
    font-size: 0.3rem;
    line-height: 0.9rem;
  }
  .item {
    padding: 0.24rem 0;
    display: flex;
    font-size: 0;
    border-top: 1px solid #eeeeee;
    img {
      width: 1.36rem;
      height: 1.36rem;
      margin-right: 0.24rem;
      flex-shrink: 0;
    }
    .info {
      padding: 0.05rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 0.3rem;
      }
      p,
      .p {
        color: #999999;
        font-size: 0.26rem;
        display: flex;
        span {
          max-width: 4.2rem;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
