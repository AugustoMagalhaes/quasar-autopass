<template>
  <PreviaCompra
    v-if="!pagamentoInserido"
    :tipoPagamento="parseiaRotaPagamento()"
  ></PreviaCompra>
</template>

<script>
import PreviaCompra from 'src/components/PreviaCompra.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CompraPage',
  components: { PreviaCompra },
  setup() {
    const pagamentoInserido = ref(false);

    setTimeout(() => {
      pagamentoInserido.value = true;
    }, 2000);

    return {
      pagamentoInserido,
    };
  },
  methods: {
    parseiaRotaPagamento() {
      const rotas = { 'cartao-top': 'Cartão TOP', 'bilhete-unico': 'Bilhete Único' };
      const tipoPagamento = this.$route.params.tipoPagamento;
      return rotas[tipoPagamento] || '';
    },
  },
});
</script>
