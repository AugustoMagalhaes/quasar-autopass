<template>
  <section
    class="pagamento-container"
    v-if="this.formaEscolhida == null"
  >
    <h1 style="margin-bottom: 20px">Selecione uma forma de pagamento</h1>
    <section class="formas-pagamento-container">
      <button
        v-for="item in formasPagamento"
        :key="item.label"
        class="botao-preco"
        :class="{ active: item.value === preco }"
        @click="escolheFormaPagamento(item.value)"
      >
        {{ item.label }}
      </button>
    </section>
  </section>
  <section v-else-if="this.formaEscolhida && !inserirOpcao">
    <h1>Opção {{ this.formaEscolhida }} Selecionado!</h1>
  </section>
  <section
    v-else-if="this.formaEscolhida && this.inserirOpcao && !this.loading"
    class="inserir-container"
  >
    <h1>Insira o {{ this.formaEscolhida }}</h1>
    <img
      src="../assets/icone-cartao-removebg-preview.png"
      alt="icone-cartao"
    />
  </section>
  <section v-else-if="this.formaEscolhida && this.inserirOpcao && this.loading">
    <h1 v-if="!this.pagamentoEfetuado">Aguarde...</h1>
    <section
      v-else-if="this.pagamentoEfetuado"
      class="pagamento-efetuado-container"
    >
      <h1 style="margin-bottom: 60px">Transação Concluída</h1>
      <h4>Aguarde impressão do Comprovante</h4>
    </section>
  </section>

  <FooterNav />
</template>

<style lang="sass">
@import '../css/PagamentoCompra'
</style>

<script>
import { defineComponent } from 'vue';
import FooterNav from 'src/components/FooterNav.vue';

export default defineComponent({
  name: 'PagamentosPage',
  components: { FooterNav },
  data() {
    return {
      formasPagamento: [
        { label: 'Débito', value: 'Débito' },
        { label: 'Crédito', value: 'Crédito' },
        { label: 'Dinheiro', value: 'Dinheiro' },
        { label: 'Pix', value: 'Pix' },
      ],
      formaEscolhida: null,
      inserirOpcao: null,
      pagamentoEfetuado: false,
      loading: false,
    };
  },
  methods: {
    escolheFormaPagamento(valor) {
      this.formaEscolhida = valor;
    },
  },
  watch: {
    formaEscolhida(novoValor) {
      setTimeout(() => {
        this.inserirOpcao = true;
      }, 2000);
    },
    inserirOpcao(novoValor) {
      console.log('mudou inserir');
      setTimeout(() => {
        this.loading = true;
      }, 1500);
    },
    loading(novoValor) {
      console.log('mudou loading');
      setTimeout(() => {
        this.pagamentoEfetuado = true;
      }, 3000);
    },
  },
});
</script>
