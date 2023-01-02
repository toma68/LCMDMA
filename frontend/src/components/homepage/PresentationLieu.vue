<template>
  <main class="degrade-bg">
    <TitlePresentation title="Carte"/>
    <br><br>
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

.degrade-bg {
  background: linear-gradient(#293457, #000000);
}
</style>