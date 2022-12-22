<template>
  <h1>{{contenu.text}}</h1>
</template>

<script>
export default {
  name: "TitreTaille1",
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