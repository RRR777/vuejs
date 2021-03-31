<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
// import sourceData from '@/data.json'

export default {
  name: 'PostEditor',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'qqqq' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        createdAt: Math.floor(Date.now() / 1000),
        userId: "NnooaWj4KHVxbhKwO1pEdfaQDsD2"
      }
      this.$emit('save', { post }) // access under eventData.post
      // this.posts.push(post)
      // this.thread.posts.push(postId)

      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>