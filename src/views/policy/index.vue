<template>
  <div>
    <div class="swiper-wrapper">
      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(v, i) in bannerList" :key="i">
          <img :src="v.image" />
        </van-swipe-item>
      </van-swipe>
      <!-- <div class="tip">退役军人事务部领导走访军政委政治工作部</div> -->
    </div>
    <div class="tabs">
      <div v-for="(v, i) in tabList" :key="i" class="li" :class="{ active: index == i }" @click="tabChange(i)">{{ v }}</div>
    </div>

    <div v-for="(v, i) in list" :key="i" class="item" @click="$router.push(`/policy/detail?id=${v.id}`)">
      <div class="info">
        <h2 class="ell2"><span v-if="Number(v.is_hot)">热</span>{{ v.title }}</h2>
        <div class="time">{{ v.update_at }}</div>
      </div>
      <img :src="v.image" />
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import { getPolicy, getBanner } from '@/api'
export default {
  data() {
    return {
      bannerList: [],
      index: 0,
      tabList: ['中央政策', '地方政策'],
      centerQuery: {
        policy_type: 1,
        page: 1,
        size: 10
      },
      centerLoad: false,
      centerList: [],
      localQuery: {
        policy_type: 2,
        page: 1,
        size: 10
      },
      localLoadMore: false,
      localList: []
    }
  },
  computed: {
    list() {
      if (this.index == 0) {
        return this.centerList
      } else {
        return this.localList
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      getBanner({
        banner_type: 1
      }).then(res => {
        this.bannerList.push(...res.data.list)
      })
      this.getCenter()
      this.getLocal()
    },
    tabChange(i) {
      this.index = i
      if (i == 1) {
        this.allowLoad = this.videoLoadMore
      } else if (i == 2) {
        this.allowLoad = this.picLoadMore
      }
    },
    getCenter(load) {
      if (!load) {
        this.centerList = []
        this.centerQuery.page = 1
      } else {
        this.centerQuery.page++
      }
      getPolicy(this.centerQuery).then(res => {
        let list = res.data.list
        if (list.length < this.centerQuery.size) {
          this.centerLoadMore = false
        }
        this.centerList.push(...list)
      })
    },
    getLocal(load) {
      if (!load) {
        this.localList = []
        this.localQuery.page = 1
      } else {
        this.localQuery.page++
      }
      getPolicy(this.localQuery).then(res => {
        let list = res.data.list
        if (list.length < this.localQuery.size) {
          this.localLoadMore = false
        }
        this.localList.push(...list)
      })
    },
    addList() {
      if (this.index == 1) {
        this.getCenter(true)
      } else if (this.index == 2) {
        this.getLocal(true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  position: relative;
  .my-swipe {
    height: 3.6rem;
    width: 7.5rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .tip {
    background-color: rgba($color: #000000, $alpha: 0.3);
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 0.3rem;
    color: #fff;
    line-height: 0.73rem;
    padding: 0 0.2rem;
  }
}
.tabs {
  text-align: center;
  border-bottom: 1px solid #eeeeee;
  .li {
    display: inline-block;
    font-size: 0.34rem;
    line-height: 0.84rem;
    & + .li {
      margin-left: 0.5rem;
    }
    &.active {
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}
.item {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #eeeeee;
  .info {
    h2 {
      font-size: 0.3rem;
      span {
        background-color: #ff6012;
        color: #fff;
        font-size: 0.2rem;
        display: inline-block;
        padding: 0.05rem;
        font-weight: normal;
        border-radius: 0.1rem;
      }
    }
    .time {
      margin-top: 0.16rem;
      font-size: 0.26rem;
      color: #999;
    }
  }
  & > img {
    width: 2rem;
    height: 1.6rem;
    flex-shrink: 0;
    margin-left: 0.2rem;
  }
}
</style>
