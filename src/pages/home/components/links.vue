<template>
  <div class="links">
    <ul class="clearfix">
      <li v-for="item in lists" :key="item.id">
        <p class="home-links-icon">
          <span class="iconfont" :class="item.icon"></span>
        </p>
        <p class="home-links-text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeLinks',
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
  .links
    padding-top: .2rem
    background: #eee
    ul
      padding: 0 .4rem
      background: #fff
      li
        padding: .2rem .4rem .4rem
        float: left
        width: 33.33%
        box-sizing: border-box
        p.home-links-icon
          text-align: center
          span.iconfont
            font-size: .56rem
            line-height: .8rem
            border-radius: 50%
            display: inline-block
            width: .8rem
            height: .8rem
            border: 1px solid #ccc
        p.home-links-text
          text-align: center
          padding-top: .1rem

</style>
