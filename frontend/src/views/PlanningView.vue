<template>
  <main>
    <v-container>
      <br>
      <br>
      <br>
      <br>
      <div class="text-center">
        <button v-on:click="showComponent = !showComponent" class="button">Changer de jour</button>
      </div>
      <PlanningSamediComponent v-if="showComponent"></PlanningSamediComponent>
      <PlanningDimancheComponent v-else></PlanningDimancheComponent>
    </v-container>
  </main>
</template>

<script>
import PlanningSamediComponent from "@/components/planningpage/PlanningSamediComponent";
import PlanningDimancheComponent from "@/components/planningpage/PlanningDimancheComponent";
export default {
  name: 'PlanningView',
  components: { PlanningSamediComponent, PlanningDimancheComponent },
  data() {
    return {
      showComponent: true
    }
  }
}
</script>

<style scoped>
.button{
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  font-size: .875rem;
  border: thin solid;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: .0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: .28s;
  transition-property: box-shadow,transform,opacity;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

</style>
