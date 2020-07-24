<template>
  <div class="page">
    <div class="top">
      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="v in 4" :key="v">
          <img :src="info.image" />
        </van-swipe-item>
      </van-swipe>
      <h2 class="title">{{ info.title }}</h2>
      <p class="stitle">上传于{{ info.update_at }}丨活动时间{{ info.activity_time }}</p>
      <div class="tabs">
        <div v-for="(v, i) in tabList" :key="i" class="li" :class="{ active: index == i }" @click="tabChange(i)">{{ v }}</div>
      </div>
    </div>
    <div class="bottom">
      <div v-if="index == 0" class="introduction">
        <h2>活动简介</h2>
        <div class="line"></div>
        <p>{{ info.comment }}</p>
      </div>
      <div v-if="index == 1" class="videos">
        <p v-if="!videoList.length" class="nodata">暂无数据</p>
        <div v-for="(v, i) in videoList" :key="i" class="item">
          <video :src="v.content" controls></video>
          <h2>{{ v.author }}</h2>
        </div>
      </div>
      <template v-if="index == 2">
        <p v-if="!picList.length" class="nodata">暂无数据</p>
        <div class="pics">
          <img v-for="(v, i) in picList" :key="i" :src="v.content" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { getActivityDetail, getResource } from '@/api'
import LoadMore from '@/mixin/loadMore'
export default {
  data() {
    return {
      tabList: ['详情', '视频', '图片'],
      index: 0,
      info: {},
      id: null,
      videoQuery: {
        activity_type_id: this.id,
        resource_type: 1,
        page: 1,
        size: 10
      },
      videoList: [],
      videoLoadMore: true,
      picQuery: {
        activity_type_id: this.id,
        resource_type: 2,
        page: 1,
        size: 10
      },
      picList: [],
      picLoadMore: true
    }
  },
  mixins: [LoadMore],
  mounted() {
    let id = this.$route.query.id
    if (!id) {
      this.$dialog.alert({ message: '缺少参数id!' }).then(res => {
        this.$router.go(-1)
      })
      return
    }
    this.id = id
    this.videoQuery.activity_type_id = this.id
    this.picQuery.activity_type_id = this.id
    this.init()
  },
  methods: {
    init() {
      getActivityDetail({ id: this.id }).then(res => {
        this.info = res.data
      })
      this.getVideoInfo()
      this.getPicInfo()
    },
    tabChange(i) {
      this.index = i
      if (i == 1) {
        this.allowLoad = this.videoLoadMore
      } else if (i == 2) {
        this.allowLoad = this.picLoadMore
      }
    },
    getVideoInfo(load) {
      if (!load) {
        this.videoList = []
        this.videoQuery.page = 1
      } else {
        this.videoQuery.page++
      }
      getResource(this.videoQuery).then(res => {
        let list = res.data.list
        if (list.length < this.videoQuery.size) {
          this.videoLoadMore = false
        }
        this.videoList.push(...list)
      })
    },
    getPicInfo(load) {
      if (!load) {
        this.picList = []
        this.picQuery.page = 1
      } else {
        this.picQuery.page++
      }
      getResource(this.picQuery).then(res => {
        let list = res.data.list
        if (list.length < this.picQuery.size) {
          this.picLoadMore = false
        }
        this.picList.push(...list)
      })
    },
    addList() {
      if (this.index == 1) {
        this.getVideoInfo(true)
      } else if (this.index == 2) {
        this.getPicInfo(true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  padding: 0.24rem 0.24rem 0;
  font-size: 0;
  .my-swipe {
    width: 100%;
    height: 2.8rem;
    border-radius: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 0.3rem;
    margin: 0.24rem 0 0.16rem;
  }
  .stitle {
    font-size: 0.26rem;
    color: #999;
  }
  .tabs {
    text-align: center;
    margin-top: 0.32rem;
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
}
.bottom {
  background-color: #f7f5f6;
  padding: 0.24rem;
  min-height: calc(100vh - 5.86rem);
  .introduction {
    background-color: #fff;
    padding: 0.24rem;
    border-radius: 0.1rem;
    h2 {
      font-size: 0.3rem;
    }
    .line {
      height: 1px;
      background-color: #eeeeee;
      margin: 0.24rem 0;
    }
    p {
      font-size: 0.26rem;
    }
  }
  .videos {
    .item {
      background-color: #fff;
      padding: 0.24rem;
      border-radius: 0.1rem;
      video {
        width: 100%;
        height: 2.8rem;
        background-color: #000;
      }
      h2 {
        font-size: 0.3rem;
      }
      & + .item {
        margin-top: 0.16rem;
      }
    }
  }
  .pics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.2rem;
    grid-column-gap: 0.16rem;
    img {
      width: 100%;
      height: 1.9rem;
    }
  }
}
</style>
