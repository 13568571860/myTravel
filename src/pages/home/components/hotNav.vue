<template>
  <div class="hot">
    <ul class="clearfix">
      <li v-for="item in lists" :key="item.id">
        <p class="hot-icon-box">
          <span class="iconfont" :class="item.icon"></span>
        </p>
        <p class="hot-text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hotNav',
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
  .hot
    padding-top: .2rem
    background: #eee
    ul
      padding: 0 .4rem .2rem
      background: #fff
      li
        width: 25%
        height: 1.4rem
        padding-top: .2rem
        float: left
        box-sizing: border-box
        p.hot-icon-box
          text-align: center
          span.iconfont
            font-size: .66rem
            color: #17a4bd
        p.hot-text
          text-align: center
          padding-top: .2rem
</style>
