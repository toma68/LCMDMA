<template>
  <main>
    <v-row justify="center" class="presentation">
      <v-img
          cols="12"
          src="images/bannier_medievale.png"
          height="20%"
          contain
          style="overflow: visible"
      >
        <p class="logo-banniere">LCMDMA</p>
      </v-img>

      <v-row justify="center" style="width: 100%">
        <v-col cols="12" md="6">
          <v-expansion-panels
            v-model="panel"
            popout>
            <v-expansion-panel
                v-for="(activite, i) in activites"
                :key="i"
            >
              <v-expansion-panel-header><h2>{{ activite.title }}</h2></v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="2">
                    <v-avatar size="100px">
                      <v-img
                          :src="activite.image"
                          :alt="activite.title"
                          height="100%"
                          contain
                      />
                    </v-avatar>
                  </v-col>
                  <v-col cols="10" class="presentation-activite">
                    <p>{{ activite.description }}</p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6">
        </v-col>

      </v-row>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "PresentationConvention",
  data () {
    return { panel: [0],
      activites: [
        {
          image: "images/joutes.jpg",
          title: "Joutes",
          description: "Découvrez l'art de la joute, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"
        }, {
          image: "images/joutes.jpg",
          title: "Joutes",
          description: "Découvrez l'art de la joute, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"
        }, {
          image: "images/joutes.jpg",
          title: "Joutes",
          description: "Découvrez l'art de la joute, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"
        }
      ]}
  }
}
</script>

<style scoped>
.presentation {
  padding: 100px 50px 50px 50px;
  height: 100vh;
  background: url('~@/assets/background2.jpg');
  background-size: cover;
}

.logo-banniere {
  font-size: 90px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-family: 'Pirata One', cursive;
  margin-top: 35px;
}

v-expansion-panels {
  width: 100%;
}

.presentation-activite {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;

}

h2{
  font-size: 30px;
  font-weight: bold;
  font-family: 'Pirata One', cursive;
}
</style>