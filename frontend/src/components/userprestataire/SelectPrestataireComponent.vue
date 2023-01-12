<template>
  <v-container>
    <br>
    <br>
    <br>
    <h1 class="text-center">{{prestataire.nomEntreprise}}</h1>
    <br>
    <v-row>
      <v-col class="col-6">
        <v-img
            width="auto"
            :src="`${prestataire.image}`" alt="" class="rounded"></v-img>
        <br>
      </v-col>
      <v-col class="col-6">
         <v-card>
           <v-card-title> {{prestataire.description}} </v-card-title>
           <br>
           <h3 class="mx-3">Le mot du prestataire : </h3>
           <PrestataireComponent :prestataire="prestataire"/>
           <br>
           <h3 class="mx-3">Mes activités : </h3>
           <div v-for="activites in prestataire.activites" :key="activites.id">
           <v-card-title v-if="showInfos">{{ activites.nom }}</v-card-title>
           <v-card-subtitle>{{ activites.description }}</v-card-subtitle>
           <v-card-text v-if="showInfos">
             <p>L'activité commence à {{ activites.heureDebut }} et se termine à {{ activites.heureFin }}</p>
           </v-card-text>
           </div>
         </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PrestataireComponent from "@/components/prestataire/PagePersonnalisee/PrestataireComponent.vue";
export default {
  name: "SelectPrestataireComponent",
  components: {PrestataireComponent},
  data() {
    return {
      showInfos: false
    }
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getInfoPrestataireById", this.$route.params.id);
  },
  computed: {
    prestataire() {
      return this.$store.getters.prestataire;
    }
  }
}
</script>

<style scoped>

</style>