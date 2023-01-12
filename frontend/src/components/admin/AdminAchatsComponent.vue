<template>
 <main>
   <v-data-table
     :headers="headers"
     :items="achats"
     :items-per-page="5"
      class="elevation-1"
   ></v-data-table>
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
main {
  margin-top :100px
}

</style>