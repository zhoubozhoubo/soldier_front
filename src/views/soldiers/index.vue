<template>
  <div class="page">
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(v, i) in bannerList" :key="i">
        <img :src="v.image" />
      </van-swipe-item>
    </van-swipe>
    <div class="tip">点击图片查看退役军人风采</div>
    <ul>
      <li v-for="(v, i) in list" :key="i" @click="$router.push(`/soldiers/detail?id=${v.id}`)">
        <img :src="v.image" />
        <p>{{ v.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSoldier, getBanner } from '@/api'
import loadMore from '@/mixin/loadMore'
export default {
  data() {
    return {
      bannerList: [],
      list: [],
      query: {
        page: 1,
        size: 10
      }
    }
  },
  mixins: [loadMore],
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.list = []
      getSoldier(this.query).then(res => {
        this.list = res.data.list
      })
      getBanner({
        banner_type: 2
      }).then(res => {
        this.bannerList = res.data.list
      })
    },
    addList() {
      getSoldier(this.query).then(res => {
        let list = res.data.list
        if (list.length < this.query.size) {
          this.allowLoad = false
        }
        this.list.push(...list)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 0.2rem;
}
.my-swipe {
  height: 3.6rem;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.tip {
  font-size: 0.3rem;
  text-align: center;
  margin: 0.3rem;
}
ul {
  width: 100%;
  display: grid;
  grid-template-columns: 2rem 2rem 2rem;
  justify-content: space-between;
  justify-items: center;
  grid-row-gap: 0.2rem;
  li {
    display: inline-block;
    width: 2rem;
    img {
      width: 100%;
      height: 2.7rem;
    }
    p {
      font-size: 0.3rem;
      margin-top: 0.1rem;
      text-align: center;
    }
  }
}
</style>
