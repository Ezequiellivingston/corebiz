import { readonly, reactive, ref, computed } from "vue";
import ProductService from "../services/ProductService";

// Recupera mapa de carrito de comprar de localstorage 
// En caso de no existir crear uno vacio
const shoppingCartDefault =
  JSON.parse(localStorage.getItem("shopping_cart")) || {};

const produtcs = ref([]);
const loading = ref(false);
const shoppingCart = reactive(shoppingCartDefault);

const productService = new ProductService();

export default () => {
  const getAllProducts = async () => {
    try {
      loading.value = true;

      const res = await productService.getAll();
      loading.value = false;
      produtcs.value = res;
    } catch (error) {
      loading.value = false;
    }
  };

  // Incrementa +1 el producto en el mapa del carrito de compras
  // En caso de no existir agrega el producto con la cantidad de 1
  const incrementProductToShoppingCart = (productId) => {
    let quantity = 1;

    if (shoppingCart.hasOwnProperty(productId)) {
      quantity = shoppingCart[productId] + 1;
    }

    shoppingCart[productId] = quantity;
    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
  };

  // Disminuye -1 el producto en el mapa del carrito de compras 
  // En caso de tener 1 solo producto elimina este del carrito
  const decrementProductToShoppingCart = (productId) => {
    if (!shoppingCart.hasOwnProperty(productId)) return;

    if (shoppingCart[productId] === 1) {
      removeProductToShoppingCart(productId);
      return;
    }

    shoppingCart[productId] = shoppingCart[productId] - 1;
    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
  };

  const removeProductToShoppingCart = (productId) => {
    delete shoppingCart[productId];
    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
  };

  return {
    produtcs: readonly(produtcs),
    loading: readonly(loading),
    getAllProducts,
    incrementProductToShoppingCart,
    decrementProductToShoppingCart,
    removeProductToShoppingCart,
    shoppingCart: computed(() =>
      Object.keys(shoppingCart).map((productId) => ({
        ...produtcs.value.find((p) => p.productId == productId),
        quantity_to_buy: shoppingCart[productId],
      }))
    ),
  };
};
