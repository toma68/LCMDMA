<template>
  <v-container>
    <h1 style="color: white;">Planning Dimanche</h1>
    <div class="timetable timetableDimanche"></div>
  </v-container>
</template>

<script>
import Timetable from 'timetable.js'
export default {
  name: "PlanningDimancheComponent",
  props: ["tab"],
  async mounted() {
    const timetableDimanche = new Timetable();
    timetableDimanche.setScope(10, 18);
    const location = [];
    await this.tab.forEach(element => {
      if (!location.includes(element['infoPrestataire'].description)) {
        location.push(element['infoPrestataire'].description);
      }
    });
    location.push("Scène 1");
    timetableDimanche.addLocations(location);
    await this.tab.forEach(element => {
      const dateDebut = new Date(element.heureDebut);
      dateDebut.setHours(dateDebut.getHours()-2);
      const dateFin = new Date(element.heureFin);
      dateFin.setHours(dateFin.getHours()-2);
      if (element.nom === "Concours de la plus belle armure") {
        timetableDimanche.addEvent(element.nom, "Scène 1", dateDebut, dateFin);
      } else {
        timetableDimanche.addEvent(element.nom, element['infoPrestataire'].description, dateDebut, dateFin);
      }
    });
    const renderer = new Timetable.Renderer(timetableDimanche);
    renderer.draw('.timetableDimanche');
  }
}
</script>

<style scoped>
</style>