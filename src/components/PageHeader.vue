<template>

  <div class="page-header">
    <div class="page-header__sub-title">
      <hr><span>{{ subTitle }}</span><hr>
    </div>
		<div class="page-header__title">
      {{ title }}
    </div>
	</div>

</template>

<script>
export default {
  name: 'page-header',
	props: {
		title: String,
		subTitle: String
	}
}
</script>

<style scoped lang="scss">

	@import "~bootstrap/scss/functions";
	@import "~bootstrap/scss/variables";
	@import "~bootstrap/scss/mixins";

	.page-header {
    text-align: center;
    padding-bottom: 30px;

    /* Sub-Title */
    & &__sub-title {
      display: inline-flex;
      align-items: center;
    }

    & &__sub-title hr {
      background: white;
      height: 2px;
      width: 50px;

      @media (max-width: 400.00px) {
         width: 30px;
      }
    }

    & &__sub-title span {    
      font-weight: lighter;
      text-transform: uppercase;
      padding-left: 15px;
      padding-right: 15px;
    }

    /* Title */
    & &__title {
      text-transform: uppercase;
      margin-top: -2px;
      font-weight: bolder;
      font-size: 170%;

      @include media-breakpoint-down(sm) { 
        font-size: 150%;
        padding-top: 10px;
      }
    }


  }

</style>
