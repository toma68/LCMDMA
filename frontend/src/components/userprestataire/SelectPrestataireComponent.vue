<template>
  <main class="bg">
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="titre">Prestataire sélectionné</h1>
      <h1 class="text-center" style="color: white;">{{ prestataire.nomEntreprise }}</h1>
      <br>
      <v-row>
        <v-col class="col-lg-6 col-12 mx-auto">
          <v-card>
            <br>
            <PrestataireComponent :prestataire="prestataire"/>
            <br>
            <h3 class="mx-3">Mes activités : </h3>
            <div v-for="activite in activites" :key="activite.id">
              <v-card-title v-if="showInfos">{{ activite.nom }}</v-card-title>
              <v-card-subtitle>{{ activite.description }}</v-card-subtitle>
              <v-card-text v-if="showInfos">
                <p>L'activité commence à {{ activite.heureDebut }} et se termine à {{ activite.heureFin }}</p>
              </v-card-text>
            </div>
            <hr>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PrestataireComponent from "@/components/prestataire/PagePersonnalisee/PrestataireComponent.vue";

export default {
  name: "SelectPrestataireComponent",
  components: {PrestataireComponent},
  data() {
    return {
      showInfos: true
    }
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getInfoPrestataireById", this.$route.params.id)
    this.$store.dispatch("getActivitesByPrestataire", this.$route.params.id)
  },
  computed: {
    prestataire() {
      return this.$store.getters.prestataire;
    },
    activites() {
      return this.$store.getters.activites;
    }
  }
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/LANDSCAPE-BG.png");
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