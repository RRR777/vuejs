<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfiledCard :user="user"/>
        <UserProfileCardEditor :user="user"/>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ user.username }} recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList :posts="user.posts" />
      </div>
    </div>
  </div>
</template>
<script>
import PostList from '@/components/PostList'
import { mapGetters } from 'vuex'
import UserProfiledCard from "../components/UserProfiledCard";
import UserProfileCardEditor from "../components/UserProfileCardEditor";

export default {
  name: "Profile",
  components: {UserProfileCardEditor, UserProfiledCard, PostList },
  props: {
    edit: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
  //   userPostsCount () {
  //     return this.userPosts.length
  //   },
  //   userPosts () {
  //     return Object.values(this.$store.state.posts).filter(
  //         post => post.userId === this.user.id
  //     )
  //   },
  //   userThreadsCount () {
  //     return this.userThreads.length
  //   },
  //   userThreads () {
  //     return Object.values(this.$store.state.threads).filter(
  //         post => post.userId === this.user.id
  //     )
  //   }
  }
}
</script>