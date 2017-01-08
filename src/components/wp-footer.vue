<template lang="pug">
footer.page-footer
  .container
    .row
      .col.l6.s12
        h5.white-text Footer Content
      .col.l4.offset-l2.s12
        h5.white-text Links
        ul
          li 
            a(href='#') Link to somewhere.
  .footer-copyright
    .container
       p @ 2017 Copyright

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
