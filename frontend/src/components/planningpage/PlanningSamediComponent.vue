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
  props: {
    activite: Object
  },
  mounted() {
    const timetableSamedi = new Timetable();
    timetableSamedi.setScope(10, 20);
      this.activite.forEach((result) => {
      timetableSamedi.addLocations([result.stand]);
      timetableSamedi.addEvent(result.name, result.stand, new Date(result.heureDebut), new Date(result.heureFin));
    })
    const renderer = new Timetable.Renderer(timetableSamedi);
    renderer.draw('.timetableSamedi');
  }
}
</script>

<style scoped>

</style>