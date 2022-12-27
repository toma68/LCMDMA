<template>
  <main>
    <div class="container">
      <h1>Vous êtes connecté en tant que {{ user.user.prenom }} {{user.user.nom}}</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Informations</h2>
          <p>Numero de Siret : {{user.numeroSiret}}</p>
          <p>Entreprise : {{user.nomEntreprise}}</p>
          <p>Description : {{user.description}}</p>
          <p>Page prestataire visible :
            <span v-if="user.pageMasque">Non</span>
            <span v-else>Oui</span>
            <v-btn @click="togglePageMasque" color="primary" v-if="user.pageMasque">Afficher</v-btn>
            <v-btn @click="togglePageMasque" color="primary" v-else>Cacher</v-btn>
          </p>
          <v-btn @click="editerPagePrestataire" color="primary">Modifier ma page prestataire</v-btn>

        </div>
        <div class="col-md-6">
          <h2>Vos services</h2>
          <v-switch v-for="service in services" :key="service.id" :label="service.libelle" v-model="service.checked" @change="toggleService(service.id, service.checked)"></v-switch>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "PrestataireHomeComponent",
  methods: {
    togglePageMasque() {
      this.$store.dispatch("togglePageMasque");
    },
    editerPagePrestataire() {
      this.$router.push("/prestataire/editer");
    },
    toggleService(id,bool) {
      this.$store.dispatch("toggleService", {id: id, bool:bool});
    }
  },
  mounted() {
    this.$store.dispatch("getPrestataire");
    this.$store.dispatch("getServices");
  },
  computed: {
    user() {
      return this.$store.getters.prestataire;
    },
    services() {
      return this.$store.getters.services;
    }
  }
}
</script>

<style scoped>

main {
  height: 100vh;
  margin-top: 150px;
}

v-form {
  margin: 50px;
}

</style>