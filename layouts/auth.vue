<template>
  <div>
    <Loading/>
    <Header :card-show="false"/>
    <Alerta/>
    <Nuxt />
  </div>
</template>
<script>

import Loading from '~/components/Loading.vue';
import Header from '~/components/Header.vue';
import Alerta from '~/components/Alerta.vue';

export default {
  name: "auth",
  components: {
    Loading,
    Header,
    Alerta
},
}
</script>
