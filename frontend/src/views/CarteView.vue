<template>
  <main>

    <PresentationLieu/>

  </main>
</template>

<script>
import PresentationLieu from "@/components/homepage/PresentationLieu.vue";

export default {
  name: "CarteView",
  components: {PresentationLieu}
}
</script>

<style scoped>
PresentationLieu {
  margin-top: 100px;
}

</style>