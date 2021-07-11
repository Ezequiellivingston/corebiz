<template>
  <Navbar />
  <Hero />
  <ProductCatalog />
  <Newsletters />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ProductCatalog from "./containers/ProductCatalog.vue";
import Newsletters from "./components/Newsletters.vue";

export default {
  components: {
    Navbar,
    Hero,
    ProductCatalog,
    Newsletters,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
