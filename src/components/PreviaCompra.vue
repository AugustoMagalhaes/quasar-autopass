<template>
  <section class="pagamento-container">
    <h1>Insira seu {{ tipoPagamento }}</h1>
    <img
      src="../assets/icone-cartao-removebg-preview.png"
      alt="icone de cartão"
      class="cartao-icone"
    />
  </section>
  <footer class="botoes-footer-compra">
    <router-link
      to="/produtos"
      class="botao-link-nav"
    >
      <q-icon
        name="arrow_left"
        class="border-circle"
      />
      Voltar
    </router-link>
    <router-link
      to="/"
      class="botao-link-nav"
    >
      <q-icon
        name="close"
        class="border-circle"
      />
      Cancelar
    </router-link>
  </footer>
</template>

<style lang="sass">
.pagamento-container
  display: flex
  flex-flow: column nowrap
  align-items: center

.cartao-icone
  width: 25%

.botoes-footer-compra
  display: flex
  width: 75%
  justify-content: space-between
</style>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PreviaCompra',
  components: {},
  props: {
    tipoPagamento: {
      type: String,
      required: true,
    },
  },
});
</script>
