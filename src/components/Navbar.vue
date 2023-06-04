<template>
  <nav class="navbar">
    <p class="nav-item">Icone?</p>
    <img
      class="nav-item"
      src="../assets/autopass-icon.png"
      alt="Logo da Autopass"
    />
  </nav>
</template>

<style lang="sass">
@import "../css/Navbar"
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarMain',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
