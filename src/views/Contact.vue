<template>
  <section id="home">
    <div class="container-bg background-default footer-always-on-bottom">
      <div class="container-content">
        
        <div class="page-default">

          <PageHeader title="Entre em Contato" subTitle="Alguma dúvida?"/>

          <h5 class="page-paragraph-title pt-3 pb-3"><span>Nossas informações de contato</span></h5>

          <p>
            <strong>E-mail:</strong> {{ this.$adminEmail }}<br>
            <strong>Discord:</strong> LucyLesta#4509<br>
          </p>

          <p>Nós tentamos responder a todas as perguntas dentro de 2 horas, por favor seja paciente conosco!</p>

        </div>
        <!-- End page-default -->
      </div>
      <!-- container-content -->
    </div>
    <!-- container-bg -->
  </section>

</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style scoped lang="scss">

  .container-content {
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }

</style>
