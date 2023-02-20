<template>
  <div>
    <div id="preloader" v-if="show">
        <div class="spinner-border color-highlight" role="status"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    loading: function() {
      return this.$store.state.comportamentos.loading;
    },
  },
  watch: {
    loading: function(value) {
      this.show = value;
    },
  },
}
</script>
