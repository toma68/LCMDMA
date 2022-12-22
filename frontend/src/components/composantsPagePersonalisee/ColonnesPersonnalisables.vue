<template>
  <div class="row">
    <div :class="'col-'+ 12/contenu.colonnes.length " v-for="colonne in contenu.colonnes" v-bind:key="colonne">
      <ElementPersonalisable v-for="element in colonne" :contenu="element.contenu" :type="element.type" v-bind:key="element.id" />
    </div>
  </div>
</template>

<script>
import ElementPersonalisable from "@/components/composantsPagePersonalisee/ElementPersonalisable.vue";
export default {
  name: "ColonnesPersonnalisables",
  components: {ElementPersonalisable},
  props: {
    contenu: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>