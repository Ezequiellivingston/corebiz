<template>
  <Navbar />
  <Hero />
  <ProductCatalog />
  <Newsletters />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ProductCatalog from "./containers/ProductCatalog.vue";
import Newsletters from "./components/Newsletters.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    ProductCatalog,
    Newsletters,
    Footer,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
