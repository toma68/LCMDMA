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
              <br><br>
              <v-switch v-for="service in services" :key="service.id" :label="service.libelle" v-model="service.checked"
                        @change="toggleService(service.id, service.checked)">
              </v-switch>
            </v-form>
          </div>
        </v-card>
      </v-col>

      <!--      erreur de v-slot-->
      <v-col cols="7">
        <template>
          <v-data-table style="margin-top: 50px;"
                        :headers="headers"
                        :items="tables"
                        :items-per-page="5"
                        class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Mes activités</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                    v-model="dialog"
                    max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                      Ajouter une activité
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                              cols="12"
                              sm="6"
                              md="4"
                          >
                            <v-text-field
                                v-model="editedItem.nom"
                                label="Nom"
                                required
                            ></v-text-field>
                          </v-col>
                          <v-col
                              cols="12"
                              sm="6"
                              md="4"
                          >
                            <v-text-field
                                v-model="editedItem.type"
                                label="Type"
                                required
                            ></v-text-field>
                          </v-col>
<!--                          <v-col-->
<!--                              cols="12"-->
<!--                              sm="6"-->
<!--                              md="4"-->
<!--                          >-->
<!--                            <v-text-field-->
<!--                                v-model="editedItem.heureDebut"-->
<!--                                label="Heure de départ 00:00"-->
<!--                                required-->
<!--                            ></v-text-field>-->
<!--                          </v-col>-->
<!--                          <v-col-->
<!--                              cols="12"-->
<!--                              sm="6"-->
<!--                              md="4"-->
<!--                          >-->
<!--                            <v-text-field-->
<!--                                v-model="editedItem.heureFin"-->
<!--                                label="Heure de fin 00:00"-->
<!--                                required-->
<!--                            ></v-text-field>-->
<!--                          </v-col>-->
                          <v-col
                              cols="12"
                              sm="12"
                              md="12"
                          >
                            <v-text-field
                                v-model="editedItem.description"
                                label="Description"
                                required
                            ></v-text-field>
                          </v-col>
                          <v-col
                              cols="12"
                          >Heure de début<br>
                            <DatePicker v-model="editedItem.heureDebut" mode="dateTime" :timezone="timezone" />
                          </v-col>
                          <v-col
                              cols="12"
                          >Heure de fin<br>
                            <DatePicker v-model="editedItem.heureFin" mode="dateTime" :timezone="timezone" />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                      >
                        Annuler
                      </v-btn>
                      <v-btn
                          color="blue darken-1"
                          text
                          @click="save"
                      >
                        Ajouter
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">Voulez-vous vraiment supprimer cette activité?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template>
              <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                  small
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                  color="primary"
                  @click="initialize"
              >
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </v-col>
      <v-col col="1"></v-col>
    </v-row>
  </main>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: "PrestataireHomeComponent",
  components: {
    DatePicker
  },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      date: new Date(),
      timezone: '',
      headers: [
        {
          text: 'Nom',
          align: 'start',
          sortable: false,
          value: 'nom',
        },
        {text: 'Heure de debut', value: 'heureDebut'},
        {text: 'Heure de fin', value: 'heureFin'},
        {text: 'Description', value: 'description'},
        {text: 'Type', value: 'typeActivite.libelle'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      tables: [],
      editedIndex: -1,
      editedItem: {
        nom: '',
        heureDebut: '',
        heureFin: '',
        description: '',
        typeActivite: {
          libelle: ''
        },
      },
      defaultItem: {
        nom: '',
        heureDebut: '',
        heureFin: '',
        description: '',
        typeActivite: {
          libelle: ''
        },
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nouvelle activité' : 'Modifier cette activité';
    },
    user() {
      return this.$store.getters.prestataire;
    },
    services() {
      return this.$store.getters.services;
    },
    activites() {  // change this line
      return this.$store.getters.activites;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.tables = [
        {
          nom: 'Activité test',
          heureDebut: '08:00',
          heureFin: '12:00',
          description: 'Description de l\'activité 1',
          typeActivite: {
            libelle: 'Activité 1'
          },
        },
        {
          nom: 'Activité test 2',
          heureDebut: '14:00',
          heureFin: '18:00',
          description: 'Description de l\'activité 2',
          typeActivite: {
            libelle: 'Activité 2'
          },
        },
        {
          nom: 'Activité test 3',
          heureDebut: '08:00',
          heureFin: '12:00',
          description: 'Description de l\'activité 3',
          typeActivite: {
            libelle: 'Activité 3'
          },
        },
        {
          nom: 'Activité test 4',
          heureDebut: '14:00',
          heureFin: '18:00',
          description: 'Description de l\'activité 4',
          typeActivite: {
            libelle: 'Activité 4'
          },
        },
        {
          nom: 'Activité test 5',
          heureDebut: '08:00',
          heureFin: '12:00',
          description: 'Description de l\'activité 5',
          typeActivite: {
            libelle: 'Activité 5'
          },
        },
        {
          nom: 'Activité test 6',
          heureDebut: '14:00',
          heureFin: '18:00',
          description: 'Description de l\'activité 6',
          typeActivite: {
            libelle: 'Activité 6'
          },
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.tables.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.tables.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.tables.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tables[this.editedIndex], this.editedItem);
      } else {
        this.tables.push(this.editedItem);
      }
      this.close();
    },


    togglePageMasque() {
      this.$store.dispatch("togglePageMasque");
    },
    editerPagePrestataire() {
      this.$router.push("/prestataire/editer");
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