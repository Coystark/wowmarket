<template>
  <section id="home">
    <div class="container-bg background-default footer-always-on-bottom">
      <div class="container-content">
        
        <div class="page-default">

          <PageHeader title="Venda Sua conta" subTitle="World of Warcraft"/>

          <h5 class="page-paragraph-title pb-2">Termos de Venda</h5>
          
          <p>1. Exigimos uma foto da identidade do Proprietário Original (Carteira de Habilitação, Passaporte ou Identidade ) e uma foto do rosto ao lado do doc, para ter 100% de certeza de que você é de fato o Proprietário Original da conta.</p>

          <p>2. É importante preencher todo o formulário. O não preenchimento completo do formulário resultará em sua conta não ser processada.</p>

          <h5 class="page-paragraph-title pt-4 pb-4">Informações da Conta</h5>
          
          <form
            v-on:submit.prevent="checkForm"
            method="post"
          >
            <fieldset :disabled="disabledForm == true ? true : false">
          <!-- Também funciona como: @submit.prevent="checkForm"-->

              <div class="form-group">
                <div class="row">
                  <label for="isOriginalOwner" class="col-form-label col-sm-4">Você é o Proprietário Original?</label>
                  <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                    <select 
                      class="custom-select" 
                      id="isOriginalOwner"
                      v-model="isOriginalOwner"
                      v-bind:class="{ 'is-invalid': errorIsOriginalOwner }"
                    >
                      <option value="0" selected>Responda</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                    <div class="invalid-feedback">
                      {{ errorIsOriginalOwner }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <label for="hasCorrectSQA" class="col-form-label col-sm-4">Você tem a Resposta Secreta Correta?</label>
                  <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                    <select 
                      class="custom-select" 
                      id="hasCorrectSQA"
                      v-model="hasCorrectSQA"
                      v-bind:class="{ 'is-invalid': errorHasCorrectSQA }"
                    >
                      <option value="0" selected>Responda</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                    <div class="invalid-feedback">
                        {{ errorHasCorrectSQA }}
                    </div>
                  </div>
                </div>
              </div>

              <h5 class="page-paragraph-title pt-4 pb-4"><span>Informações do Personagem</span></h5>

              <div class="form-group row">
                <label for="armoryLink" class="col-sm-4 col-form-label">Link do Armory</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input 
                    type="text"
                    class="form-control"
                    id="armoryLink"
                    v-model="armoryLink"
                    v-bind:class="{ 'is-invalid': errorArmoryLink }"
                  >
                  <div class="invalid-feedback">
                    {{ errorArmoryLink }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="goldAvailable" class="col-sm-4 col-form-label">Ouro Disponível</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input 
                    type="text"
                    class="form-control" 
                    id="goldAvailable"
                    v-model="goldAvailable"
                    v-bind:class="{ 'is-invalid': errorGoldAvailable }"
                  >
                  <div class="invalid-feedback">
                    {{ errorGoldAvailable }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="titlesAndMounts" class="col-sm-4 col-form-label">Títulos e Montarias Notáveis</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <textarea 
                    type="text"
                    rows="2"
                    class="form-control"
                    id="titlesAndMounts"
                    v-model="titlesAndMounts"
                    v-bind:class="{ 'is-invalid': errorTitlesAndMounts }"
                  ></textarea>
                  <div class="invalid-feedback">
                    {{ errorTitlesAndMounts }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="accountAlts" class="col-sm-4 col-form-label">Personagens Alternativos Notáveis</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input 
                    type="text"
                    class="form-control"
                    id="accountAlts"
                    v-model="accountAlts"
                    v-bind:class="{ 'is-invalid': errorAccountAlts }"
                  >
                  <div class="invalid-feedback">
                    {{ errorAccountAlts }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="askingPrice" class="col-sm-4 col-form-label">Valor da Conta</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5 input-group">
                  <div class="input-group-prepend">
                    <div
                      class="input-group-text"
                      v-bind:class="{ 'is-invalid': errorAskingPrice }"
                    >
                      R$
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="askingPrice"
                    v-model="askingPrice"
                    v-bind:class="{ 'is-invalid': errorAskingPrice }"
                  >
                  <div class="invalid-feedback">
                    {{ errorAskingPrice }}
                  </div>
                </div>
              </div>

              <h5 class="page-paragraph-title pt-4 pb-4">Informações de Contato </h5>

              <div class="form-group row">
                <label for="fullName" class="col-sm-4 col-form-label">Nome Completo</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    v-model="fullName"
                    v-bind:class="{ 'is-invalid': errorFullName }"
                  >
                  <div class="invalid-feedback">
                    {{ errorFullName }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="emailAddress" class="col-sm-4 col-form-label">Endereço de E-Mail</label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input
                    type="text"
                    class="form-control"
                    id="emailAddress"
                    v-model="emailAddress"
                    v-bind:class="{ 'is-invalid': errorEmailAddress }"
                  >
                  <div class="invalid-feedback">
                    {{ errorEmailAddress }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="skypeUser" class="col-sm-4 col-form-label">Skype <small>(opcional)</small></label>
                <div class="col col-sm-7 col-md-6 col-lg-6 col-xl-5">
                  <input
                    type="text"
                    class="form-control"
                    id="skypeUser"
                    v-model="skypeUser"
                  >
                </div>
              </div>

              
              <div v-if="unexpectedError" class="alert alert-danger small mt-5 mb-0" role="alert">
                Houve um erro inesperado, tente novamente.<br>
                Se persinstir, contate o administrador do site: <strong>{{ this.$adminEmail }}</strong>
              </div>

              <button type="submit" class="btn btn-secondary p-2 mt-5 col col-sm-4 col-md-3">{{ buttonName }}</button>

            </fieldset>

          </form>

        </div>
        <!-- End page-default -->
      </div>
      <!-- container-content -->
    </div>
    <!-- container-bg -->
  </section>

</template>

<script>

  import Api from '@/config/Api';
  import PageHeader from '@/components/PageHeader.vue';
  
  const errorQuestionRequired = "Você precisa responder essa pergunta!";
  const errorInputRequired = "Você precisa preencher este campo!";
  const errorInvalidEmail = "Você precisa informar um e-mail válido!";

  export default {
    name: 'home',
    data: function () {
      return {
        disabledForm: false,
        buttonName: 'Enviar',
        unexpectedError: false,

        // Has Correct SQA
        hasCorrectSQA: 0,
        errorHasCorrectSQA: null,

        // Original Owner
        isOriginalOwner: 0,
        errorIsOriginalOwner: null,

        // Armory Link
        armoryLink: null,
        errorArmoryLink: null,

        // Gold Available
        goldAvailable: null,
        errorGoldAvailable: null,

        // Titles and Mounts
        titlesAndMounts: null,
        errorTitlesAndMounts: null,

        // Account Alts
        accountAlts: null,
        errorAccountAlts: null,

        // Asking Price
        askingPrice: null,
        errorAskingPrice: null,

        // FullName
        fullName: null,
        errorFullName: null,

        // Email Address
        emailAddress: null,
        errorEmailAddress: null,

        // Skype User
        skypeUser: null,
      }
    },
    watch: {
      disabledForm: function (val) {
        
        if(val === true) {
          this.buttonName = "Enviando";
        }
        else {
          this.buttonName = "Enviar";
        }

      },
      isOriginalOwner: function (val, oldVal) {
        if (!oldVal && val)
          this.errorIsOriginalOwner = null;
      },
      hasCorrectSQA: function (val, oldVal) {
        if (!oldVal && val)
          this.errorHasCorrectSQA = null;
      },
      armoryLink: function (val, oldVal) {
        if (!oldVal && val)
          this.errorArmoryLink = null;
      },
      goldAvailable: function (val, oldVal) {
        if (!oldVal && val)
          this.errorGoldAvailable = null;
      },
      titlesAndMounts: function (val, oldVal) {
        if (!oldVal && val)
          this.errorTitlesAndMounts = null;
      },
      accountAlts: function (val, oldVal) {
        if (!oldVal && val)
          this.errorAccountAlts = null;
      },
      askingPrice: function (val, oldVal) {
        if (!oldVal && val)
          this.errorAskingPrice = null;
      },
      fullName: function (val, oldVal) {
        if (!oldVal && val)
          this.errorFullName = null;
      },
      emailAddress: function (val, oldVal) {
        if (!oldVal && val)
          this.errorEmailAddress = null;
      },
    }, 
    methods: {
      checkForm: function () {

        let errors = 0;

        // OriginalOwner
        if (!this.isOriginalOwner) {
          this.errorIsOriginalOwner = errorQuestionRequired;
          errors++;
        }
        else {
          this.errorIsOriginalOwner = null;
        }

        // Has Correct SQA
        if (!this.hasCorrectSQA) {
          this.errorHasCorrectSQA = errorQuestionRequired;
          errors++;
        }
        else {
          this.errorHasCorrectSQA = null;
        }

        // Armory Link
        if (!this.armoryLink) {
          this.errorArmoryLink = errorInputRequired;
          errors++;
        }
        else {
          this.errorArmoryLink = null;
        }

        // Gold Available
        if (!this.goldAvailable) {
          this.errorGoldAvailable = errorInputRequired;
          errors++;
        }
        else {
          this.errorGoldAvailable = null;
        }

        // Titles and Mounts
        if (!this.titlesAndMounts) {
          this.errorTitlesAndMounts = errorInputRequired;
          errors++;
        }
        else {
          this.errorTitlesAndMounts = null;
        }

        // Account Alts
        if (!this.accountAlts) {
          this.errorAccountAlts = errorInputRequired;
          errors++;
        }
        else {
          this.errorAccountAlts = null;
        }

        // Asking Price
        if (!this.askingPrice) {
          this.errorAskingPrice = errorInputRequired;
          errors++;
        }
        else {
          this.errorAskingPrice = null;
        }

        // FullName
        if (!this.fullName) {
          this.errorFullName = errorInputRequired;
          errors++;
        }
        else {
          this.errorFullName = null;
        }

        // Email Address
        if (!this.emailAddress) {
          this.errorEmailAddress = errorInputRequired;
          errors++;
        }
        else if (!this.validEmail(this.emailAddress)) {
          this.errorEmailAddress = errorInvalidEmail;
          errors++;
        }
        else {
          this.errorEmailAddress = null;
        }

        if(errors) 
          return;

        this.disabledForm = true;
        this.unexpectedError = false;

        Api()
          .post('/sell-form', {
            isOriginalOwner: this.isOriginalOwner,
            hasCorrectSQA: this.hasCorrectSQA,
            armoryLink: String(this.armoryLink),
            goldAvailable: String(this.goldAvailable),
            titlesAndMounts: String(this.titlesAndMounts),
            accountAlts: String(this.accountAlts),
            askingPrice: String(this.askingPrice),
            fullName: String(this.fullName),
            emailAddress: String(this.emailAddress),
            skypeUser: (this.skypeUser === null ? "Não informado" : String(this.skypeUser)),
          })
          .then(response => {
            
            if(response.status === 201) {
              this.$router.push({ name: 'sellformSuccess' })
            }
            else {
              this.unexpectedError = true;
              this.disabledForm = false;
            }

          })
          .catch(error => {
            this.disabledForm = false;
            this.unexpectedError = true;
            
            // eslint-disable-next-line
            console.error(error);
          });
      },
      validEmail: function (email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(email);
      }
    },
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
