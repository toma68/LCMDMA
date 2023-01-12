<template>
  <main>
    <div class="container text-center">
      <div class="row">
        <div class="mx-auto col-md-6">
          <h1 class="text-center">Billeterie</h1>
            <table class="table-tarifaire">
              <tr>
                <td></td>
                <td>Enfant (10/17 ans)</td>
                <td>Adulte</td>
                <td>Pass' Clan (2 adultes + 2 enfants)</td>
              </tr>
              <tr>
                <td>1 jour</td>
                <td>2 €</td>
                <td>6 €</td>
                <td>12 €</td>
              </tr>
              <tr>
                <td>2 jours</td>
                <td>3 €</td>
                <td>10 €</td>
                <td>20 €</td>
              </tr>
            </table>
          <achat-billet-component v-if="user != undefined"/>
        </div>
        <div class="col-md-6" v-if="user != undefined">
          <div v-if="billets.length !=0">
          <h1 class="text-center mb-5">Vos billets</h1>
          <v-row>
            <ShowBilletComponent v-for="billet in billets" :key="billet.id" :billet="billet"></ShowBilletComponent>
          </v-row>
          </div>
        </div>
      </div>
    </div>

  </main>

</template>

<script>


import AchatBilletComponent from "@/components/billeterie/achatBilletComponent.vue";
import ShowBilletComponent from "@/components/billeterie/ShowBilletComponent.vue";

export default {
  name: "BilleterieComponent",
  components: {AchatBilletComponent,ShowBilletComponent},
  data() {
    return {
      tarifs: null,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("getBillets");
  },
  computed: {
    billets() {
      console.log(this.$store.state.billets);
      return this.$store.state.billets;
    },
    user() {
      return this.$store.state.user;
    },
  },

}
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.table-tarifaire {
  margin-top: 30px;
}

.table-tarifaire td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}


.table-tarifaire tr:hover {
  background-color: #ddd;
}
</style>