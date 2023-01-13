<template>
  <main class="bg">
    <vue-cal class="lecalendrier"
        :disable-views="['years', 'year', 'month', 'week']"
        active-view="day"
        :events="events"
        :split-days="stands"
        :selected-date="'2023-07-08'"
        sticky-split-labels
        :timeFrom="60*10"
        :timeTo="60*21"
        :on-event-click="onEventClick"
        :locale="FR">


    </vue-cal>
    <v-dialog v-model="showDialog">
      <v-card>
        <v-card-title>
          <v-icon>{{ selectedEvent.icon }}</v-icon>
          <span>{{ selectedEvent.title }}</span>
          <v-spacer/>
          <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
        </v-card-title>
        <v-card-text>
          <p v-html="selectedEvent.contentFull"/>
          <strong>Details:</strong>
          <ul>
            <li>Début à : {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
            <li>Fin à : {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: "PlanningV2",
  components: {
    VueCal
  },
  data() {
    return {
      selectedEvent: {},
      showDialog: false,
      FR: {
        "weekDays": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        "months": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        "years": "Années",
        "year": "Année",
        "month": "Mois",
        "week": "Semaine",
        "day": "Jour",
        "today": "Aujourd'hui",
        "noEvent": "Rien à déclarer !",
        "allDay": "Tourne toute la journée",
        "deleteEvent": "Supprimer",
        "createEvent": "Créer",
        "dateFormat": "dddd D MMMM YYYY"
      },
      stands: [],
      events: [{
        start: '2023-07-07 14:00',
        end: '2023-07-07 16:00',
        //choose stand
        split: 11,
        title: 'Need to go shopping',
        content: 'Click to see my shopping list',
        contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.

      }
      ]
    }
  },
  methods: {
    onEventClick(event) {
      this.selectedEvent = event
      this.showDialog = true
    }
  },
  computed: {
    activites() {
      return this.$store.getters['activites']
    }
  },
  mounted() {
    this.$store.dispatch('getAllActivites')
  },
  watch: {
    activites: {
      handler: function (activites) {
        this.stands = activites.map(activite => {
          return {
            label: activite.infoPrestataire.description,
            id: activite.infoPrestataire.standId
          }
        })
        this.stands = this.stands.filter((v, i, a) => a.findIndex(t => (t.label === v.label)) === i)

        this.events = activites.map(activite => {
          return {
            start: activite.heureDebut.split('T')[0] + " " + activite.heureDebut.split('T')[1].split('.')[0],
            end: activite.heureFin.split('T')[0] + " " + activite.heureFin.split('T')[1].split('.')[0],
            //choose stand
            split: activite.infoPrestataire.standId,
            title: activite.nom,
            contentFull: activite.description, // Custom attribute.
            //class random on a list of 4
            background:true,
            //random color

          }
        })
      },
      deep: true
    }
  },
  created() {
    //mets les background  des elements vuecal__event en couleur f2d785
    document.head.insertAdjacentHTML('beforeend', '<style>.vuecal__event{background-color: #f2d785}</style>');
  }

}
</script>

<style scoped>
main {
  margin-top: 80px;
}

.vuecal__event {
  background-color: #f2d785
}

/* some colors */

.lecalendrier{
  background-color: rgba(255, 255, 255, 0.8);
  color: #000000;
}
.vuecal{
  height: auto !important;
}
</style>