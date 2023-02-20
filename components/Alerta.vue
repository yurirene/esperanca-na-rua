<template>
  <div>
    <div class="header-clear-medium mb-0">
      <div class="ms-3 me-3 alert alert-small rounded-s shadow-bg shadow-bg-l bg-green-dark"
        :style="`${alerta.tipo == 'sucesso' ? '' : 'display:none' }`"
      >
        <span><i class="fa fa-check-circle font-18"></i></span>
        <strong>{{ alerta.mensagem }}!</strong>
        <button type="button" class="close color-white opacity-60 font-16" @click="fechar" aria-label="Close">&times;</button>
      </div>

      <div class="ms-3 me-3 alert alert-small rounded-s shadow-bg shadow-bg-l bg-red-dark"
        :style="`${alerta.tipo == 'erro' ? '' : 'display:none'}`"
      >
        <span><i class="fa fa-times-circle font-18"></i></span>
        <strong>{{ alerta.mensagem }}!</strong>
        <button type="button" class="close color-white opacity-60 font-16" @click="fechar" aria-label="Close">&times;</button>
      </div>

      <div class="ms-3 me-3 alert alert-small rounded-s shadow-bg shadow-bg-l bg-yellow-dark"
        :style="`${alerta.tipo == 'atencao' ? '' : 'display:none'}`"
      >
        <span><i class="fa fa-exclamation-triangle font-18"></i></span>
        <strong>{{ alerta.mensagem }}!</strong>
        <button type="button" class="close color-white opacity-60 font-16" @click="fechar" aria-label="Close">&times;</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alerta: {
        tipo: '',
        mensagem: ''
      }
    }
  },
  computed: {
    alert: function() {
      return this.$store.state.comportamentos.alerta;
    },
  },
  watch: {
    alert: function() {
      this.alerta = this.$store.getters['comportamentos/getAlertaDados'];
    },
  },
  methods: {
    fechar: function() {
      this.$store.commit('comportamentos/fecharAlerta');
    }
  }
}
</script>
<style>
.alert {
  position: fixed !important;
  top: 60px;
  z-index: 1000;
  width: 92%;
}
</style>
