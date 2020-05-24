<template>

  <nav id="main-navbar" class="container-bg fixed-top"
    v-bind:class="{ 'main-navbar--small': isSmall }"
    >

    <div class="container-content navbar navbar-expand-sm">
      
      <a class="navbar-brand" href="#">
        <span style="font-family: Panton-Black;">WOW</span><span style="font-family: Panton-Light;">Market</span>
      </a>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContent" aria-controls="navbarToggleContent" aria-expanded="false" aria-label="Toggle navigation">
        <font-awesome-icon icon="align-justify" class="navbar-toggler-icon"/>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggleContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Vender Conta</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
  
</template>

<script>
export default {
  name: "main-navbar",
  data: function () {
    return {
      isSmall: false,
    }
  },
  methods: {
    handleScroll () {
      
      if (window.scrollY > 5 && !this.isSmall) {
        this.isSmall = true;
      }
      else if (window.scrollY == 0 && this.isSmall) {
        this.isSmall = false;
      }

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">

  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  #main-navbar {
    padding: 15px;
    
    @include media-breakpoint-down(xs) {
      padding: 10px;
    }

    /* Modificadores */

    &.main-navbar--small {
      padding: 0;
      background: #18100d;

      .container-content {
        padding-top: 1px;
        padding-bottom: 1px;
      }
    }

    /* Transitions */ 

    &,
    &.main-navbar--small,
    .nav-link,
    .nav-link:hover,
    .navbar-brand,
    .navbar-brand:hover
    {
      transition: all .3s ease;
    }

    /* Sub-classes */

    .navbar-nav > .nav-item > .nav-link,
    .navbar-toggler-icon,
    .navbar-brand {
      color: white;
    }

    .nav-link:hover {
      @include media-breakpoint-up(sm) {
        color: orange!important;
        box-shadow:inset 0px 2px 0px 0px orange;
      }
    }

    .navbar-brand {
      user-select: none;
    }

    .navbar-brand:hover {
      color: orange;
    }

    // Remover o laranja ao clicar no botão
    button:focus {
      outline: 0;
    }

  }


</style>
