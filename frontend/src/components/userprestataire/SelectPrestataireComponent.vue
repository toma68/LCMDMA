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
              :src="prestataire.image" alt=""></v-img>
          <v-card-title class="headline"> {{prestataire.nomEntreprise}} </v-card-title>
          <v-card-text>
            <v-card-text>
              {{prestataire.description}}
            </v-card-text>
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
      prestataire: []
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    async fetchData() {
      await fetch(`http://localhost:3000/api/infoPrestataires/${this.id}`)
          .then(response => response.json())
          .then(data => {
            this.prestataire = data;
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