<template>
  <main class="bg">
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="titre">Carte</h1>
      <br>
    </v-container>
    <InteractiveMap/>
  </main>
</template>

<script>
// import TitlePresentation from "@/components/homepage/TitlePresentation.vue";
import InteractiveMap from "@/components/InteractiveMap.vue";

export default {
  name: "PresentationLieu",
  components: {InteractiveMap},
}
</script>

<style scoped>
.bg {
  height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/LANDSCAPE-BG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.titre{
  color: white;
  font-family: 'Secular One', sans-serif;
  font-size: 5rem;
  text-align: center;
}
</style>