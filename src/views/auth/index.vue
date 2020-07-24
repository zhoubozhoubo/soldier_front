<template>
  <div class="page">
    <div v-if="showTip" class="tips">
      <van-icon name="warning" />
      <p>根据相关部门要求，使用本公众号功能需要实名认证请如实填写以下身份信息，一经填写不可更改。我们郑重承诺不将个人信息以任何形式泄露出去。</p>
      <van-icon name="cross" @click="showTip=false" />
    </div>
    <van-form @submit="onSubmit">
      <van-field v-model="message" label="姓名" placeholder="请输入姓名" :rules="[{ required:true, message: '姓名不能为空' }]"></van-field>
      <van-field v-model="message" label="联系方式" placeholder="请输入联系电话" :rules="[{ validator:phoneValidator, message: '请输入正确手机号' }]"></van-field>
      <van-field v-model="message" label="身份证号" placeholder="请输入身份证号码" :rules="[{ validator:idValidator, message: '请输入正确身份证号码' }]"></van-field>
      <div class="btns">
        <van-button block type="info">提交认证</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import validateMixin from '@/mixin/validate'

export default {
  data() {
    return {
      showTip: true,
      message: ''
    }
  },
  mixins: [validateMixin],
  methods: {
    onSubmit() {
      console.log(111)
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  background-color: #eff3f4;
  min-height: 100vh;
}
.tips {
  display: flex;
  padding: 0.2rem 0.24rem;
  background-color: #f6f7ff;
  margin-bottom: 0.24rem;
  .van-icon-warning {
    font-size: 0.32rem;
    color: $info;
  }
  p {
    font-size: 0.26rem;
    flex: 1;
    margin: 0 0.05rem;
  }
  .van-icon-cross {
    font-size: 0.2rem;
  }
}
.btns {
  padding: 0.24rem;
}
</style> 