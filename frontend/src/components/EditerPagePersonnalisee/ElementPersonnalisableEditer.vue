<template>
<div>
    <component :is="type+'Editer'" :contenu="contenu" :id="id"/>
  </div>
</template>

<script>
import TitreTaille1Editer from "@/components/EditerPagePersonnalisee/TitreTaille1Editer.vue";

export default {
  name: "ElementPersonnalisableEditer",
  components: {TitreTaille1Editer},
  props: {
    type: {
      type: String,
      required: true
    },
    contenu: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>