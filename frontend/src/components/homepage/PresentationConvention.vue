<!--<template>-->
<!--  <main>-->
<!--    <v-row justify="center" class="presentation">-->
<!--      <TitlePresentation title="Activités"/>-->
<!--      <v-row justify="center" style="width: 100%">-->
<!--        <v-col cols="12" md="6" class="text-center">-->
<!--          <v-img-->
<!--              :src="getImageActivity()"-->
<!--              max-height="50vh"-->
<!--          >-->
<!--          </v-img>-->
<!--        </v-col>-->
<!--        <v-col cols="12" md="6">-->
<!--          <v-expansion-panels-->
<!--              v-model="panel"-->
<!--              popout>-->
<!--            <v-expansion-panel-->
<!--                v-for="(activite, i) in activites"-->
<!--                :key="i"-->
<!--            >-->
<!--              <v-expansion-panel-header><h2>{{ activite.title }}</h2></v-expansion-panel-header>-->
<!--              <v-expansion-panel-content>-->
<!--                <v-row>-->
<!--                  <v-col cols="2">-->
<!--                    <v-avatar size="100px">-->
<!--                      <v-img-->
<!--                          :src="activite.image"-->
<!--                          :alt="activite.title"-->
<!--                          height="100%"-->
<!--                          contain-->
<!--                      />-->
<!--                    </v-avatar>-->
<!--                  </v-col>-->
<!--                  <v-col cols="10" class="presentation-activite">-->
<!--                    <p>{{ activite.description }}</p>-->
<!--                  </v-col>-->
<!--                </v-row>-->
<!--              </v-expansion-panel-content>-->
<!--            </v-expansion-panel>-->
<!--          </v-expansion-panels>-->
<!--        </v-col>-->


<!--      </v-row>-->

<!--      ici {{ panel }}-->
<!--    </v-row>-->
<!--  </main>-->
<!--</template>-->

<!--<script>-->
<!--import TitlePresentation from "@/components/homepage/TitlePresentation.vue";-->

<!--export default {-->
<!--  name: "PresentationConvention",-->
<!--  components: {TitlePresentation},-->
<!--  data() {-->
<!--    return {-->
<!--      photosActivites: [-->
<!--        "/images/joust.jpg",-->
<!--        "/images/abwer.jpg",-->
<!--        "/images/archery.jpg",-->
<!--        "/images/blacksmith.jpg",-->
<!--        "/images/spectacle.jpg"-->
<!--      ],-->
<!--      panel: 0,-->
<!--      activites: [-->
<!--        {-->
<!--          image: "images/joutes.jpg",-->
<!--          title: "Joutes",-->
<!--          description: "Découvrez l'art de la joute, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"-->
<!--        }, {-->
<!--          image: "images/joutes.jpg",-->
<!--          title: "Taverne",-->
<!--          description: "Découvrez l'art de boire, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"-->
<!--        }, {-->
<!--          image: "images/joutes.jpg",-->
<!--          title: "Tir à l'arc",-->
<!--          description: "Venez mettre à l'épreuve votre précision et votre concentration dans une épreuve de tir à l'arc, une discipline historiquement utilisée pour la chasse et le combat."-->
<!--        },-->
<!--        {-->
<!--          image: "images/joutes.jpg",-->
<!--          title: "Spectacles",-->
<!--          description: "Assistez à des spectacles grandioses tels qu'une compétition de lancer de nain encadrée, des chansons de troubadours ainsi que des scènes de théâtre !"-->
<!--        },-->
<!--        {-->
<!--          image: "images/joutes.jpg",-->
<!--          title: "Forgerons",-->
<!--          description: "Découvrez le processus de fabrication d'armes et d'outils métalliques présenté par nos forgerons et tout leur savoir-faire !"-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    getImageActivity() {-->
<!--      if (this.panel === undefined) {-->
<!--        return "https://media.discordapp.net/attachments/1046545117001027654/1048743478726758561/perfect.jpg";-->

<!--      } else {-->
<!--        return this.photosActivites[this.panel];-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--.presentation {-->
<!--  padding: 100px 50px 50px 50px;-->
<!--  height: 100vh;-->
<!--  background: #000000;-->
<!--  background-size: cover;-->
<!--}-->


<!--v-expansion-panels {-->
<!--  width: 100%;-->
<!--}-->

<!--.presentation-activite {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  font-size: 21px;-->

<!--}-->

<!--h2 {-->
<!--  font-size: 30px;-->
<!--  font-weight: bold;-->
<!--  font-family: 'Pirata One', cursive;-->
<!--}-->

<!--.img-activity {-->
<!--  max-height: 50vh;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--</style>-->



<template>
  <main>
    <TitlePresentation title="Présentation"/> <!--activitéq-->
    <br><br>
    <v-row class="mx-auto">
      <v-col cols="5">
        <v-img :src="getImageActivity()" max-height="50vh"></v-img>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="5">
        <v-expansion-panels v-model="panel">
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
    </v-row>
  </main>
</template>

<script>
import TitlePresentation from "@/components/homepage/TitlePresentation.vue";

export default {
  name: "PresentationConvention",
  components: {TitlePresentation},
  data() {
    return {
      photosActivites: [
        "/images/joust.jpg",
        "/images/abwer.jpg",
        "/images/archery.jpg",
        "/images/blacksmith.jpg",
        "/images/spectacle.jpg",

      ],
      panel: 0,
      activites: [
        {
          image: "images/joutes.jpg",
          title: "Joutes",
          description: "Découvrez l'art de la joute, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"
        }, {
          image: "images/joutes.jpg",
          title: "Taverne",
          description: "Découvrez l'art de boire, selon les traditions du moyen-âge. De nombreux chevaux et cavaliers vous attendent pour vous faire découvrir cette discipline !"
        }, {
          image: "images/joutes.jpg",
          title: "Tir à l'arc",
          description: "Venez mettre à l'épreuve votre précision et votre concentration dans une épreuve de tir à l'arc, une discipline historiquement utilisée pour la chasse et le combat."
        },
        {
          image: "images/joutes.jpg",
          title: "Spectacles",
          description: "Assistez à des spectacles grandioses tels qu'une compétition de lancer de nain encadrée, des chansons de troubadours ainsi que des scènes de théâtre !"
        },
        {
          image: "images/joutes.jpg",
          title: "Forgerons",
          description: "Découvrez le processus de fabrication d'armes et d'outils métalliques présenté par nos forgerons et tout leur savoir-faire !"
        }
      ],
    }
  },
  methods: {
    getImageActivity() {
      if (this.panel === undefined) {
        return "image_presta/compagnie_excalibur.jpg";
      } else {
        return this.photosActivites[this.panel];
      }
    }
  }
}
</script>

<style scoped>
main {
  height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../../assets/forest.png");
  background-repeat: no-repeat;
  background-size: cover;
}

v-expansion-panels {
  width: 100%;
}

h2 {
  font-size: 30px;
  font-weight: bold;
  font-family: 'Pirata One', cursive;
}

.presentation-activite {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
}
</style>