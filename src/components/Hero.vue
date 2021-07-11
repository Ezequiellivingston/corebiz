<template>
  <section class="hero swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in carrusel" :key="index">
        <div class="swiper-slide__figure"></div>

        <div
          class="swiper-slide__picture"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 1)), url(${item})`,
          }"
        ></div>

        <div class="swiper-slide__header">
          <h2 class="swiper-slide__title">¡Hola! ¿Qué es lo que buscas?</h2>

          <div class="swiper-slide__subtitle">
            Crear o migra tu comercio electronico
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </section>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Swiper from "swiper/bundle";

export default {
  setup() {
    const carrusel = [
      "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=866&q=80",
    ];

    onMounted(() => {
      new Swiper(".hero.swiper-container", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });

    return {
      carrusel,
    };
  },
};
</script>

<style>
.hero.swiper-container {
  width: 100%;
  height: 260px;
  max-width: 100vw;
  background-color: #000;
}
.hero .swiper-slide {
  color: white;
  display: flex;
  align-items: center;
}
.swiper-slide__figure {
  display: none;
}
.swiper-slide__picture {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.hero .swiper-slide__header {
  color: white;
  padding: 1rem;
  z-index: 2;
  width: 100%;
}
.hero .swiper-slide__title {
  font-size: 1.5rem;
}
.hero .swiper-slide__subtitle {
  font-size: 1.75rem;
  font-weight: 900;
  max-width: 300px;
}
.hero .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  background-color: white;
}

@media (min-width: 1024px) {
  .swiper-slide__figure {
    display: block;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url("../assets/background-hero.svg");
    position: absolute;
    left: 0;
    top: 0;
    width: calc(50vw + 80px);
    height: 100%;
    z-index: 1;
  }
  .swiper-slide__picture {
    width: 50vw;
  }
  .hero .swiper-slide__header {
    width: 1024px;
    padding: 1rem 10rem;
    margin: 0 auto;
  }
}
</style>
