<template>
  <div class="nav">
    <ul
      class="clearfix"
      v-for="list in lists"
      :key="list.color"
    >
      <li
        v-for="item in list.data"
        :key="item.id"
        :style="{background: list.color}"
        :class="isIcon(item.icon)"
      >
        <p>{{item.text}}</p>
        <p class="nav-icon" v-if="item.icon">
          <span
            class="iconfont"
            :class="item.icon"
            >
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeNav',
  props: {
    lists: Array
  },
  methods: {
    isIcon (icon) {
      return icon ? 'left' : 'right border'
    }
  }
}
</script>

<style lang="sass" scoped>
  .nav
    padding: .08rem .08rem .04rem
    ul
      margin-bottom: .08rem
      .left
        width: 2.44rem
        float: left
        height: 1.92rem
        .nav-icon
          span
            font-size: .84rem
            color: #efe
      .right
        float: left
        p
          width: 2.44rem
          float: left
      p
        line-height: .96rem
        color: #fff
        font-size: .32rem
        font-weight: 300
        text-align: center
</style>
