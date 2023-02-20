<template>
  <div>
    <div class="page-content">

      <div class="card card-style">
        <div class="d-flex content">
          <div class="flex-grow-1">
            <div>
              <h1 class="font-700 mb-1">{{ usuario.name }}</h1>
              <p class="mb-0 font-14 opacity-80">{{ usuario.email }}</p>
              <p class="mb-0 font-11 opacity-60">Cadastro em {{ usuario.cadastro_em }}</p>
            </div>
          </div>
          <div>
            <img src="/assets/images/avatars/profile-img.jpg"
              data-src="/assets/images/avatars/profile-img.jpg" width="80" class="rounded-circle mt- shadow-xl preload-img">
          </div>
        </div>
      </div>

      <div class="card card-style">
        <div class="content mb-0">
          <h2>Informações Básicas</h2>
          <p class="mb-4">
            Essas são as informações que você registrou.
          </p>
          <div class="input-style input-style-always-active has-borders has-icon validate-field">
            <i class="fa fa-user font-12"></i>
            <input type="name" class="form-control validate-name" id="f1" v-model="nome" placeholder="Jackson Doe">
            <label for="f1" class="color-blue-dark font-13">Nome</label>
            <i class="fa fa-times disabled invalid color-red-dark"></i>
            <i class="fa fa-check disabled valid color-green-dark"></i>
            <em>(obrigatório)</em>
          </div>
          <button
            class="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900"
            :disabled="bloqueioBotaoNome"
            @click="atualizarNome"
          >
            Atualizar Dados
          </button>
        </div>
      </div>

      <div class="card card-style">
        <div class="content mb-0">
          <h2 class="mb-0">Segurança da Conta</h2>
          <p class="mb-4">
            Para alterar a sua senha preencha as informações abaixo.
          </p>
          <div class="input-style input-style-always-active has-borders no-icon validate-field">
            <input type="password" class="form-control validate-text" id="f3c" v-model="senhaAntiga" placeholder="*****">
            <label for="f3c" class="color-blue-dark font-12">Senha antiga</label>
            <i class="fa fa-times disabled invalid color-red-dark"></i>
            <i class="fa fa-check disabled valid color-green-dark"></i>
            <em>(obrigatório)</em>
          </div>
          <div class="input-style input-style-always-active has-borders no-icon validate-field">
            <input type="password" class="form-control validate-text" id="f3a" v-model="novaSenha"  placeholder="*****">
            <label for="f3a" class="color-blue-dark font-12">Nova senha</label>
            <i class="fa fa-times disabled invalid color-red-dark"></i>
            <i class="fa fa-check disabled valid color-green-dark"></i>
            <em>(obrigatório)</em>
          </div>
          <div class="input-style input-style-always-active has-borders no-icon validate-field">
            <input type="password" class="form-control validate-text" id="f3b" v-model="confirmacaoSenha"  placeholder="*****">
            <label for="f3b" class="color-blue-dark font-12">Confirme a nova senha</label>
            <i class="fa fa-times disabled invalid color-red-dark"></i>
            <i class="fa fa-check disabled valid color-green-dark"></i>
            <em>(obrigatório)</em>
          </div>
          <small class="text-danger" v-show="erroSenha">As senhas devem ser iguais</small>
          <button
            class="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900"
            @click="atualizarSenha"
            :disabled="bloqueioBotaoSenha"
          >
            Atualizar Senha
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      nome: '',
      senhaAntiga: '',
      novaSenha: '',
      confirmacaoSenha: '',
      erroSenha: false
    }
  },
  computed: {
    usuario: function() {
      let dados = this.$store.getters['autenticacao/getUsuarioLogado'];
      this.nome = dados.name;
      return dados;
    },
    bloqueioBotaoNome: function() {
      return this.nome.length == 0 ? true: false;
    },

    bloqueioBotaoSenha: function() {
      if (
        this.novaSenha.length == 0
        || this.senhaAntiga.length == 0
        || this.confirmacaoSenha.length == 0
      ) {
        return true;
      }
      if (this.novaSenha == this.confirmacaoSenha) {
        this.erroSenha = false;
        return false;
      }
      this.erroSenha = true;
      return true;
    }
  },
  watch: {
    usuario: function(value) {
      console.log(value);
      this.nome = value.name;
    }
  },
  mounted() {
    this.$loadScript("/assets/scripts/custom.js")
    .then(()=> {init_template();})
  },
  methods: {
    async atualizarNome() {
      this.$store.commit('comportamentos/ativarLoading');
      await this.$axios.$post('atualizar-usuario', {
        user_id: this.$store.state.autenticacao.usuario.id,
        key: this.$store.state.autenticacao.usuario.key,
        name: this.nome
      })
      .then((response) => {
        this.$store.commit('comportamentos/pararLoading');
        this.$store.dispatch('autenticacao/registrarUsuarioLogado', response.data);
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'sucesso',
          mensagem: "Registro atualizado com sucesso!"
        });
      })
      .catch((error) => {
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'erro',
          mensagem: `${error.response.status} - ${error.response.data.mensagem}`
        });
      });
    },

    async atualizarSenha() {
      this.$store.commit('comportamentos/ativarLoading');
      await this.$axios.$post('atualizar-usuario', {
        user_id: this.$store.state.autenticacao.usuario.id,
        key: this.$store.state.autenticacao.usuario.key,
        newPassword: this.novaSenha,
        oldPassword: this.senhaAntiga
      })
      .then((response) => {
        this.$store.commit('comportamentos/pararLoading');
        this.$store.dispatch('autenticacao/registrarUsuarioLogado', response.data);
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'sucesso',
          mensagem: "Senha atualizada com sucesso!"
        });
      })
      .catch((error) => {
        this.$store.commit('comportamentos/pararLoading');
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'erro',
          mensagem: `${error.response.status} - ${error.response.data.mensagem}`
        });
      })
      .finally(() => {
        this.novaSenha = '';
        this.senhaAntiga = '';
        this.confirmacaoSenha = '';
      });
    },
  }
}
</script>
