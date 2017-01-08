<template lang="pug">
ul.collection
  a.collection-item(href="#") Sidebar Link.
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
