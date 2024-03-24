<template>
  <main class="bg">
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="titre">Programme</h1>
      <br>
      <div class="text-center">
        <v-btn color="primary" class="mx-2" v-on:click="showComponent = !showComponent">Changer de jour</v-btn>
      </div>
      <PlanningSamediComponent v-if="showComponent" v-bind:tab="samedi"></PlanningSamediComponent>
      <PlanningDimancheComponent v-else v-bind:tab="dimanche"></PlanningDimancheComponent>
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
      showComponent: true,
      data: [],
      samedi: [],
      dimanche: [],
      syncscroll: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/api/activites/stand')
          .then(response => response.json())
          .then(data => {
            this.data = data;
            this.data.forEach(element => {
              const filterDate = element.heureDebut.split('T')[0];
              if (filterDate === '2023-07-08') {
                this.samedi.push(element);
              }
              else {
                this.dimanche.push(element);
              }
            });
          })
          .catch(error => {
            console.log(error);
          });
    },
  }
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../assets/LANDSCAPE-BG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.titre{
  color: white;
  font-family: 'Secular One', sans-serif;
  font-size: 5rem;
  text-align: center;
}
</style>