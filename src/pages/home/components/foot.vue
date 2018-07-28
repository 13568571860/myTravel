<template>
  <div class="foot clearfix">
    <p class="foot-records">Qunar 京ICP备05021087</p>
    <p class="opinion">意见反馈</p>
    <p class="about">关于我们</p>
  </div>
</template>

<script>
export default {
  name: 'homeFoot'
}
</script>

<style lang="stylus" scoped>
  .foot
    background: #eee
    .foot-records
      color: #8c8c8c
      padding: 0 .2rem
    .opinion,
    .about
      width: 25%
      text-align: center
    p
      line-height: 1.08rem
      float: left
</style>
