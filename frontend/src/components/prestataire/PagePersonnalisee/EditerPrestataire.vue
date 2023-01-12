<template>
  <main class="bg">
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="titre">Modifier votre page</h1>
      <h1 class="text-center" style="color: white;">{{ prestataire.nomEntreprise }}</h1>
      <br>
      <v-row>
                <v-col class="col-lg-6 col-12 mx-auto">
          <v-card>
            <br>
            <text-editor :contenu="prestataire.contenuPage" @validerUpdate="validerUpdate" />

            <br>
            <h3 class="mx-3">Mes activités : </h3>
            <h4 class="ms-10">Ici apparaitront vos activités</h4>
            <hr>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
          v-model="snackbar"
          :timeout="-1"
          :value="true"
          absolute
          bottom
          :color="snackbarColor"
          outlined
          right
      >
        {{ snackbarText }}
        <v-btn
            text
            @click="snackbar = false"
        >
          Fermer
        </v-btn>
      </v-snackbar>


    </v-container>



  </main>
</template>

<script>
import TextEditor from "@/components/prestataire/PagePersonnalisee/TextEditor.vue";

export default {
  name: "EditerPrestataire",
  components: {TextEditor},
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      snackbarColor: "",
    };
  },
  computed: {
    prestataire() {
      return this.$store.getters.prestataire;
    }
  },
  methods: {
    validerUpdate(contenu) {
      this.$store.dispatch("updateContenuPage", contenu).then(
        () => {
          this.affichageMessage("success", "Votre page a bien été mise à jour");
        }
      )
    },
    affichageMessage(type, message) {
      this.snackbar = true;
      this.snackbarColor = "success";
      this.snackbarText = message;
    }
  }
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../../assets/baroque_foncé.jpg");
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