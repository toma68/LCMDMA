<template>
  <v-app>
    <NavBar style="z-index: 100"/>
    <router-view/>
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},

  data: () => ({
    //
  }),
};
</script>

<style>
@import './assets/timetablejs.css';
@import './assets/demo.css';
</style>
