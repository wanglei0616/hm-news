<template>
  <div class="input_box">
    <input :type="type" class="hm-input" :placeholder="placeholder" :value="value" @input="handleInput" :class="[status]">
    <span class="tips" v-show="showTips">{{errMsg}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  computed: {
    showTips () {
      return this.status === 'error' && this.errMsg
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: RegExp
    },
    errMsg: {
      type: String
    }

  },
  methods: {
    handleInput (e) {
      const { value } = e.target
      this.$emit('input', value)
      if (!this.rules) return
      if (this.rules.test(value)) {
        this.status = 'success'
      } else {
        this.status = 'error'
      }
      // console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
// 当组件中的标签有scoped属性时，他的css只作用于当前组件中的元素
.input_box{
  padding-bottom: 15px;
  position: relative;
  span{
    position: absolute;
    bottom: 0px;
    left: 0px
  }
  .hm-input{
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #666;
    // transparent设置透明
    background-color: transparent;
    font-size: 18px;
  }
  &.error{
    color: red;
  }
  &.success{
    color: green
  }
  .tips{
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
