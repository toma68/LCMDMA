<template>
  <v-container>
    <br>
    <br>
    <br>
    <h1>Planning</h1>
    <div class="timetable"></div>
  </v-container>
</template>
<script>
import Timetable from 'timetable.js'
export default {
  name: "PlanningComponent",
  mounted() {
    const timetable = new Timetable();
    timetable.setScope(10, 20);
    timetable.addLocations(['Armes de sieges', "Stand de tir", "Forgeron", "Voyante", "Stand de torture", "Combat de joûtes", "Scène 2"]);
    timetable.addEvent('Lancer de nain', 'Armes de sieges', new Date(2023, 7, 8, 14), new Date(2023, 7, 8, 14, 30));
    timetable.addEvent('Tir à l arc', 'Stand de tir', new Date(2023, 7, 8, 15), new Date(2023, 7, 8, 15, 30));
    const renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable'); // any css selector
  }
}
</script>

<style scoped>

</style>