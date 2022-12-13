<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Billeterie</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae
            aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet
          </p>
        </div>
      </div>
    </div>
    {{tarifs}}
  </main>

</template>

<script>
export default {
  name: "BilleterieComponent",
  data() {
    return {
      tarifs:null,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("getTarifs").then(
      (response) => {
        this.tarifs = response.data;
      },
      (error) => {
        console.log(error);
      }

    )
  }

}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>