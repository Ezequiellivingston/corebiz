<template>
  <input class="search" type="text" placeholder="¿Qué estás buscando?" />
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  border: none;
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 0.5rem);
  background-position-y: 60%;
  padding: 0.25rem 0.5rem 0.75rem;
  border-bottom: 2px solid rgb(146, 146, 146);
}
.search:focus-visible {
  outline: none;
  border-bottom: 2px solid rgb(0, 0, 0);
}
</style>
