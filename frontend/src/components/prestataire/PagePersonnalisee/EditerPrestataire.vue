<template>
  <main>

    <v-container>
      <br>
      <br>
      <br>
      <h1 class="text-center">{{ prestataire.nomEntreprise }}</h1>
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
    };
  },
  computed: {
    prestataire() {
      return this.$store.getters.prestataire;
    }
  },
  methods: {
    validerUpdate(contenu) {
      this.$store.dispatch("updateContenuPage", contenu);
    }
  }
}
</script>

<style scoped>
main {
  margin-top:   50px;
}
</style>