<template>
  <main>
    <div>
      <h1 v-if="!showUpdate" @contextmenu="onContextMenu" id="title">{{ contenu.text }}</h1>
      <input v-else type="text" :value="contenu.text"
              append-icon="mdi-check"
              @input="updateText"
              @blur="showUpdate = false"
      >
    </div>
    fes
    <v-menu
        v-model="showMenu"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
    >
      <v-list>
        <v-list-item link>
          <v-list-item-title @click="modifier">Modifier</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title @click="supprimer">Supprimer</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </main>
</template>

<script>
export default {
  name: "TitreTaille1Editer",
  props: {
    contenu: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      x: 0,
      y: 0,
      showUpdate: false
    }
  },

  methods: {
    onContextMenu(e) {
      e.preventDefault()
      this.showMenu = true
      this.x = e.clientX
      this.y = e.clientY
    },
    modifier() {
      //affiche un formulaire pour modifier le titre
      this.showUpdate = true

    },
    updateText(e) {
      console.log(e.target.value)
    },
    supprimer() {
      this.$emit('supprimer', this.contenu, this.id)
    }
  }
}
</script>

<style scoped>
input {
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
}
</style>