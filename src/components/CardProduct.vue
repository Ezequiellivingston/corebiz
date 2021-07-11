<template>
  <aside class="card-product">
    <div class="card-product__content">
      <div v-if="listPrice" class="card-product__off">
        <span>OFF</span>
      </div>

      <img
        class="card-product__picture"
        :src="imageUrl"
        alt="Imagen del producto"
      />

      <div class="card-product__titile">
        <p>{{ productName }}</p>
      </div>

      <div class="card-product__rating">
        <img
          v-for="n in 5"
          :key="n"
          :src="n > stars ? iconStar : iconStarFill"
        />
      </div>

      <div class="card-product__list-price">
        de $ {{ formatCurrency(listPrice) }}
      </div>

      <div class="card-product__price">por {{ formatCurrency(price) }}</div>

      <div
        v-for="(installment, index) in installments"
        :key="index"
        class="card-product__installments"
      >
        o en {{ installment.quantity }} de R {{ installment.value }}
      </div>
    </div>

    <div class="card-product__footer">
      <button
        v-if="!productInShoppingCart"
        class="card-product__button"
        :disabled="listPrice"
        @click="incrementProductToShoppingCart(productId)"
      >
        COMPRAR
      </button>

      <div v-else class="card-product__control">
        <button
          class="card-product__control--button"
          @click="decrementProductToShoppingCart(productId)"
        >
          -
        </button>

        <span class="card-product__control--quantity">
          {{ productInShoppingCart.quantity_to_buy }}
        </span>

        <button
          class="card-product__control--button"
          @click="incrementProductToShoppingCart(productId)"
        >
          +
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import iconStar from "../assets/star.svg";
import iconStarFill from "../assets/star-fill.svg";

import useProducts from "../hooks/useProducts";
import { computed } from "@vue/runtime-core";

export default {
  props: [
    "productId",
    "productName",
    "stars",
    "imageUrl",
    "listPrice",
    "price",
    "installments",
  ],

  setup(props) {
    const {
      incrementProductToShoppingCart,
      decrementProductToShoppingCart,
      shoppingCart,
    } = useProducts();

    const productInShoppingCart = computed(() =>
      shoppingCart.value.find((p) => p.productId == props.productId)
    );

    const formatCurrency = (price) => {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(price);
    };

    return {
      iconStar,
      iconStarFill,
      incrementProductToShoppingCart,
      decrementProductToShoppingCart,
      productInShoppingCart,
      formatCurrency,
    };
  },
};
</script>

<style scoped>
.card-product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: 100%;
}
.card-product__content {
  font-size: 0.75rem;
  color: gray;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
}
.card-product__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
}
.card-product__button {
  cursor: pointer;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.card-product__button:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
.card-product:hover {
  background-color: #e6e8ea;
}
.card-product__picture {
  width: 100%;
  height: auto;
  padding: 0;
}
.card-product__price {
  font-weight: 900;
  color: #000;
  font-size: 1rem;
}
.card-product__off {
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 900;
  color: white;
  font-size: 1rem;
  background-color: var(--secondary);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.card-product__off span {
  margin-bottom: 20px;
  margin-right: 6px;
}
.card-product__control {
  display: flex;
  align-items: center;
}
.card-product__control--quantity {
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  font-size: 1.25rem;
}
.card-product__control--button {
  background-color: var(--secondary);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
}

@media (min-width: 1024px) {
  .card-product:hover > .card-product__footer .card-product__button {
    display: block;
  }
  .card-product__button {
    display: none;
    max-width: max-content;
  }
}
</style>
