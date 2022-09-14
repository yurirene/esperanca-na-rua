<template>
  <v-card
    class="mx-auto overflow-hidden px-5 py-6"
  >
  <FormularioMoradorRua></FormularioMoradorRua>
  </v-card>
</template>

<script>
import FormularioMoradorRua from "../components/FormularioMoradorRua.vue";
export default {
    name: "IndexPage",
    components: { FormularioMoradorRua }
}
</script>
