<template>
  <main>
    <v-row>
      <v-col col="1"></v-col>
      <v-col cols="3">
        <v-card elevation="5" style="margin-top: 50px;">
          <div class="card-body">
            <v-card-title class="prestataire-title">
              Vos informations
            </v-card-title>
            <v-form>
              <br>
              Vous êtes connecté en tant que prestataire :
              <br>
              {{ user.user.prenom }} {{ user.user.nom }}
              <br><br>
              <v-icon class="mdi-account-search">mdi-account-search</v-icon>
              Numero de Siret : {{ user.numeroSiret }}
              <v-divider></v-divider>
              <br>
              <v-icon class="mdi-account-group">mdi-account-group</v-icon>
              Entreprise : {{ user.nomEntreprise }}
              <v-divider></v-divider>
              <br>
              <v-icon class="mdi-application-edit-outline">mdi-application-edit-outline</v-icon>
              Description :
              <br>{{ user.description }}
              <v-divider></v-divider>
              <br>
              <span v-if="user.pageMasque">
                  <v-icon class="mdi-eye-off">mdi-eye-off</v-icon> Page prestataire visible : Non
                </span>
              <span v-else>
                  <v-icon class="mdi-eye">mdi-eye</v-icon> Page prestataire visible : Oui
                </span>
              <br><br>
              <v-btn @click="togglePageMasque" color="primary" v-if="user.pageMasque">Afficher</v-btn>
              <v-btn @click="togglePageMasque" color="primary" v-else>Cacher</v-btn>
              <br><br>
              <v-divider></v-divider>
              <br>
              <v-btn @click="editerPagePrestataire" color="primary">Modifier ma page prestataire</v-btn>
              <br>
            </v-form>
          </div>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card elevation="5" style="margin-top: 50px;">
          <div class="card-body">
            <v-card-title class="prestataire-title">
              Vos activités
            </v-card-title>
            <v-form style="margin-top: 20px;">
              <v-switch v-for="service in services" :key="service.id" :label="service.libelle" v-model="service.checked"
                        @change="toggleService(service.id, service.checked)">
              </v-switch>
              <v-row>
                <template v-for="(table, index) in tables">
                  <v-col :key="index" cols="6">
                    <v-data-table
                        :headers="headers"
                        :items="table"
                        :items-per-page="5"
                        class="elevation-1"
                    ></v-data-table>



                    <div class="btn-toolbar">
                      <v-menu v-model="menuOpenUpdate" :close-on-content-click="false" transition="scale-transition" offset-y full-width>
                        <template v-slot:activator="{ on }">
                          <v-btn v-on="on" color="warning" @click="menuOpenUpdate = true">Modifier l'activité</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>Modifier l'activité</v-card-title>
                          <v-card-text>
                            <!-- Formulaire pour modifier une activité -->
                            <v-form>
                              <v-select
                                  v-model="activiteSelectionnee"
                                  :items="activitesDisponibles"
                                  item-text="libelle"
                                  item-value="id"
                                  label="Activité"
                                  required
                              ></v-select>
                              <v-text-field
                                  v-model="heureDebut"
                                  label="Heure de début (00:00)"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="heureFin"
                                  label="Heure de fin (00:00)"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="description"
                                  label="Description"
                                  required
                              ></v-text-field>
                            </v-form>
                          </v-card-text>
                          <v-card-actions>
                            <v-btn @click="modifierActivite">Modifier</v-btn>
                            <v-btn @click="menuOpenUpdate = false">Annuler</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-menu>

                      <v-menu v-model="menuOpenDelete" :close-on-content-click="false" transition="scale-transition" offset-y full-width>
                        <template v-slot:activator="{ on }">
                          <v-btn v-on="on" color="error" @click="menuOpenDelete = true">Supprimer l'activité</v-btn>
                        </template>
                        <v-card>
                          <!-- Confirmation de suppression -->
                          <v-card-title class="headline">Êtes-vous sûr de vouloir supprimer cette activité ?</v-card-title>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="supprimerActivite">Supprimer</v-btn>
                            <v-btn color="blue darken-1" text @click="menuOpenDelete = false">Annuler</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-menu>
                    </div>
                  </v-col>
                </template>

                <!--Boutton ajouter-->
                <v-col cols="12">
                  <v-menu v-model="menuOpen" :close-on-content-click="false" transition="scale-transition" offset-y full-width>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="primary" @click="menuOpen = true">Ajouter une activité</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>Ajouter une activité</v-card-title>
                      <v-card-text>
                        <!-- Formulaire pour ajouter une activité -->
                        <v-form>
                          <v-select
                              v-model="activiteSelectionnee"
                              :items="activitesDisponibles"
                              item-text="libelle"
                              item-value="id"
                              label="Activité"
                              required
                          ></v-select>
                          <v-text-field
                            v-model="heureDebut"
                            label="Heure de début (00:00)"
                            required
                          ></v-text-field>
                          <v-text-field
                              v-model="heureFin"
                              label="Heure de fin (00:00)"
                              required
                          ></v-text-field>
                          <v-text-field
                              v-model="description"
                              label="Description"
                              required
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn @click="ajouterActivite">Ajouter</v-btn>
                        <v-btn @click="menuOpen = false">Annuler</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card>
      </v-col>
      <v-col col="1"></v-col>
    </v-row>
  </main>
</template>

<script>

export default {
  name: "PrestataireHomeComponent",
  data() {
    return {
      headers: [
        {
          text: 'Nom',
          align: 'start',
          value: 'nom',
        },
        { text: 'Heure de debut', value: 'heureDebut' },
        { text: 'Heure de fin', value: 'heureFin' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'typeActivite.libelle' },
      ],
      tables: [
        [
          {
            nom: 'Activité test',
            heureDebut: '08:00',
            heureFin: '12:00',
            description: 'Description de l\'activité 1',
            typeActivite: {
              libelle: 'Activité 1'
            },
          },
        ],
        [
          {
            nom: 'Activité test 2',
            heureDebut: '08:00',
            heureFin: '12:00',
            description: 'Description de l\'activité 2',
            typeActivite: {
              libelle: 'Activité 2'
            },
          },
        ],
      ],
      menuOpen: false,
      menuOpenUpdate: false,
      menuOpenDelete: false,
    };
  },
  methods: {
    togglePageMasque() {
      this.$store.dispatch("togglePageMasque");
    },
    editerPagePrestataire() {
      this.$router.push("/prestataire/editer");
    },
    ajouterActivite() {
      // code pour ajouter une activité
      //a faire

      this.menuOpen = false;
    },
    modifierActivite() {
      //code pour modifier l'activité
      //a faire

      this.menuOpenUpdate = false;
    },
    supprimerActivite() {
      //code pour supprimer l'activité
      //a faire

      this.menuOpenDelete = false;
    },
    toggleService(id, bool) {
      this.$store.dispatch("toggleService", {id: id, bool: bool});
    }
  },
  mounted() {
    this.$store.dispatch("getActivitesByPrestataire", this.$store.state.user.userId);
    this.$store.dispatch("getPrestataire")
    this.$store.dispatch("getServices");
  },
  computed: {
    user() {
      return this.$store.getters.prestataire;
    },
    services() {
      return this.$store.getters.services;
    },
    activites() {  // change this line
      return this.$store.getters.activites;
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../../assets/baroque_foncé.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}

.prestataire-title {
  font-size: 30px;
  font-family: 'Secular One', sans-serif;
}
</style>