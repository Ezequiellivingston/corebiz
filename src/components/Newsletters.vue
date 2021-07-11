<template>
  <section class="newsletters">
    <h1 class="newsletters__title">
      ¡Únete a nuestras novedades y promociones!
    </h1>

    <form class="newsletters__form" @submit.prevent="handleSubmit">
      <input
        v-model="form.name"
        type="text"
        placeholder="Ingresa tu nombre"
        class="newsletters__input"
        required
      />

      <input
        v-model="form.email"
        type="email"
        placeholder="Ingresa tu email"
        class="newsletters__input"
        required
      />

      <button class="newsletters__button">Suscribirme</button>
    </form>
  </section>
</template>

<script>
import { reactive } from "vue";

import useNewsletters from "../hooks/useNewsletters";

export default {
  setup() {
    const form = reactive({ email: null, name: null });
    const { subscribeInNewsletter } = useNewsletters();

    const handleSubmit = async (e) => {
      await subscribeInNewsletter(form.name, form.email);
      form.email = null;
      form.name = null;
      e.target.reset();
    };

    return {
      form,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.newsletters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  color: rgb(31, 31, 31);
  padding: 2rem;
}
.newsletters__form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 100%;
}
.newsletters__input {
  border: none;
  padding: 1rem;
  border-radius: 0.25rem;
}
.newsletters__button {
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  border: none;
  font-weight: bold;
}

@media (min-width: 1024px) {
  .newsletters__form {
    flex-direction: row;
    max-width: max-content;
  }
}
</style>
