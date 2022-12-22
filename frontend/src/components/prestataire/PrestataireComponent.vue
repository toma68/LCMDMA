<template>
  <main>
    <div class="container">
      <ElementPersonalisable v-for="element in prestataire.contenuPage" :contenu="element.contenu" :type="element.type" v-bind:key="element.id" />
    </div>
  </main>
</template>

<script>
import ElementPersonalisable from "@/components/composantsPagePersonalisee/ElementPersonalisable.vue";

export default {
  name: "PrestataireComponent",
  components: {ElementPersonalisable},
  methods: {
  },
  mounted() {
    this.$store.dispatch("getPrestataireById", this.$route.params.id);
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