<template>
  <main>
    <div>
      <v-card elevation="5" style="margin-top: 150px;">
        <div class="card-body">
          <v-card-title class="prestataire-title">
            Vos informations
          </v-card-title>
          <v-form>
            <br>
            Vous êtes connecté en tant que prestataire :
            <br>
            {{ user.user.prenom }} {{ user.user.nom }}
            <br><br>
            <v-icon class="mdi-account-search">mdi-account-search</v-icon>
            Numero de Siret : {{ user.numeroSiret }}
            <v-divider></v-divider>
            <br>
            <v-icon class="mdi-account-group">mdi-account-group</v-icon>
            Entreprise : {{ user.nomEntreprise }}
            <v-divider></v-divider>
            <br>
            <v-icon class="mdi-application-edit-outline">mdi-application-edit-outline</v-icon>
            Description :
            <br>{{ user.description }}
            <v-divider></v-divider>
            <br>
            <span v-if="user.pageMasque">
              <v-icon class="mdi-eye-off">mdi-eye-off</v-icon> Page prestataire visible : Non
            </span>
            <span v-else>
              <v-icon class="mdi-eye">mdi-eye</v-icon> Page prestataire visible : Oui
            </span>
            <br><br>
            <v-btn @click="togglePageMasque" color="primary" v-if="user.pageMasque">Afficher</v-btn>
            <v-btn @click="togglePageMasque" color="primary" v-else>Cacher</v-btn>
            <br><br>
            <v-divider></v-divider>
            <br>
            <v-btn @click="editerPagePrestataire" color="primary">Modifier ma page prestataire</v-btn>
            <br>
            Vos services :
            <br>
            <v-switch v-for="service in services" :key="service.id" :label="service.libelle" v-model="service.checked"
                      @change="toggleService(service.id, service.checked)"></v-switch>

          </v-form>
        </div>
        <div class="card-body">
          <h1>Vos activites</h1>
          <v-data-table
              :headers="headers"
              :items="activites"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>

          <v-btn  color="primary">Ajouter une activite</v-btn>


        </div>

      </v-card>


    </div>

  </main>
</template>

<script>

export default {
  name: "PrestataireHomeComponent",
  data() {
    return {
      headers: [
        {
          text: 'Nom',
          align: 'start',
          value: 'nom',
        },
        { text: 'Heure de debut', value: 'heureDebut' },
        { text: 'Heure de fin', value: 'heureFin' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'typeActivite.libelle' },


      ],
    }
  },
  methods: {
    togglePageMasque() {
      this.$store.dispatch("togglePageMasque");
    },
    editerPagePrestataire() {
      this.$router.push("/prestataire/editer");
    },
    toggleService(id, bool) {
      this.$store.dispatch("toggleService", {id: id, bool: bool});
    }
  },
  created() {
    if (this.user && this.user.userId) {
      this.$store.dispatch("getActivitesByPrestataire", this.user.userId);
    }
    this.$store.dispatch("getPrestataire")
    this.$store.dispatch("getServices");
  },
  computed: {
    user() {
      return this.$store.getters.prestataire;
    },
    services() {
      return this.$store.getters.services;
    },
    activites() {  // change this line
      return this.$store.getters.activites;
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../../assets/baroque_foncé.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  width: 500px;
}

v-form {
  margin: 50px;
}

.prestataire-title {
  font-size: 30px;
  font-family: 'Secular One', sans-serif;
}
</style>