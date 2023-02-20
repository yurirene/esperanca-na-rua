<template>
  <div>
    <div class="page-content header-clear-medium mt-5">

      <div class="card card-style" style="height: 400px;">
        <form>
          <div class="content mt-4 mb-1">
            <h1 class="text-center font-800 font-40 pt-2 mb-1">Login</h1>
            <p class="color-highlight text-center font-12 mb-3">Entre com suas credenciais</p>

            <div class="input-style no-borders has-icon validate-field mb-4">
              <i class="fa fa-user"></i>
              <input type="email" class="form-control validate-email" v-model="email" id="form1a" placeholder="E-mail">
              <label for="form1a" class="color-blue-dark font-10 mt-1">E-mail</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(Obrigatório)</em>
            </div>

            <div class="input-style no-borders has-icon validate-field mb-4">
              <i class="fa fa-lock"></i>
              <input type="password" class="form-control validate-password" v-model="password" id="form3a" placeholder="Senha">
              <label for="form3a" class="color-blue-dark font-10 mt-1">Senha</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(Obrigatório)</em>
            </div>

            <a href="#"
              class="btn btn-m rounded-sm mt-4 mb-4 btn-full bg-green-dark text-uppercase font-900"
              @click="login()"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  layout: 'auth',
  mounted() {
    this.$loadScript("/assets/scripts/custom.js")
    .then(()=> init_template())
    this.$store.commit('autenticacao/deslogar');
  },
  data() {
    return {
      password: null,
      email: null,
    }
  },
  methods: {
    async login() {
      this.$store.commit('comportamentos/ativarLoading');
      this.loading = true
      await this.$axios.$post('/login', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        this.$store.commit('autenticacao/autenticar');
        this.$store.dispatch('autenticacao/registrarUsuarioLogado', response.data);
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'sucesso',
          mensagem: `Login realizado com sucesso!`
        });
        this.$store.commit('comportamentos/pararLoading')
        setTimeout(() => {
          this.$router.push('/')
        }, 1500)
      })
      .catch((error) => {
        this.$store.commit('comportamentos/pararLoading')
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'erro',
          mensagem: `${error.response.status} - ${error.response.data.mensagem}`
        });
      });
    },
  }
}
</script>
