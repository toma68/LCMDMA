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
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "PrestataireComponent",
  methods: {
    togglePageMasque() {
      this.$store.dispatch("togglePageMasque");
    },
    editerPagePrestataire() {
      this.$router.push("/prestataire/editer");
    }
  },
  mounted() {
    this.$store.dispatch("getPrestataire");
  },
  computed: {
    user() {
      return this.$store.getters.prestataire;
    }
  }
}
</script>

<style scoped>

main {
  height: 100vh;
  margin-top: 150px;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}

v-form {
  margin: 50px;
}

.login-title {
  font-size: 30px;
  font-family: 'Secular One', sans-serif;
}
</style>