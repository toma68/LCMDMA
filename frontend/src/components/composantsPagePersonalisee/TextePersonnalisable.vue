<template>
  <p>{{contenu.text}}</p>
</template>

<script>
export default {
  name: "TextePersonnalisable",
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