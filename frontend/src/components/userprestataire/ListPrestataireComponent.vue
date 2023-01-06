<template>
  <v-container>
    <br>
    <br>
    <br>
    <br>
    <v-row>
      <v-col v-for="prestataires in prestataires" :key="prestataires.numeroSiret" cols="12" md="6" lg="4">
        <v-card>
          <!--<v-img
              height="200px"
              src="/frontend/src/assets/carte/" {{prestataires.image}}
          ></v-img>-->
          <v-card-title class="headline">{{prestataires.nomEntreprise}}</v-card-title>
          <v-card-text>
            {{prestataires.description}}
          </v-card-text>
          <button @click="showPrestatairesDetails(prestataires.numeroSiret)">Plus de détails</button>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "ListPrestataireComponent",
  data() {
    return {
      prestataires: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/infoPrestataires")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.prestataires = data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    showPrestatairesDetails(id) {
      this.$router.push({ name: "userPrestatairePage", params: { id: id } });
    },
    showComponent() {
      return false;
    }
  }
}
</script>

<style scoped>

</style>