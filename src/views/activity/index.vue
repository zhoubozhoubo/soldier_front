<template>
  <div class="page">
    <template v-if="list.length">
      <div v-for="(v, i) in list" :key="i" class="item" @click="$router.push(`/activity/detail?id=${v.id}`)">
        <img :src="v.image" />
        <h2>{{ v.title }}</h2>
        <p class="ell2">{{ v.content }}</p>
      </div>
    </template>
    <p v-else class="nodata">暂无数据</p>
  </div>
</template>
<script>
import { getActivityType } from '@/api'
import loadMore from '@/mixin/loadMore'
export default {
  data() {
    return {
      list: [],
      query: {
        page: 1,
        size: 10
      }
    }
  },
  mounted() {
    this.init()
  },
  mixins: [loadMore],
  methods: {
    init(load) {
      if (!load) {
        this.list = []
        this.query.page = 1
      } else {
        this.query.page++
      }
      getActivityType(this.query).then(res => {
        let list = res.data.list
        if (list.length < this.query.size) {
          this.loadMore = false
        }
        this.list.push(...list)
      })
    },
    addList() {
      this.init(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 0 0.24rem;
}
.item {
  font-size: 0;
  padding: 0.24rem 0;
  border-bottom: 1px solid #d8d8d8;
  img {
    width: 100%;
    height: 2.96rem;
  }
  h2 {
    margin: 0.16rem 0 0.08rem;
    font-size: 0.36rem;
  }
  p {
    font-size: 0.26rem;
  }
}
</style>
