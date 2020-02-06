<template>
  <div class="auth-button" @click="handleClick"><slot></slot></div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth-button{
    background-color: #d81e06;
    text-align: center;
    font-size: 18px;
    height: 48px;
    line-height: 48px;
    color: #ffffff;
    border-radius: 24px;
  }
</style>
