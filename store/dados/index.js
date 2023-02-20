export const state = () => ({
  totalizador: {},
  formulario: {},
  tipoDestino: {},
  parceiros: []
})

export const getters = {
  getFormulario(state) {
    return state.formulario;
  },
  getTipoDestino(state) {
    return state.tipoDestino;
  },
  getTotalizador(state) {
    return state.totalizador;
  },
  getParceiros(state) {
    return state.parceiros;
  }
}
export const actions = {
  async carregarDados({rootState})  {
    let usuario = rootState.autenticacao.usuario;
    await this.$axios.$post('carregar-dados', {
      key: usuario.key,
      user_id: usuario.id
    })
    .then((response) => {
      this.commit('dados/registrarDados', response.data);
    })
    .catch((response) => {
      console.log(response);
    })
  }
}

export const mutations = {
  registrarDados(state, payload) {
    state.totalizador.total = payload.totalizador.dados.total;
    state.totalizador.atendidos = payload.totalizador.dados.encaminhados;
    state.totalizador.ultimaAtualizacao = payload.totalizador.ultimaAtualizacao;
    state.parceiros = payload.parceiros;
    state.formulario = payload.dadosFormulario;
    state.tipoDestino = payload.tipoDestino;
  },

}
