<template>
  <main>
    <div class="container">
  <text-editor :contenu="prestataire.contenuPage" @validerUpdate="validerUpdate" />

    </div>
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
  height: 100vh;
  margin-top:   50px;
}
</style>