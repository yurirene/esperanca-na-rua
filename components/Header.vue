<template>
  <div>

    <div class="header header-fixed header-logo-center">
        <a href="#" class="header-title">Esperança na Rua</a>
    </div>
    <div class="card card-style preload-img bg-0-index" data-card-height="130" style="background-image: url(/assets/images/18w.jpg);" v-if="cardShow">
        <div class="card-center ms-3">
          <h1 class="color-white mb-0">App</h1>
          <p class="color-white mt-n1 mb-0">App de mapeamento de ajuda</p>
        </div>
        <div class="card-center me-3">
          <a href="#"
            data-back-button class="btn btn-m float-end rounded-xl shadow-xl text-uppercase font-800 bg-highlight"
            @click="logout"
          >
            Sair <em class="fas fa-sign-out ms-1"></em>
          </a>
        </div>
        <div class="card-overlay bg-black opacity-80"></div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    cardShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('autenticacao/logout');
      this.$router.push('/login');
    }
  }

}
</script>
<style>

</style>
