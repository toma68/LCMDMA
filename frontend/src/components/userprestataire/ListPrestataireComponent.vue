<template>
  <v-container>
    <br>
    <br>
    <br>
    <br>
    <v-row>
      <v-col v-for="prestataires in prestataires" :key="prestataires.userId" cols="12" md="6" lg="4">
        <v-card>
          <v-img
              height="200px"
              :src="`${prestataires.image}`" alt="">
          </v-img>
          <v-card-title class="headline">{{prestataires.nomEntreprise}}</v-card-title>
          <v-card-text> {{prestataires.description}} </v-card-text>
          <div class="text-center">
            <v-btn class="button" v-bind:to="{ name: 'userPrestatairePage', params: { id: prestataires.userId }}">Plus de détails</v-btn>
          </div>
          <br>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "ListPrestataireComponent",
  data() {
    return {
      prestataires: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/infoPrestataires")
          .then(response => response.json())
          .then(data => {
            this.prestataires = data;
          })
          .catch(error => {
            console.log(error);
          });
    },
  }
}
</script>

<style scoped>
.button{
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  font-size: .875rem;
  border: thin solid;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: .0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: .28s;
  transition-property: box-shadow,transform,opacity;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
</style>