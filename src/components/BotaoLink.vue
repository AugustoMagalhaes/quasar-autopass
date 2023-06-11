<template>
  <router-link :to="novaRota">
    <q-btn
      :label="textoBotao"
      :class="ComputedClasse"
    >
    </q-btn>
  </router-link>
</template>

<script>
export default {
  name: 'BotaoLink',
  props: {
    textoBotao: {
      type: String,
      required: true,
    },
    novaRota: {
      type: String,
      required: true,
    },
    classe: {
      type: String,
      required: false,
    },
    icone: {
      type: String,
      required: false,
    },
  },
  computed: {
    ComputedClasse() {
      let classes = {};
      classes[this.classe] = true;
      return classes;
    },
  },
};
</script>
