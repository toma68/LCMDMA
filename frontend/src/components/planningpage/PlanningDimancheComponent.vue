<template>
  <v-container>
    <br>
    <br>
    <br>
    <br>
    <div class="text-center">
      <v-btn to="/planning/samedi" replace outlined class="mx-6">Samedi</v-btn>
      <v-btn to="/planning/dimanche" replace outlined disabled class="mx-6">Dimanche</v-btn>
    </div>
    <h1>Planning Dimanche</h1>
    <div class="timetable timetableDimanche"></div>
  </v-container>
</template>

<script>
import Timetable from 'timetable.js'
export default {
  name: "PlanningDimancheComponent",
  mounted() {
    const timetableDimanche = new Timetable();
    timetableDimanche.setScope(10, 20);
    timetableDimanche.addLocations(["Scène 2"]);
    timetableDimanche.addEvent('Concours de la plus belle armure', 'Scène 2', new Date(2023, 7, 9, 17), new Date(2023, 7, 9, 18));
    const renderer = new Timetable.Renderer(timetableDimanche);
    renderer.draw('.timetableDimanche'); // any css selector
  }
}
</script>

<style scoped>
</style>