<template>
  <main>
    <div class="container">
      <br>
      <h1 class="text-center" style="color: white;">Achat de billets</h1>
      <br>
      <div class="row">
        <div class="col-6">
          <v-select
              :items="$store.state.tarifs"
              v-model="selectedBillet"
              item-text="libelle"
              item-value="id"
              filled
              dense
              solo
              label="Choisissez un billet"
          ></v-select>
        </div>
        <div class="col-6">
          <v-btn color="primary" class="mx-2" @click="ajouterAuPanier">Ajouter au panier</v-btn>
        </div>

        <div class="panier" v-if="this.panier.length>0">
          <h1 style="color: white;">Panier</h1>
          <br>
          <v-list>
            <v-list-item v-for="(item, i) in panier" :key="i" style="width: 100%">
              <v-list-item-content>
                <v-list-item-title>{{
                    $store.state.tarifs.find(element => element.id == item.id).libelle
                  }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ $store.state.tarifs.find(element => element.id == item.id).prix }} €
                </v-list-item-subtitle>
                <v-list-item-subtitle>Quantité : {{ item.quantite }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="reduireQuantite(i)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action>
                <v-btn icon @click="augmenterQuantite(i)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action>
                <v-btn icon @click="supprimerDuPanier(i)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-btn color="success" class="mx-2" @click="validerPanier">Valider le panier</v-btn>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "achatBilletComponent",
  data() {
    return {
      panier: [],
      selectedBillet: null,
    };
  },
  methods: {
    ajouterAuPanier() {
      if (this.panier.find(element => element.id == this.selectedBillet) == undefined) {
        this.panier.push({id: this.selectedBillet, quantite: 1});
      } else {
        this.panier.find(element => element.id == this.selectedBillet).quantite++;
      }
    },
    supprimerDuPanier(index) {
      this.panier.splice(index, 1);
    },
    augmenterQuantite(index) {
      this.panier[index].quantite++;
    },
    reduireQuantite(index) {
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite--;
      } else {
        this.supprimerDuPanier(index);
      }
    },
    validerPanier() {
      this.$store.dispatch("validerPanier", this.panier).then(
          () => {
            this.panier = [];
          }
      )
    }
  },
  created() {
    this.$store.dispatch("getTarifs");
  }
}
</script>

<style scoped>

</style>