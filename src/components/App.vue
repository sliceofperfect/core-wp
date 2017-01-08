<template lang="pug">
#app
  wp-header
  .container
    .row
      .col.hide-on-small-only.m4.l3
        wp-sidebar
      .col.s12.m8.l9
        template(v-if="$route.matched.length")
          router-view
        template(v-else="")
          h1 404 Page Not Found.
  wp-footer
</template>
<style lang="stylus">
</style>
<script>
import wpHeader from './wp-header.vue'
import wpSidebar from './wp-sidebar.vue'
import wpFooter from './wp-footer.vue'
export default {
  computed: {
  },
  components: {
    'wp-header': wpHeader,
    'wp-sidebar': wpSidebar,
    'wp-footer': wpFooter
  },
  mounted: function () {
    this.$nextTick(this.registerBackButton)
  },
  methods: {
    registerBackButton () {
      document.addEventListener("backbutton", this.backButton )
    },
    backButton (evt) {
      // console.log('backButton pressed.')
      if (this.$route.path == '/home'){
        evt.preventDefault()
        // use Cordova to exit the app.
        navigator.app.exitApp()
      } else {
        navigator.app.backHistory()
      }
    }
  }
}
</script>
