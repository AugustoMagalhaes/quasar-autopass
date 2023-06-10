<template>
  <section class="index-container">
    <h1 class="main-title">Boas-Vindas</h1>
    <h2 class="secondary-title">
      Toque para Iniciar
      <q-icon
        name="arrow_forward_ios"
        class="arrow-icon border-circle"
      ></q-icon>
    </h2>
  </section>
  <footer class="footer">Faça sua recarga pelo App</footer>
</template>

<style lang="sass">
@import "../css/IndexPage"
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
