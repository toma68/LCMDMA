<template>
  <main>
    <div class="container" v-html="prestataire.contenuPage"></div>
  </main>
</template>

<script>

export default {
  name: "PrestataireComponent",
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
  font-family: Roboto,-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;
}
</style>