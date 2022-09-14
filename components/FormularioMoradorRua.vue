<template>
    <div>
        <h2>Novo Atendimento</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-radio-group v-model="deseja_ajuda" row>
                <template v-slot:label>
                    <div>Deseja Ajuda</div>
                </template>
                <v-radio
                    label="Sim"
                    value="S"
                ></v-radio>
                <v-radio
                    label="Não"
                    value="N"
                ></v-radio>
            </v-radio-group>
            
            <v-text-field 
                v-model="nome" 
                :rules="[ v => !!v || 'Nome é Obrigatório']" 
                label="Nome" 
                required
            >
            </v-text-field>

            <v-select 
                v-model="genero" 
                :items="generos" 
                :rules="[v => !!v || 'Gênero é Obrigatório']" 
                label="Gênero" 
                required
            >
            </v-select>
            
            <v-select 
                v-model="tipo_destino" 
                :items="tipos_destinos" 
                :rules="[v => !!v || 'Tipo Destino é Obrigatório']" 
                label="Tipo Destino" 
                required
            >
            </v-select>

            
            <v-radio-group v-model="condicao_fisica.limpeza" row>
                <template v-slot:label>
                    <div>Limpeza</div>
                </template>
                <v-radio
                    label="Sim"
                    value="S"
                ></v-radio>
                <v-radio
                    label="Não"
                    value="N"
                ></v-radio>
            </v-radio-group>
            
            <v-radio-group v-model="condicao_fisica.sobriedade" row>
                <template v-slot:label>
                    <div>Sobriedade</div>
                </template>
                <v-radio
                    label="Sim"
                    value="S"
                ></v-radio>
                <v-radio
                    label="Não"
                    value="N"
                ></v-radio>
            </v-radio-group>
            <v-text-field 
                v-model="latitude" 
                label="Latitude" 
                :rules="[ v => !!v || 'A Latitude é obrigatória']"
                required
                readonly
                solo
            >
            </v-text-field>
            <v-text-field 
                v-model="longitude"  
                label="Longitude" 
                :rules="[ v => !!v || 'A Longitude é obrigatória']" 
                required
                readonly
                solo
            >
            </v-text-field>
            

            <v-btn
                color="primary"
                class="mr-4"
                @click="buscarCoordenadas"
            >
                Buscar Coordenadas
            </v-btn>

            <v-btn
                :disabled="enviando"
                color="success"
                class="mr-4"
                @click="enviar"
            >
            <v-progress-circular
                :width="4"
                color="success"
                indeterminate
                v-show="enviando"
            ></v-progress-circular>
                Enviar
            </v-btn>
        </v-form>
        
        <v-snackbar
            timeout="2000"
            v-model="alert.show"
            :value="true"
            :color="alert.color"
            absolute
            rounded="pill"
            top
            >
            {{alert.text}}
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        nome: '',
        generos: [
            'M',
            'F'
        ],
        genero: null,
        tipos_destinos: [],
        tipo_destino: null,
        deseja_ajuda: 'S',
        condicao_fisica: {
            limpeza: 'N',
            sobriedade: 'N'
        },
        latitude: null,
        longitude: null,
        enviando: false,
        alert: {
            color: 'success',
            text: '',
            show: false
        }

    }),
    mounted: async function() {
        await this.buscarTipoAtendimentos();
        console.log(this.tipos_destinos);
    },
    methods: {
        enviar() {
            if(!this.$refs.form.validate()) {
                return;
            }
            this.enviando = true;
            let form = new FormData();
            form.append('deseja_ajuda', this.deseja_ajuda);
            form.append('nome', this.nome);
            form.append('genero', this.genero);
            form.append('tipo_destino', this.tipo_destino);
            form.append('condicao_fisica[limpeza]', this.condicao_fisica.limpeza);
            form.append('condicao_fisica[sobriedade]', this.condicao_fisica.sobriedade);
            form.append('latitude', this.latitude);
            form.append('longitude', this.longitude);

            this.$axios.post('solicitacao', form)
            .then((response) => {
                this.enviando = false;
                if (response.status == 201) {
                    this.alert = {
                        color: 'success',
                        text: 'Solicitação Enviada com Sucesso!',
                        show: true
                    }
                    this.$refs.form.reset();
                } else {
                    this.alert = {
                        color: 'red',
                        text: 'Erro ao realizar solicitação!',
                        show: true
                    }
                }
            }).catch((error) => {
                this.enviando = false;
                this.alert = {
                    color: 'red',
                    text: 'Ocorreu um erro!',
                    show: true
                }
            });
        },
        async buscarTipoAtendimentos() {
            await this.$axios.get('tipos-atendimentos').then((response) => {
                for(var i in response.data) {
                    this.tipos_destinos.push(response.data[i]);
                }
            });
        },
        buscarCoordenadas() {
            const success = (position) => {
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;
                this.latitude = latitude;
                this.longitude = longitude;
            };

            const error = (err) => {
                console.log(error)
            };

            navigator.geolocation.getCurrentPosition(success, error);
        }
    },
}
</script>
