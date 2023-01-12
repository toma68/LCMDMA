<template>
  <main>
    <v-row>
      <div class="col-md-6">
        <QrcodeStream :camera="camera" @decode="onScanResult" :track="qrCodeFunction">
          <div class="text-center">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
          </div>
        </QrcodeStream>
      </div>
      <div class="col-md-6">
        <h2>
          Informations sur le billet :
        </h2>
        <div v-if="billetScanned=='vide'">
          <h3>Billet invalide !</h3>
        </div>
        <div v-else-if="billetScanned!=undefined && billetScanned!=null">
          <v-card>
            <v-card-title>
              <h3 class="headline mb-0">{{ billetScanned.tarif.libelle }}</h3>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <h4>Nom : {{ billetScanned.user.nom }}</h4>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <h4>Prenom : {{ billetScanned.user.prenom }}</h4>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <h4>Date d'achat : {{ billetScanned.dateAchat }}</h4>
                </v-col>

                <div v-if="billetScanned.quantite>=1">
                  <h3>Billet valide !</h3>
                  <v-btn color="success" @click="composter(billetScanned)">Composter</v-btn>
                </div>
                <div style="color: red" v-else>
                  <h3>Billet invalide !</h3>
                </div>
              </v-row>
            </v-card-text>
          </v-card>

        </div>
        <div v-else>
          <h3>Scannez un billet</h3>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader'

export default {
  name: "AdminScanBilleterie",
  components: {QrcodeStream},
  data() {
    return {
      camera: 'auto',
    }
  },
  methods: {
    qrCodeFunction(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const {x, y} of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },

    onScanResult(result) {
      this.$store.dispatch('getBilletAfterScan', result)
      this.camera = 'off'
      setTimeout(() => {
        this.camera = 'auto'
      }, 3000)
    },
    composter(billet) {
      this.$store.dispatch('composterBillet', billet).then(
          () => {
            this.$store.dispatch('getBilletAfterScan', billet.code)
          }
      )
    }
  },
  computed: {
    billetScanned() {
      return this.$store.getters.billetScanned
    }
  }
}
</script>

<style scoped>
main {
  margin-top: 10vh;
}
</style>