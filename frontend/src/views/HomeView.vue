<template>
  <main>
    <HomePoint style="overflow: hidden" @click-suivant="clicksuivant()"/>
    <PresentationConvention/>
    <PresentationLieu style="z-index: 100"/>
  </main>
</template>

<script>
import HomePoint from "@/components/homepage/HomePoint";
import PresentationConvention from "@/components/homepage/PresentationConvention.vue";
import PresentationLieu from "@/components/homepage/PresentationLieu.vue";
  export default {
    name: 'HomeView',
    components: {
      PresentationLieu,
      PresentationConvention,
      HomePoint
    },
    methods: {
      clicksuivant() {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }

  }
</script>

