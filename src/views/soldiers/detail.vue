<template>
  <div class="page">
    <h1 class="title">{{ info.name }}</h1>
    <div class="stitle">
      <span>军人e家</span>
      {{ info.update_at }}
    </div>
    <img :src="info.image" />
    <p class="content" v-html="info.comment"></p>
  </div>
</template>
<script>
import { getSoldierDetail } from '@/api'
export default {
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    let id = this.$route.query.id
    if (!id) {
      this.$dialog.alert({ message: '缺少参数id!' }).then(res => {
        this.$router.go(-1)
      })
      return
    }
    this.id = id
    this.init()
  },
  methods: {
    init() {
      getSoldierDetail({ id: this.id }).then(res => {
        this.info = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 0.2rem;
}
.title {
  font-size: 0.36rem;
}
.stitle {
  margin: 0.2rem 0;
  font-size: 0.26rem;
  color: #999;
  span {
    color: $primary;
  }
}
img {
  max-width: 100%;
}
.content {
  font-size: 0.26rem;
  line-height: 2;
}
</style>
