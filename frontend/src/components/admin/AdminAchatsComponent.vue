<template>
  <main class="bg">
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="titre">Liste des achats</h1>
      <br>
     <v-data-table
       :headers="headers"
       :items="achats"
       :items-per-page="5"
       class="elevation-1"
     ></v-data-table>
    </v-container>
 </main>
</template>

<script>
export default {
  name: "AdminAchatsComponent",
  data() {
    return {
      headers: [
        {text: "Nom", value: "user.nom"},
        {text: "Prénom", value: "user.prenom"},
        {text: "Date", value: "dateAchat"},
        {text: "Tarif", value: "tarif.libelle"},
        {text: "Prix (€)", value: "tarif.prix"},
        {text: "quantite", value: "quantite"},
        {text: "qrCode", value: "qrCode"},
      ]
    }
  },
  created() {
    this.$store.dispatch("getAchats");
  },
  computed: {
    achats() {
      return this.$store.state.achats;
    }
  }
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/baroque_foncé.jpg");
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