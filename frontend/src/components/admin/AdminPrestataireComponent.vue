<template>
  <main class="bg">
    <v-container v-if="users.length>0">
      <h1 style="color: white">Utilisateurs</h1>
      <v-data-table style="margin-bottom: 50px;"
                    :headers="headersUsers"
                    :items="users.filter(
                        user => user.roleId === 1
                    )"
                    :items-per-page="5"
                    class="elevation-1"
                    :sort-by="'roleId'"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-chip
              :color="getColor(item)"
          >
            <v-icon
                small
                @click="validerPrestataire(item)"
                class="mr-5"
            >
              mdi-check
            </v-icon>

            <v-icon
                small
                @click="refuserPrestataire(item)"

            >
              mdi-close
            </v-icon>


          </v-chip>



        </template>
      </v-data-table>
      <h1 style="color: white">Personnel</h1>
      <v-data-table style="margin-bottom: 50px;"
                    :headers="headersPersonnel"
                    :items="users.filter(
                        user => user.roleId > 1
                    )"
                    :items-per-page="5"
                    class="elevation-1"
                    :sort-by="'roleId'"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
              small
              @click="validerPrestataire(item)"
              v-if="item.infoPrestataire && item.roleId === 1"
              class="mr-5"
          >
            mdi-check
          </v-icon>

          <v-icon
              small
              @click="refuserPrestataire(item)"
              v-if="item.infoPrestataire && item.roleId === 1"
          >
            mdi-close
          </v-icon>

          <v-icon
              small
              @click="editPrestataire(item)"
              v-if="item.infoPrestataire && item.roleId === 2"
          >
            mdi-pencil
          </v-icon>


        </template>
        <template v-slot:[`item.roleId`]="{ item }">
          <v-chip
              :color="getColor(item)"
          >
            <p v-if="item.roleId!=3">{{ item.role.libelle }}</p>
            <p v-else>{{ item.role.libelle }}</p>

          </v-chip>
        </template>
        <template v-slot:[`item.pageActive`]="{ item }">
          <v-chip
              :color="green"
              v-if="item.infoPrestataire != null && !item.infoPrestataire.pageMasquee"
          >
            <v-icon >
              mdi-check
            </v-icon>
          </v-chip>
        </template>
      </v-data-table>

      <h1 style="color: white" >Bannis</h1>

      <v-data-table style="margin-bottom: 50px;"
                    :headers="headersUsers"
                    :items="users.filter(
                        user => user.roleId === 0
                    )"
                    :items-per-page="5"
                    class="elevation-1"
                    :sort-by="'roleId'"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
              small
              @click="unBanUser(item)"
              class="mr-5"
          >
            mdi-account-arrow-right
          </v-icon>
        </template>
      </v-data-table>

    </v-container>
  </main>
</template>

<script>
export default {
  name: "ListUsersComponent",
  data() {
    return {
      headersUsers: [
        {text: "Nom", value: "nom"},
        {text: "Prénom", value: "prenom"},
        {text: "Email", value: "email"},
        {text: "Actions", value: "actions", sortable: false},
      ],
      headersPersonnel: [
        {text: "Nom", value: "nom"},
        {text: "Prénom", value: "prenom"},
        {text: "Email", value: "email"},
        {text: "Role", value: "roleId"},
        {text: "Entreprise" , value: "infoPrestataire.nomEntreprise"},
        {text: "Page Active", value: "pageActive", sortable: false},
        {text: "Actions", value: "actions", sortable: false},
      ],
    };
  },
  created() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    initialize() {
      this.tables = this.users;
    },
    masquerPage(id) {
      this.$store.dispatch("updatePrestataire", {id:id, pageMasquee:true});
    },
    validerPrestataire(id) {
      this.$store.dispatch("updateUser", {id: id, roleId: 2});
    },
    refuserPrestataire(id) {
this.$store.dispatch("updateUser", {id: id, roleId: 0});
    },
    getColor(item) {
      if (item.infoPrestataire && item.roleId === 1) {
        return "red";
      } else {
        return "transparent";
      }
    },
    editPrestataire(item) {
      this.$router.push({path: "/admin/prestataire/"+item.id, params: {id: item.id}});
    },
    unBanUser(id) {
      this.$store.dispatch("updateUser", {id: id, roleId: 1});
    },
    revokeAdmin(id) {
      this.$store.dispatch("updateUser", {id: id, roleId: 1});
    }
  }
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/baroque_foncé.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.titre{
  color: white;
  font-family: 'Secular One', sans-serif;
  font-size: 5rem;
  text-align: center;
}
</style>