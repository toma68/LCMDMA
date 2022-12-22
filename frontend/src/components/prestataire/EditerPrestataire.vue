<template>
  <main>
    <div class="container">
      <ElementPersonnalisableEditer v-for="element in prestataire.contenuPage" :contenu="element.contenu" :type="element.type" :id="element.id" v-bind:key="element.id" />
    </div>
  </main>
</template>

<script>
import ElementPersonnalisableEditer from "@/components/EditerPagePersonnalisee/ElementPersonnalisableEditer.vue";

export default {
  name: "EditerPrestataire",
  components: {ElementPersonnalisableEditer},
  data() {
    return {
    };
  },
  computed: {
    prestataire() {
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
</style>