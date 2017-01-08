<template lang="pug">
nav.pink.darken-2(role="navigation")
  .container
    .nav-wrapper
      a(id="logo-container",href="#") Site Logo 
      ul.right
        li
          a(href="#") Link One
        li
          a(href="#") Link Three 
      ul.side-nav(id="nav-mobile",style="transform: translateX(-100%);")
        li.pink.darken-2
        li
          a(href="#") Link One 
      a.button-collapse.top-nav.full.hide-on-med-and-up(href="#",data-activates="nav-mobile")
        i.fa.fa-bars
</template>
<style lang="stylus">
</style>
<script>
export default  {
  data : function () {
    return {
    }
  },
  computed: {
  },
  mounted: function () {
    this.$nextTick(function () {
      // Attach Auth0 Custom Login and Callback Handler.
    })
  },
  methods: {
  }
}
</script>
