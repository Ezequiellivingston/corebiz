<template>
  <Navbar />
  <Hero />
  <ProductCatalog />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ProductCatalog from "./containers/ProductCatalog.vue";

export default {
  components: {
    Navbar,
    Hero,
    ProductCatalog,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
