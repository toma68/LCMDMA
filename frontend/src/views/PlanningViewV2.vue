<template>
<planning-v2></planning-v2>
</template>

<script>
import PlanningV2 from "@/components/planningpage/PlanningV2.vue";

export default {
  name: "PlanningViewV2",
  components: {PlanningV2}
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  padding: 50px 50px 50px 50px;
  background-image: url("../assets/LANDSCAPE-BG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>