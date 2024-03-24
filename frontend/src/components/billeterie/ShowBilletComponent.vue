<template>
  <main class="mx-auto mt-5">
    <v-card
        class="mx-auto"
        width="250"
        @click="showBillet()"
    >
      <qrcode-vue :value="billet.qrCode" :size="250" level="H"></qrcode-vue>
      <v-card-title class="center">{{ billet.tarif.libelle }}</v-card-title>
      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <div class=" ms-2">
            Prix : {{ billet.tarif.prix }} €
          </div>
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog
        v-model="dialog"
        width="550"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ billet.tarif.libelle }}
        </v-card-title>

        <v-card-text>
          <qrcode-vue :value="billet.qrCode" :size="500" level="H"></qrcode-vue>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
  </template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "ShowBilletComponent",
  components: {QrcodeVue},
  props: {
    billet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    showBillet() {
      this.dialog = true;
    },
  },
}
</script>

<style scoped>

</style>