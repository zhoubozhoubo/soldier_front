<template>
  <div class="page">
    <h1 class="title">{{info.title}}</h1>
    <div class="stitle">
      <span>{{info.tag}}</span>
      {{info.time}}
    </div>
    <p class="content">{{info.content}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        title: '退役军人事务部解读：新冠肺炎疫情防控牺牲人员烈士褒扬工作',
        tag: '军人e家',
        time: '2020-07-07',
        content:
          '近日，退役军人事务部、中央军委政治工作部联合印发《关于妥善做好新冠肺炎疫情防控牺牲人员烈士褒扬工作的通知》，要求各地各部门妥善做好因疫情防控牺牲人员烈士褒扬工作，符合烈士评定（批准）条件的人员，应评定（批准）为烈士。那么，此次印发的《通知》考量因素有哪些？烈士评定有何标准及执行方案？退役军人事务部相关负责人20日接受人民网专访，围绕这些问题进行了解读。明确烈士评定范围有针对性部署工作程序　　问：退役军人事务部、中央军委政治工作部联合印发《关于妥善做好新冠肺炎疫情防控牺牲人员烈士褒扬工作的通知》，请介绍一下出台这个通知的背景？目前是否有新冠肺炎疫情防控牺牲人员评定为烈士的具体标准和执行方案？　　答：在坚决打赢新冠肺炎疫情阻击战中，军民合力，上下同心，众志成城，同舟共济，广大干部群众尤其是医务人员和防疫工作者舍弃个人安危，敢于担当，勇于作为，英勇奋战在防控工作第一线，有的同志不幸牺牲。他们这种不顾个人安危、舍己救人的精神应予大力褒扬，符合烈士评定（批准）条件的人员，应评定（批准）为烈士。'
      }
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
.content {
  font-size: 0.26rem;
  line-height: 2;
}
</style>