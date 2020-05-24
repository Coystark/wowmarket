<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}

</script>


<style lang="scss">

  @import "./assets/styles/variables.scss";
  @import "./assets/styles/fonts.scss";
  @import "~bootstrap/scss/bootstrap";

  .container-bg {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .container-bg.background-default {
    background-image: url("./assets/bg8.jpg");
    height: 100%;

    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .container-bg.footer-always-on-bottom {
    min-height: calc(100vh - #{$footer-size});
  }

  .container-content {
    width: 100%;
    height: 100%;
    max-width: 1920px;

    margin-right: auto;
    margin-left: auto;
    
    padding-left: 25px;
    padding-right: 25px;
  }

  .page-default {
    @extend .col-12, .col-sm-12, .col-md-11, .col-lg-8 ;

    margin-bottom: 50px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 50px;
    padding-bottom: 50px;
    background: #18100ddc;

  }

  .page-paragraph-title {
    text-transform: uppercase;
    color: orange;
  }

  body {
    color: white;
    background: #18100d;
  }

  #app {
    margin-right: auto;
    margin-left: auto;
    max-width: 2300px;
    box-shadow: 0px 2px 73px 0px rgba(0,0,0,0.75);
    background: #0f0a08;
  }

  /* Forms */

  input.form-control,
  textarea.form-control,
  .input-group-prepend > .input-group-text,
  .custom-select {
    background-color: rgba(255, 255, 255, 0);
    color: rgb(219, 219, 219);
  }

  input.form-control:focus,
  textarea.form-control:focus {
    background-color: rgba(255, 255, 255, 0.100);
    color: rgb(219, 219, 219);
  }

  .custom-select > option {
    color: black;
  }

  .input-group-text.is-invalid {
    border-color: #dc3545
  }

  .form-control:disabled, 
  .form-control[readonly],
  .custom-select:disabled,
  fieldset:disabled .input-group-text
  {
    background: rgb(41, 41, 41);
  }

  /* Buttons */

  .btn,
  .btn:hover {
    &.btn-secondary {
      border: 1px solid rgb(238, 5, 5);
    }
  }

</style>
