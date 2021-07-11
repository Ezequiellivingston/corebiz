<template>
  <nav class="nav">
    <Sidebar class="nav__menu" />

    <a class="nav__logo">
      <img src="../assets/logo-corebiz.svg" alt="Logo Corebiz" width="140" />
    </a>

    <Search class="nav__search" />

    <div class="nav__actions">
      <MyAccount />

      <ShoppingCart />
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
import MyAccount from "./MyAccount.vue";
import ShoppingCart from "./ShoppingCart.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Search,
    MyAccount,
    ShoppingCart,
    Sidebar,
  },
};
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-areas: "menu logo actions" "search search search";
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}
.nav__menu {
  grid-area: menu;
}
.nav__logo {
  grid-area: logo;
}
.nav__search {
  grid-area: search;
}
.nav__actions {
  grid-area: actions;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .nav {
    grid-template-areas: "logo search actions";
    width: 1024px;
    margin: 0 auto;
  }
  .nav__menu {
    display: none;
  }
}
</style>
