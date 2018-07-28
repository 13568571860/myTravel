<template>
  <div>
    <home-banner :lists="banner"></home-banner>
    <home-nav :lists="nav"></home-nav>
    <home-hot-nav :lists="lists"></home-hot-nav>
    <home-links :lists="links"></home-links>
    <home-foot></home-foot>
  </div>
</template>

<script>
import HomeBanner from './components/banner'
import HomeNav from './components/nav'
import HomeHotNav from './components/hotNav'
import HomeLinks from './components/links'
import HomeFoot from './components/foot'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      nav: [],
      lists: [],
      links: []
    }
  },
  components: {
    HomeBanner,
    HomeNav,
    HomeHotNav,
    HomeLinks,
    HomeFoot
  },
  methods: {
    homeApi () {
      axios.get('/v1/home.json').then(this.handleHomeApi)
    },
    handleHomeApi (xhr) {
      this.banner = xhr.data.banner
      this.nav = xhr.data.nav
      this.lists = xhr.data.list
      this.links = xhr.data.links
    }
  },
  created () {
    this.homeApi()
  }
}
</script>

<style lang="sass" scoped>

</style>
