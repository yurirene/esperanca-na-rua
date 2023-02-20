<template>
  <div>
    <div id="solicitacao-form" class="menu menu-box-bottom menu-box-detached rounded-m">
      <div class="content">
        <div class="d-flex">
          <div>
            <h1 class="opacity-20">Passo 1/4</h1>
          </div>
          <div class="ms-auto">
            <h1>Identificação</h1>
          </div>
        </div>
        <p>
          Preencha o máximo de dados que puder
        </p>
        <div class="input-style has-borders no-icon validate-field mb-4 input-style-active">
          <input type="nome" class="form-control validate-name" id="nome" placeholder="Nome">
          <label for="nome" class="color-blue-dark font-600 text-uppercase">Nome</label>
          <i class="fa fa-times disabled invalid color-red-dark"></i>
          <i class="fa fa-check disabled valid color-green-dark"></i>
          <em>(Obrigatório)</em>
        </div>
        <div class="input-style has-borders no-icon mb-4">
					<label for="faixa_etaria" class="color-highlight disabled">{{ faixaEtaria.titulo }}</label>
          <em>(Obrigatório)</em>
					<select id="faixa_etaria">
						<option value="" disabled selected>Selecione uma Faixa Etária</option>
						<option :value="valor" v-for="(valor, key) in faixaEtaria.valores" :key="'faixaetaria'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
					<em></em>
				</div>
        <div class="input-style has-borders no-icon mb-4">
					<label for="genero" class="color-highlight disabled">{{ genero.titulo }}</label>
          <em>(Obrigatório)</em>
					<select id="genero">
						<option value="" disabled selected>Selecione o {{genero.titulo}}</option>
						<option :value="valor" v-for="(valor, key) in genero.valores" :key="'genero'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
					<em></em>
				</div>

        <a href="#" data-menu="solicitacao-form-2"
          class="btn btn-full btn-m rounded-m bg-blue-dark font-700 text-uppercase mb-4 mt-4">
          Próximo
        </a>
      </div>
    </div>

    <div id="solicitacao-form-2" class="menu menu-box-bottom menu-box-detached rounded-m">
      <div class="content">
        <div class="d-flex">
          <div>
            <h1 class="opacity-20">Passo 2/4</h1>
          </div>
          <div class="ms-auto">
            <h1>Situação</h1>
          </div>
        </div>
        <p>
          Preencha o máximo de dados que puder
        </p>

        <div class="input-style has-borders no-icon mb-4">
					<label for="tempo_rua" class="color-highlight disabled">{{ tempoRua.titulo }}</label>
          <em>(Opcional)</em>
					<select id="tempo_rua">
						<option value="" disabled selected>Selecione o {{ tempoRua.titulo }}</option>
						<option :value="valor" v-for="(valor, key) in tempoRua.valores" :key="'temporua'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
				</div>

        <div class="input-style has-borders no-icon mb-4">
					<label for="sobriedade" class="color-highlight disabled">{{ sobriedade.titulo }}</label>
          <em>(Opcional)</em>
					<select id="sobriedade">
						<option value="" disabled selected>Informe a {{ sobriedade.titulo }}</option>
						<option :value="valor" v-for="(valor, key) in sobriedade.valores" :key="'sobriedade'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
				</div>

        <div class="input-style has-borders no-icon mb-4">
					<label for="limpeza" class="color-highlight disabled">{{ limpeza.titulo }}</label>
          <em>(Opcional)</em>
					<select id="limpeza">
						<option value="" disabled selected>Informe o estado de {{ limpeza.titulo }}</option>
						<option :value="valor" v-for="(valor, key) in limpeza.valores" :key="'limpeza'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
				</div>

        <div class="input-style has-borders no-icon mb-4">
					<label for="passagem_policia" class="color-highlight disabled">{{ passagemPolicia.titulo }}</label>
          <em>(Opcional)</em>
					<select id="passagem_policia">
						<option value="" disabled selected>Informe se tem {{ passagemPolicia.titulo }}</option>
						<option :value="valor" v-for="(valor, key) in passagemPolicia.valores" :key="'passagempolicia'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
				</div>
        <a href="#" data-menu="solicitacao-form-3"
          class="btn btn-full btn-m rounded-m bg-blue-dark font-700 text-uppercase mb-2 mt-4">
          Próximo
        </a>
        <a href="#" data-menu="solicitacao-form"
          class="btn btn-full btn-m rounded-m bg-secondary font-700 text-uppercase mb-4">
          Voltar
        </a>
      </div>
    </div>

    <div id="solicitacao-form-3" class="menu menu-box-bottom menu-box-detached rounded-m">
      <div class="content">
        <div class="d-flex">
          <div>
            <h1 class="opacity-20">Passo 3/4</h1>
          </div>
          <div class="ms-auto">
            <h1>Tipo de Ajuda</h1>
          </div>
        </div>
        <p>
          Preencha o máximo de dados possível
        </p>
        <div class="input-style has-borders no-icon mb-4">
					<label for="tipo_destino" class="color-highlight disabled">Tipo de Destino</label>
          <em>(Opcional)</em>
					<select id="tipo_destino">
						<option value="" disabled selected>Selecione o Tipo de Destino</option>
						<option :value="key" v-for="(valor, key) in tiposDestino" :key="'tipodestino'+key">{{ valor }}</option>
					</select>
					<span><i class="fa fa-chevron-down"></i></span>
					<i class="fa fa-check disabled valid color-green-dark"></i>
					<i class="fa fa-check disabled invalid color-red-dark"></i>
				</div>

        <a href="#" data-menu="solicitacao-form-4"
          class="btn btn-full btn-m rounded-m bg-blue-dark font-700 text-uppercase mb-2 mt-4">
          Próximo
        </a>
        <a href="#" data-menu="solicitacao-form-2"
          class="btn btn-full btn-m rounded-m bg-secondary font-700 text-uppercase mb-4">
          Voltar
        </a>
      </div>
    </div>

    <div id="solicitacao-form-4" class="menu menu-box-bottom menu-box-detached rounded-m">
      <div class="content text-center">
        <div class="d-flex">
          <div>
            <h1 class="opacity-20">Passo 4/4</h1>
          </div>
          <div class="ms-auto">
            <h1>Localização</h1>
          </div>
        </div>
        <p>
          Preencha o máximo de dados possível
        </p>

        <a href="#"
          class="get-location btn btn-full btn-m bg-red-dark rounded-sm text-uppercase shadow-l font-900">
          Buscar Coordenadas
        </a>
        <p class="location-coordinates mb-5"></p>
        <input type="hidden" id="latitude">
        <input type="hidden" id="longitude">
        <a href="#"
          class="close-menu btn btn-full btn-m rounded-m bg-green-dark font-700 text-uppercase mb-2"
          @click="solicitar"
        >
          Finalizar
        </a>
        <a href="#" data-menu="solicitacao-form-3"
          class="btn btn-full btn-m rounded-m bg-secondary font-700 text-uppercase mb-4">
          Voltar
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      solicitacao: {
        nome: null,
        faixaEtaria: null,
        genero: null,
        tempoRua: null,
        sobriedade: null,
        limpeza: null,
        passagemPolicia: null,
        tipoDestino: null,
        latitude:null,
        longitude:null,
      },
      faixaEtaria: null,
      genero: null,
      tempoRua: null,
      sobriedade: null,
      limpeza: null,
      passagemPolicia: null,
      tiposDestino: null,
    }
  },
  created() {
    let dadosForm = this.$store.getters['dados/getFormulario'];
    let dadosDestino = this.$store.getters['dados/getTipoDestino'];
    this.faixaEtaria = dadosForm.faixa_etaria;
    this.genero = dadosForm.genero;
    this.tempoRua = dadosForm.tempo_rua;
    this.sobriedade = dadosForm.sobriedade;
    this.limpeza = dadosForm.limpeza;
    this.passagemPolicia = dadosForm.passagem_policia
    this.tiposDestino = dadosDestino;
  },
  methods: {
    async solicitar() {
      this.$store.commit('comportamentos/ativarLoading');
      this.prepararSolicitacao();
      this.$axios.$post('/solicitacao', this.solicitacao)
      .then((response) => {
        console.log(response);
        this.$store.commit('comportamentos/pararLoading')
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'sucesso',
          mensagem: `Solicitação realizada com sucesso!`
        });
      })
      .catch((error) => {
        this.$store.commit('comportamentos/pararLoading')
        this.$store.commit('comportamentos/mostrarAlerta', {
          tipo: 'erro',
          mensagem: `${error.response.status} - ${error.response.data.mensagem}`
        });
      })
    },
    limpar() {
      this.solicitacao = {
        nome: null,
        faixaEtaria: null,
        genero: null,
        tempoRua: null,
        sobriedade: null,
        limpeza: null,
        passagemPolicia: null,
        tipoDestino: null,
        latitude:null,
        longitude:null,
      }
    },
    prepararSolicitacao: function() {

      this.solicitacao.user_id = this.$store.state.autenticacao.usuario.id
      this.solicitacao.key = this.$store.state.autenticacao.usuario.key
      this.solicitacao.latitude = document.querySelector('#latitude').value;
      this.solicitacao.longitude = document.querySelector('#longitude').value;
      this.solicitacao.tempoRua = document.querySelector('#tempo_rua').value;
      this.solicitacao.faixaEtaria = document.querySelector('#faixa_etaria').value;
      this.solicitacao.genero = document.querySelector('#genero').value;
      this.solicitacao.sobriedade = document.querySelector('#sobriedade').value;
      this.solicitacao.limpeza = document.querySelector('#limpeza').value;
      this.solicitacao.tipoDestino = document.querySelector('#tipo_destino').value;
      this.solicitacao.passagemPolicia = document.querySelector('#passagem_policia').value;
      this.solicitacao.nome = document.querySelector('#nome').value;

    }
  }
}
</script>
