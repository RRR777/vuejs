<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <post-list :posts="threadPosts"/>

    <post-editor @save="addPost"/>

  </div>
</template>

<script>

import PostList from "../components/PostList";
import PostEditor from "../components/PostEditor";

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id) // also available by this.$route.params.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    },
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped>
</style>