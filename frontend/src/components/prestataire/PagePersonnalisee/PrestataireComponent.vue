<template>
  <main>
    <div class="container" v-html="prestataire.contenuPage"></div>
    <component v-if="prestataire.services.find( (el) => {
      return el.id === 1;
    })" :is="LivreDOr" :prestataire="prestataire"></component>
  </main>
</template>

<script>
import LivreDOr from "./LivreDOr.vue";
export default {
  name: "PrestataireComponent",
  components: {
    LivreDOr
  },
  data() {
    return {
      LivreDOr: LivreDOr
    };
  },
  methods: {},
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
  height: auto;
  margin-top: 150px;
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>