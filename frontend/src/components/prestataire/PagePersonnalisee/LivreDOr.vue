<template>
  <div class="container">
    <h2>Livre d'or</h2>
    <div v-if="user" >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="7">
            <v-textarea
                v-model="message.contenuMessage"
                label="Votre message"
                required
            >
            </v-textarea>
          </v-col>
          <v-col cols="5">
            <v-rating
                background-color="grey"
                color="warning"
                half-increments
                hover
                required
                v-model="message.noteMessage"
            ></v-rating>
            <v-btn color="success mt-10" @click="validerMessage">Envoyer</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="messages">
      <v-list-item v-for="message in $store.getters.messages" :key="message.id">
        <v-list-item-content>
          <v-list-item-title>{{ message.user.prenom }} {{ message.user.nom }}</v-list-item-title>
          <v-list-item-subtitle>{{ message.contenuMessage }}</v-list-item-subtitle>
          <v-list-item-subtitle>

            <v-rating
                background-color="grey"
                color="warning"
                half-increments
                readonly
                v-model="message.noteMessage"
            ></v-rating>

          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>

export default {
  name: "LivreDOr",
  props: {
    prestataire: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      message: {
        contenuMessage: "",
        noteMessage: "",
        prestataire: this.prestataire.numeroSiret
      },
      displayMessages: null
    };
  },
  methods: {
    validerMessage() {
      this.$store.dispatch("addMessageOnLivreDOr", this.message).then(() => {
        this.$store.dispatch("getMessagesByPrestataire", this.prestataire.numeroSiret)

      });
      this.message.contenuMessage = ""
      this.message.noteMessage = ""
    }
  },
  mounted() {
    this.$store.dispatch("getMessagesFromLivreDOr", this.prestataire.numeroSiret)
    this.displayMessages = this.messages
  },
  computed: {
    user(){
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>

</style>