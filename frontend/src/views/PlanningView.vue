<template>
  <main>
    <v-container>
      <br>
      <br>
      <br>
      <br>
      <div class="text-center">
        <v-btn replace outlined class="mx-6">Samedi</v-btn>
        <v-btn replace outlined class="mx-6">Dimanche</v-btn>
      </div>
      <h1>Planning</h1>
      <div class="timetable timetablePlanning"></div>
    </v-container>
  </main>
</template>

<script>
import PlanningSamediComponent from "@/components/planningpage/PlanningSamediComponent";
import PlanningDimancheComponent from "@/components/planningpage/PlanningDimancheComponent";
export default {
  name: 'PlanningView',
  components: { PlanningSamediComponent, PlanningDimancheComponent },
}
</script>

