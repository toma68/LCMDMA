<template>
  <v-img
      cols="12"
      src="images/bannier_medievale.png"
      height="20%"
      contain
  >
    <p class="logo-banniere">{{ title }}</p>
  </v-img>

</template>

<script>
export default {
  name: "TitlePresentation",
  props: {
    title: String
  }
}
</script>

<style scoped>
.logo-banniere {
  font-size: 80px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-family: 'Pirata One', cursive;
  margin-top: 50px;
}
</style>