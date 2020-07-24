<template>
  <div class="page">
    <div class="top">
      历史咨询(6)
      <div class="btn" @click="$router.push('/consult/form')">我要咨询</div>
    </div>
    <p class="nodata">暂无数据</p>
    <div v-for="(v, i) in list" :key="i" class="item">
      <div class="stitle">军人提问 | 08/24</div>
      <h2 class="title">退役军人有哪些福利政策？生活补贴和养老补贴的要求是什么？需要服役几年才可以拿到？</h2>
      <p>
        回答：国家对于农村退伍军人也是有补贴的，他们除了可以和其他的农村老人一样能够拿到基础养老金外，他们在交纳养老保险方面也能享受到特殊的待遇。我们知道，养老保险是需要交纳15年的，而退伍军人交纳养老保险和他们的服役年限之间有很大的关系，可以用服役的年限来抵扣交纳养老保险的年限，比如说服役了5年，那么只需要交纳10年的养老保险即可。
      </p>
    </div>
  </div>
</template>
<script>
import { getConsult } from '@/api'
export default {
  data() {
    return {
      count: 0,
      query: {
        page: 1,
        size: 10
      },
      list: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      getConsult(this.query).then(res => {
        this.count = res.data.count
        this.list = res.data.list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background-color: #f6f6f6;
  padding: 0 0.24rem 0.24rem;
}
.top {
  padding: 0.24rem 0;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  .btn {
    margin-left: auto;
    background-color: #187aff;
    color: #fff;
    font-size: 0.24rem;
    display: inline-block;
    padding: 0.1rem 0.2rem;
    border-radius: 999px;
    font-weight: normal;
  }
}
.item {
  background-color: #fff;
  padding: 0.2rem;
  border-radius: 1px;
  margin-bottom: 0.24rem;
  .stitle {
    font-size: 0.26rem;
    color: #999;
  }
  .title {
    font-size: 0.3rem;
    color: #333333;
    margin: 0.16rem 0 0.08rem;
  }
  p {
    padding: 0.2rem;
    font-size: 0.26rem;
    background-color: #f7f5f6;
    color: #999999;
  }
}
</style>
