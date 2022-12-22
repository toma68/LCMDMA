<template>
  <div>
    <component :is="type" :contenu="contenu"/>
  </div>
</template>

<script>
import TitreTaille1 from "@/components/composantsPagePersonalisee/TitreTaille1.vue";
import ImagePersonnalisable from "@/components/composantsPagePersonalisee/ImagePersonnalisable.vue";
import TextePersonnalisable from "@/components/composantsPagePersonalisee/TextePersonnalisable.vue";
import ColonnesPersonnalisables from "@/components/composantsPagePersonalisee/ColonnesPersonnalisables.vue";

export default {
  name: "ElementPersonalisable",
components: {TitreTaille1, ImagePersonnalisable, TextePersonnalisable, ColonnesPersonnalisables},
  props: {
    type: {
      type: String,
      required: true
    },
    contenu: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>