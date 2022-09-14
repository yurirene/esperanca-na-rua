<template>
  <v-app dark>
    <v-main>

      <v-app-bar
      elevation="4"
      >
      <v-toolbar-title>Esperança na Rua</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <Nuxt />
    </v-container>
    <v-bottom-navigation v-model="value" fixed>
      <v-btn value="recent">
        <span>Atendimento</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Locais</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-main>
</v-app>
</template>
<script>
  export default {
    name: 'DefaultLayout',
    data: () => ({ value: 'recent' }),
  }
</script>
