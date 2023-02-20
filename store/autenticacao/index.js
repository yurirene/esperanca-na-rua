export const state = () => ({
  autenticado: false,
  dadosAutenticacao: {
    inicio: null,
    limite: null
  },
  usuario: {}
});

export const getters = {
  getUsuarioLogado(state) {
    return state.usuario;
  }
}

export const actions = {

  registrarUsuarioLogado({commit, getters}, payload) {
    this.commit('autenticacao/usuarioLogado', payload);
    this.dispatch('dados/carregarDados');

  },
  logout() {
    this.commit('autenticacao/deslogar');
  }
}

export const mutations = {
  autenticar(state) {
    state.autenticado = true;
    state.dadosAutenticacao.inicio = new Date();
    state.dadosAutenticacao.limite = (new Date()).setHours((new Date()).getHours() + 1); // 1h de validade
  },

  deslogar(state) {
    state.autenticado = false;
    state.dadosAutenticacao.inicio = null;
    state.dadosAutenticacao.limite = null;
  },

  usuarioLogado(state, payload) {
    state.usuario = {};
    state.usuario.id = payload.id;
    state.usuario.name = payload.name;
    state.usuario.email = payload.email;
    state.usuario.key = payload.key;
    state.usuario.cadastro_em = payload.cadastro_em;
  }
}
