<template>
  <v-container>
    <br>
    <br>
    <br>
    <br>
    <v-row>
      <v-col>
        <v-card>
          <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-title class="headline">TITRE</v-card-title>
          <v-card-text>
            DESCRIPTION
          </v-card-text>
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
      console.log(this.$route.params.id);
      fetch("http://localhost:3000/api/infoPrestataires/" + this.$route.params.id)
          .then(response => {
            response = response.json();
            console.log(response);
          })
          .then(data => {
            console.log(data);
            this.prestataires = data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

</style>