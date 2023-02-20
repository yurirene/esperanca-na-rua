<template>
  <div>
    <Alerta/>
    <Loading/>
    <Header/>
    <Menu/>
    <Nuxt />
  </div>
</template>
<script>

import Loading from '~/components/Loading.vue';
import Header from '~/components/Header.vue';
import Menu from '~/components/Menu.vue';
import Alerta from '~/components/Alerta.vue';

export default {
  components: {
    Loading,
    Header,
    Menu,
    Alerta
},
  middleware: 'auth-app',
}
</script>
