<template>
  <v-container>
    <h1 style="color: white;">Planning Samedi</h1>
    <div class="timetable timetableSamedi"></div>
  </v-container>
</template>

<script>
import Timetable from 'timetable.js'
export default {
  name: "PlanningSamediComponent",
  props: ["tab"],
  data() {
    return {
      syncscroll: false,
    };
  },
  async mounted() {
    const timetableSamedi = new Timetable();
    timetableSamedi.setScope(10, 18);
    const location = [];
    await this.tab.forEach(element => {
      if (!location.includes(element['infoPrestataire'].description)) {
        location.push(element['infoPrestataire'].description);
      }
    });
    timetableSamedi.addLocations(location);
    await this.tab.forEach(element => {
      const dateDebut = new Date(element.heureDebut);
      dateDebut.setHours(dateDebut.getHours()-2);
      const dateFin = new Date(element.heureFin);
      dateFin.setHours(dateFin.getHours()-2);
      timetableSamedi.addEvent(element.nom, element['infoPrestataire'].description, dateDebut, dateFin);
    });
    const renderer = new Timetable.Renderer(timetableSamedi);
    renderer.draw('.timetableSamedi');
  }
}
</script>

<style scoped>

</style>