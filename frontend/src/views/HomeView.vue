<template>
  <main>
    <HomePoint style="overflow: hidden"/>
    <PresentationConvention/>
  </main>
</template>

<script>
import HomePoint from "@/components/homepage/HomePoint";
import PresentationConvention from "@/components/homepage/PresentationConvention.vue";
  export default {
    name: 'HomeView',
    components: {
      PresentationConvention,
      HomePoint
    },

  }
</script>

