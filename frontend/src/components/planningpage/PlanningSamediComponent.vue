<template>
  <v-container>
    <h1>Planning Samedi</h1>
    <div class="timetable timetableSamedi"></div>
  </v-container>
</template>

<script>

import Timetable from 'timetable.js'
export default {
  name: "PlanningSamediComponent",
  mounted() {
    const timetableSamedi = new Timetable();
    timetableSamedi.setScope(10, 20);
    timetableSamedi.addLocations(['Armes de sieges', "Stand de tir", "Forgeron", "Voyante", "Stand de torture", "Combat de joûtes", "Scène 1"]);
    timetableSamedi.addEvent('Lancer de nain', 'Armes de sieges', new Date(2023, 7, 8, 13), new Date(2023, 7, 8, 13, 30));
    timetableSamedi.addEvent('Tir à l arc', 'Stand de tir', new Date(2023, 7, 8, 15), new Date(2023, 7, 8, 15, 30));
    timetableSamedi.addEvent('Tir à l arc', 'Stand de tir', new Date(2023, 7, 8, 12), new Date(2023, 7, 8, 12, 30));
    timetableSamedi.addEvent('Création d une épée', 'Forgeron', new Date(2023, 7, 8, 14), new Date(2023, 7, 8, 16));
    timetableSamedi.addEvent('Voyance', 'Voyante', new Date(2023, 7, 8, 10), new Date(2023, 7, 8, 18));
    timetableSamedi.addEvent('Animation de torture', 'Stand de torture', new Date(2023, 7, 8, 11), new Date(2023, 7, 8, 11, 30));
    timetableSamedi.addEvent('Combat de joûtes', 'Combat de joûtes', new Date(2023, 7, 8, 16), new Date(2023, 7, 8, 17));
    timetableSamedi.addEvent('Spectacle de cracheurs de feu', 'Scène 1', new Date(2023, 7, 8, 19), new Date(2023, 7, 8, 20));
    const renderer = new Timetable.Renderer(timetableSamedi);
    renderer.draw('.timetableSamedi'); // any css selector
  }
}
</script>

<style scoped>

</style>