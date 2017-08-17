<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}{{activeIndex}}</div>
    </v-ons-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import homePage from '../components/tabs/home'
import newsPage from '../components/tabs/news'
import settingsPage from '../components/tabs/settings'

export default {
  name: 'HomeTab',
  data () {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: this.md() ? null : 'ion-home',
            label: 'Home',
            page: homePage,
            props: {
              myProp: 'This is a page prop!'
            }
          },
          {
            icon: this.md() ? null : 'ion-ios-bell',
            label: 'News',
            page: newsPage,
            badge: 7
          },
          {
            icon: this.md() ? null : 'ion-ios-settings',
            label: 'Settings',
            page: settingsPage
          }
        ]
      }
    },
    methods: {
      md () {
        return this.$ons.platform.isAndroid()
      }
    },
    computed: {
      title () {
        return this.tabs[this.activeIndex].label
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB
}
</style>