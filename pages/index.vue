<template>
  <div>
    <div class="page-content">

      <div class="card card-style">
        <div class="content">
          <div class="d-flex">
            <div class="align-self-center">
              <img src="/assets/images/avatars/profile-img.jpg" class="me-4 rounded-circle" alt="img-profile" width="50">
            </div>
            <div class="w-100 align-self-center">
              <h1 class="mb-n2">{{ usuario.name }}</h1>
              <p class="mb-0 font-11 opacity-60">{{ usuario.email }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="row mb-n2">
          <div class="col-6 pe-2">
            <div class="card card-style mx-0 mb-3">
              <div class="p-3">
                <h4 class="font-700 text-uppercase font-12 opacity-50 mt-n2">Chamados</h4>
                <h1 class="font-700 font-34 color-blue-dark mb-0">{{ totalizadores.total }}</h1>
                <i class="fa fa-arrow-right float-end mt-n3 opacity-40"></i>
              </div>
            </div>
          </div>
          <div class="col-6 ps-2 pe-2">
            <div class="card card-style mx-0 mb-3">
              <div class="p-3">
                <h4 class="font-700 text-uppercase font-12 opacity-50 mt-n2">Atendidos</h4>
                <h1 class="font-700 font-34 color-green-dark mb-0">{{ totalizadores.atendidos }}</h1>
                <i class="fa fa-check-circle float-end mt-n3 opacity-40"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-style">
        <div class="content">
          <div class="row mb-2 mt-n2">
            <div class="col-6 text-start">
              <h4 class="font-700 text-uppercase font-12 opacity-50 mt-1">Solicitação</h4>
            </div>
          </div>
          <div class="divider mt-4 mb-3"></div>
          <div class="d-flex">
            <div class="align-self-center w-100">
              <h5>Preencha o formulário e solicite ajuda</h5>
            </div>
          </div>
        </div>
        <a href="#"
          data-menu="solicitacao-form"
          class="btn btn-full btn-sm rounded-sm bg-highlight font-700 text-uppercase mt-3"
        >
          Fazer uma Solicitação
        </a>
      </div>
    </div>
    <SolicitacaoForm/>
  </div>
</template>

<script>
import SolicitacaoForm from '~/components/SolicitacaoForm.vue';

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$loadScript("/assets/scripts/custom.js")
    .then(()=> {init_template();})
  },
  computed: {
    usuario: function() {
      return this.$store.getters['autenticacao/getUsuarioLogado'];
    },
    totalizadores: function() {
      return this.$store.getters['dados/getTotalizador'];
    }
  }
}
</script>
