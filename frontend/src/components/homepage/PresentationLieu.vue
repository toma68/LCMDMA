<template>
  <main>
    <TitlePresentation title="Carte"/>
    <InteractiveMap style="z-index: 100"/>
  </main>
</template>

<script>
import TitlePresentation from "@/components/homepage/TitlePresentation.vue";
import InteractiveMap from "@/components/InteractiveMap.vue";

export default {
  name: "PresentationLieu",
  components: {TitlePresentation, InteractiveMap},
}
</script>

<style scoped>
main {
  height: 100vh;
  padding: 100px 50px 50px 50px;
}
</style>