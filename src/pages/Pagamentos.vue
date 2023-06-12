<template>
  <section
    class="pagamentos-container"
    v-if="!isNaN(this.preco)"
  >
    <h1 style="margin-bottom: 20px">Selecione um Valor</h1>
    <section class="precos-container">
      <button
        v-for="item in precos"
        :key="item.label"
        class="botao-preco"
        :class="{ active: item.value === preco }"
        @click="updatePrice(item.value)"
      >
        {{ item.label }}
      </button>
    </section>
  </section>
  <section
    v-else
    class=""
  >
    <section class="custom-container">
      <section class="valor-container">
        <h2>Digite o Valor:</h2>
        <div class="display-valor">
          R$ {{ this.precoDisplay === 'custom' ? 0 : this.precoDisplay }}
        </div>
        <button
          @click="confirmaPreco()"
          class="confirmar"
        >
          Confirmar
        </button>
      </section>
      <section class="inputs-container">
        <button
          class="input-valor"
          @click="addToDisplay(1)"
        >
          1
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(2)"
        >
          2
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(3)"
        >
          3
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(4)"
        >
          4
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(5)"
        >
          5
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(6)"
        >
          6
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(7)"
        >
          7
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(8)"
        >
          8
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(9)"
        >
          9
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(0)"
        >
          0
        </button>
        <button
          class="input-valor"
          @click="addToDisplay(',')"
        >
          ,
        </button>
        <button
          class="input-valor"
          @click="resetDisplay()"
        >
          Limpar
        </button>
      </section>
    </section>
  </section>
  <FooterNav />
</template>

<style lang="sass">
@import '../css/Pagamentos'
</style>

<script>
import { defineComponent, ref } from 'vue';
import FooterNav from 'src/components/FooterNav.vue';

export default defineComponent({
  name: 'PagamentosPage',
  components: { FooterNav },
  data() {
    return {
      preco: null,
      precoDisplay: '0',
      hasDecimal: false,
      customPrice: '',
      precos: [
        { label: 'R$10', value: 10 },
        { label: 'R$40', value: 40 },
        { label: 'R$100', value: 100 },
        { label: 'Outro', value: 'custom' },
        { label: 'Mensal', value: 220 },
        { label: 'Estudante', value: 110 },
      ],
    };
  },
  methods: {
    updatePrice(value) {
      this.preco = value;
    },
    updateCustomPrice() {
      this.preco = parseInt(this.customPrice) || null;
    },
    confirmCustomPrice() {
      this.customPrice = '';
    },
    addToDisplay(value) {
      if (this.precoDisplay === '0' && value !== ',') {
        this.precoDisplay = value.toString();
      } else if (value === ',') {
        if (this.precoDisplay.indexOf('.') === -1 && !this.hasDecimal)
          this.precoDisplay += '.';

        this.hasDecimal = true;
      } else {
        const casasDecimais =
          this.precoDisplay.includes('.') && this.precoDisplay.split('.')[1];
        console.log('OIA AS CASAS DCIMAIS: ', casasDecimais);
        if (casasDecimais) {
          this.precoDisplay =
            casasDecimais.length < 2
              ? this.precoDisplay + value.toString()
              : this.precoDisplay.split('.')[0] +
                value.toString() +
                '.' +
                this.precoDisplay.split('.')[1];
        } else {
          this.precoDisplay += value.toString();
        }
      }
    },
    confirmaPreco() {
      this.preco = this.precoDisplay;
    },
    resetDisplay() {
      this.precoDisplay = '0';
    },
  },
  mounted() {
    console.log('preço: ', this.preco);
    console.log([null, 'string'].includes(this.preco));
  },
  watch: {
    preco(novoValor) {
      console.log('novo Preco: ', novoValor);

      if (novoValor !== null && novoValor !== 'custom') {
        setTimeout(() => {
          this.$router.push({
            name: 'pagamento',
            query: { preco: novoValor },
          });
        }, 2000);
      }
    },
    precoDisplay(novoValor) {
      console.log('precoDisplay: ', novoValor);
    },
  },
});
</script>
