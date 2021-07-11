<template>
  <div ref="menu" class="shopping-cart">
    <button aria-label="Menu carrito de comprar" :aria-expanded="isOpen" aria-controls="shopping_card_menu" class="shopping-cart__button" @click="isOpen = !isOpen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart4"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        />
      </svg>

      <span v-if="shoppingCart.length > 0" class="shopping-cart--badge">
        {{ shoppingCart.length }}
      </span>
    </button>

    <transition name="fade">
      <div v-show="isOpen" class="shopping-cart__menu" id="shopping_card_menu">
        <button aria-label="Cerrar menu de carrito de compras" class="shopping-cart__close" @click="isOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>

          <article
            class="shopping-cart__product"
            v-for="(item, index) in shoppingCart"
            :key="index"
            itemscope itemtype="https://schema.org/Product"
          >
            <h4 class="shopping-cart__description" itemprop="name">{{ item.productName }} :</h4>

            <p class="shopping-cart__list-price" itemprop="price" :content="formatCurrency(item.price)">
              {{ item.quantity_to_buy }} X {{ formatCurrency(item.price) }}
            </p>

            <picture class="shopping-cart__image">
              <img class="shopping-cart__picture" :src="item.imageUrl" itemprop="image" :alt="`Imagen del producto ${item.productName}`" />
            </picture>

            <picture
              class="shopping-cart__remove"
              @click="removeProductToShoppingCart(item.productId)"
              aria-label="Eliminar producto del carrito de compras"
            >
              <img
                class="shopping-cart__icon-remove"
                src="../assets/remove.svg"
                alt=""
              />
            </picture>
          </article>

        <div v-if="shoppingCart.length > 0" class="shopping-cart__product--total">
          <span>TOTAL</span>
          <span>{{ formatCurrency(total) }}</span>
        </div>

        <button v-if="shoppingCart.length > 0" class="shopping-cart__product--buy">
          COMPRAR
        </button>

        <div v-if="shoppingCart.length === 0" class="shopping-cart__product--empty">
          No tenes productos en tu carrito
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import useProducts from "../hooks/useProducts";

export default {
  setup() {
    const isOpen = ref(false);
    const menu = ref(null);
    const { shoppingCart } = useProducts();
    const { removeProductToShoppingCart } = useProducts();

    const handleClickOutsideElement = (e) => {
      e.stopPropagation();
      try {
        const isClickInsideElement = menu.value.contains(e.target);
        if (!isClickInsideElement) {
          isOpen.value = false;
        }
      } catch (error) {}
    };

    const handlePressEscElement = (e) => {
      e.stopPropagation();

      if (e.code === "Escape") {
        isOpen.value = false;
      }
    };

    const formatCurrency = (price) => {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(price);
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutsideElement);
      document.addEventListener("keydown", handlePressEscElement);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutsideElement);
      document.removeEventListener("keydown", handlePressEscElement);
    });

    const total = computed(() => shoppingCart.value.map(p => p.price * p.quantity_to_buy).reduce((acc, el) => acc + el, 0))

    return {
      shoppingCart,
      isOpen,
      menu,
      handleClickOutsideElement,
      formatCurrency,
      removeProductToShoppingCart,
      total
    };
  },
};
</script>

<style scoped>
.shopping-cart {
  position: relative;
}
.shopping-cart__button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  color: rgb(80, 80, 80);
}
.shopping-cart--badge {
  font-weight: bold;
  color: white;
  background-color: var(--secondary);
  padding: 0.25rem;
  border-radius: 100%;
  width: 0.75rem;
  height: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shopping-cart__menu {
  position: absolute;
  top: 2rem;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 2;
  border: 1px solid #000;
  font-size: 0.75rem;
  padding: 1.5rem 1rem 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.shopping-cart__product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shopping-cart__picture {
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.shopping-cart__image {
  order: -1;
}
.shopping-cart__list-price {
  font-weight: bold;
}
.shopping-cart__remove:hover {
  cursor: pointer;
}
.shopping-cart__description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 140px;
}
.shopping-cart__close {
  background-color: var(--primary);
  color: white;
  border-radius: 100%;
  border: none;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  cursor: pointer;
}
.shopping-cart__product--empty{
  display: flex;
  justify-content: center;
  padding: 5px;
}
.shopping-cart__product--total {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 1rem;
}
.shopping-cart__product--buy {
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;
}
</style>
