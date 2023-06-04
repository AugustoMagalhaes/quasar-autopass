<template>
  <Navbar />
</template>

<style lang="sass">
@import "../css/app.sass"
</style>

<script>
import { defineComponent, ref } from 'vue';
import Navbar from 'src/components/Navbar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Navbar,
  },

  /* setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  }, */
});
</script>
