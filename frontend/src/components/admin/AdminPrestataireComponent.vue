<template>
  <main>
    <v-container v-if="users.length>0">
      <v-data-table style="margin-top: 50px;"
                    :headers="headers"
                    :items="users"
                    :items-per-page="5"
                    class="elevation-1"
      ></v-data-table>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "ListUsersComponent",
  data() {
    return {
      headers: [
        {text: "Nom", value: "nom"},
        {text: "Prénom", value: "prenom"},
        {text: "Email", value: "email"},
        {text: "Role", value: "roleId"},
      ]
    };
  },
  created() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    prestatairesNonValides() {
      return this.users.filter(u => u.roleId === 1);
    },
    prestatairesValides() {
      return this.users.filter(u => u.roleId === 2);
    }
  },
  methods: {
    initialize() {
      this.tables = this.users;
    },
    validerPrestataire(id) {
      const users = this.users.find(u => u.id === id);
      users.roleId = 2;
    },
    supprimerPrestataire(id) {
      this.infoPrestataire = this.infoPrestataire.filter(p => p.id !== id);
    },
  }
}
</script>

<style scoped>
  main {
    margin-top: 100px;
  }
</style>