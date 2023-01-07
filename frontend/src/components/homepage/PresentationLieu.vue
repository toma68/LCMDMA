<template>
  <main>
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
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/LANDSCAPE-BG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>