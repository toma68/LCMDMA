<template>
  <main>
    <v-container>
      <br>
      <br>
      <br>
      <br>
      <PlanningSamediComponent></PlanningSamediComponent>
      <PlanningDimancheComponent></PlanningDimancheComponent>
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
