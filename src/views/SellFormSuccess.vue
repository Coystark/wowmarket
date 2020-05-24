<template>
  <section id="sellFormSuccess">
    <div class="container-bg background-default footer-always-on-bottom">
      <div class="container-content">
        
        <div class="page-default">

          <PageHeader title="Agora é só aguardar" subTitle="Pronto"/>
          <p class="text-center">Sua proposta foi enviada com sucesso, aguarde entrarmos em contato com você.</p>

        </div>
        <!-- End page-default -->
      </div>
      <!-- container-content -->
    </div>
    <!-- container-bg -->
  </section>

</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "sellFormSuccess",
  components: {
    PageHeader
  }
};
</script>

<style scoped lang="scss">

.container-content {
  padding-top: 180px;
  display: flex;
  justify-content: center;
}
</style>
