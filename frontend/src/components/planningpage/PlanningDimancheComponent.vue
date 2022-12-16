<template>
  <v-container>
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
    timetableDimanche.setScope(10, 18);
    timetableDimanche.addLocations(["Stand de tir", "Voyante", "Combat de joûtes", "Ecurie", "Menuisier Ebeniste", "Scène 2"]);
    timetableDimanche.addEvent('Concours de la plus belle armure', 'Scène 2', new Date(2023, 7, 9, 17), new Date(2023, 7, 9, 18));
    timetableDimanche.addEvent('Création d une statue en bois', 'Menuisier Ebeniste', new Date(2023, 7, 9, 13), new Date(2023, 7, 9, 15));
    timetableDimanche.addEvent('Tir à l arc', 'Stand de tir', new Date(2023, 7, 9, 14), new Date(2023, 7, 9, 14, 30));
    timetableDimanche.addEvent('Tir à l arc', 'Stand de tir', new Date(2023, 7, 9, 12), new Date(2023, 7, 9, 12, 30));
    timetableDimanche.addEvent('Voyance', 'Voyante', new Date(2023, 7, 9, 10), new Date(2023, 7, 9, 18));
    timetableDimanche.addEvent('Balade en Poney / Cheval', 'Ecurie', new Date(2023, 7, 9, 11), new Date(2023, 7, 9, 11, 30));
    timetableDimanche.addEvent('Balade en Poney / Cheval', 'Ecurie', new Date(2023, 7, 9, 16), new Date(2023, 7, 9, 16, 30));
    timetableDimanche.addEvent('Combat de joûtes', 'Combat de joûtes', new Date(2023, 7, 9, 15), new Date(2023, 7, 9, 16));
    const renderer = new Timetable.Renderer(timetableDimanche);
    renderer.draw('.timetableDimanche'); // any css selector
  }
}
</script>

<style scoped>
</style>