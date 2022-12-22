<template>
  <img :src="contenu.source" :height="contenu.height" :width="contenu.width">
</template>

<script>
export default {
  name: "ImagePersonnalisable",
  props: {
    contenu: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>