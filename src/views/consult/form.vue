<template>
  <div class="page">
    <van-form @submit="onSubmit">
      <van-field
        v-model="message"
        rows="7"
        autosize
        type="textarea"
        placeholder="请描述您遇到的问题"
        maxlength="200"
        show-word-limit
        :rules="[{ required:true, message: '请输入问题' }]"
      />
      <van-field v-model="message" label="联系方式" placeholder="请输入您的手机号码方便您接收信息" :rules="[{ validator:phoneValidator, message: '请输入正确手机号' }]"></van-field>
      <div class="btns">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import validateMixin from '@/mixin/validate'
export default {
  data() {
    return {
      message: '',
      pattern: /\d{6}/
    }
  },
  mixins: [validateMixin],
  methods: {
    onSubmit() {
      console.log(222)
    }
  }
}
</script>
<style lang="scss" scoped>
.btns {
  padding: 0.2rem;
}
</style>