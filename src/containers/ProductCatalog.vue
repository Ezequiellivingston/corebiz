<template>
  <section class="product-catalog">
    <h1 class="product-catalo__title">Más vendidos</h1>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="product in produtcs"
          :key="product.productId"
        >
          <CardProduct v-bind="product" />
        </div>
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import Swiper from "swiper/bundle";

import CardProduct from "../components/CardProduct.vue";
import useProducts from "../hooks/useProducts";

export default {
  components: {
    CardProduct,
  },

  setup() {
    const {
      produtcs,
      getAllProducts,
      incrementProductToShoppingCart,
      decrementProductToShoppingCart,
      shoppingCart,
    } = useProducts();

    onMounted(async () => {
      await getAllProducts();
      new Swiper(".product-catalog .swiper-container", {
        slidesPerView: 2,
        spaceBetween: 20,

        pagination: {
          el: ".product-catalog .swiper-pagination",
        },

        navigation: {
          nextEl: ".product-catalog .swiper-button-next",
          prevEl: ".product-catalog .swiper-button-prev",
        },

        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
    });

    return {
      produtcs,
      shoppingCart,
      incrementProductToShoppingCart,
      decrementProductToShoppingCart,
    };
  },
};
</script>

<style>
.product-catalog {
  padding: 2rem 2rem 4rem;
  margin: 0 auto;
  height: 440px;
}
.product-catalog .swiper-container {
  height: 100%;
  width: 100%;
}
.product-catalo__title {
  font-size: 1.25rem;
  font-weight: bold;
}
.product-catalog .swiper-pagination {
  display: block;
}
.product-catalog .swiper-button-next {
  display: none;
}
.product-catalog .swiper-button-prev {
  display: none;
}

@media (min-width: 1024px) {
  .product-catalog {
    width: 1024px;
    padding: 1rem;
  }
  .product-catalog .swiper-pagination {
    display: none;
  }
  .product-catalog .swiper-button-next {
    display: block;
  }
  .product-catalog .swiper-button-prev {
    display: block;
  }
}
</style>
