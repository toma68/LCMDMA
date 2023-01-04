<template>
  <main>
    <ListPrestataireComponent />
    <SelectedPrestataireComponent />
  </main>
</template>

<script>
import ListPrestataireComponent from '@/components/userprestataire/ListPrestataireComponent.vue'
import SelectedPrestataireComponent from '@/components/userprestataire/SelectedPrestataireComponent.vue'
export default {
  name: "UserPrestataireView",
  components: {
    ListPrestataireComponent,
    SelectedPrestataireComponent
  }

}
</script>

<style scoped>

</style>