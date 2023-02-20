export const state = () => ({
  loading: false,
  alerta: false,
  alertaDados: {
    tipo: '',
    mensagem: ''
  },
})

export const getters = {
  getAlertaDados(state) {
    return state.alertaDados;
  }
}

export const mutations = {
  pararLoading(state) {
    state.loading = false;
  },

  ativarLoading(state) {
    state.loading = true;
  },

  mostrarAlerta(state, payload) {
    state.alerta = true;
    state.alertaDados.mensagem = payload.mensagem;
    state.alertaDados.tipo = payload.tipo;
    setTimeout(() => {this.commit('comportamentos/fecharAlerta')}, 1400);
  },
  fecharAlerta(state) {
    state.alerta = false;
    state.alertaDados.mensagem = '';
    state.alertaDados.tipo = '';
  },
}
