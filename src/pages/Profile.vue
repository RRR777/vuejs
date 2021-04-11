<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfiledCard :user="user"/>
        <UserProfileCardEditor :user="user"/>

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
          >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
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