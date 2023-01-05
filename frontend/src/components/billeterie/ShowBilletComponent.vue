<template>
  <v-card
    class="mx-auto"
    max-width="250"
  >
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="center">{{billet.tarif.libelle}}</v-card-title>
    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
        <div class=" ms-2">
         Prix : {{billet.tarif.prix}} €
        </div>
      </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  name: "ShowBilletComponent",
  props: {
    billet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>