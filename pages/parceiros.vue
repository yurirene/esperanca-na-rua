<template>
  <div>
    <div class="page-content">
      <div class="card card-style">
        <div class="content mb-2">
          <h2>Parceiros Disponíveis</h2>
          <p>
            Estes são os parceiros disponíveis para fornecer ajuda.
          </p>
          <div class="list-group list-custom-small list-icon-0">
            <a href="#" v-for="(parceiro, key) in parceiros" :key="key" >
              <i class="fas font-14 fa-people-carry rounded-s color-facebook"></i>
              <span>{{ parceiro.nome }}</span>
              <span class="badge text-uppercase bg-green-dark">
                {{ `${parceiro.quantidade_vagas} vaga${parceiro.quantidade_vagas != 1 ? 's' : '' }` }}
              </span>
              <i class="fa fa-chevron-right disabled"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {
    this.$loadScript("/assets/scripts/custom.js")
    .then(()=> {init_template();})
  },
  computed: {
    parceiros: function() {
      return this.$store.getters['dados/getParceiros'];
    }
  }
}
</script>
