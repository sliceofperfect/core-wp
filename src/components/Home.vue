<template lang="pug">
.container
  h1.title Welcome to VUEJS with Wordpress Backend.
  .row
    .col.s12.m12(v-for="post in allPosts")
      .card
        .card-content
          span.card-title.pink-text.darken-1-txt {{ post.title.rendered }}
          .wp-post(v-html="post.content.rendered")
</template>
<style lang="stylus">
.wp-post img
  max-width 100%
.wp-post a img
  max-width 100%
</style>
<script>
module.exports = {
  data () {
    return {
      allPosts: [],
    }
  },
  computed: {
  },
  mounted: function () {
    this.$nextTick(this.handleMount)
  },
  methods: {
    handleMount () {
      // Get all the recent posts.
      this.getRecentPosts()
    },
    getRecentPosts () {
      this.$http.get('/?rest_route=/wp/v2/posts')
        .then((response) => {
          if(response.data) {
            console.log(response.data)
            this.allPosts = response.data
          }  
        }).catch(function(error) {
          if(error) {
            console.warn(error)
          }
        })
    }
  }
}
</script>
