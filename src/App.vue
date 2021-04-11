<template>
  <the-navbar></the-navbar>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="container">
<!--    <page-home/>-->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from '@/components/Home.vue'

import TheNavbar from "./components/TheNavbar";
export default {
  name: 'App',
  components: {TheNavbar},
  // components: {
  //   // HelloWorld,
  //   Home
  // }
}
</script>

<style>
@import "assets/style.css";
/*@import "~bootstrap/css/bootstrap.css";*/
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
