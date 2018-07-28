<template>
  <div class="banner">
    <swiper :options="swiperOptions" v-if="lists.length">
      <swiper-slide v-for="item in lists" :key="item.id">
        <img :src="item.bannerItem" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      }
    }
  },
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
  .banner >>> .swiper-pagination-bullet-active
    background: #fff
  .banner
    position: relative
    height: 0
    width: 100%
    overflow: hidden
    padding-bottom: 24.5%
    img
      width: 100%
</style>
