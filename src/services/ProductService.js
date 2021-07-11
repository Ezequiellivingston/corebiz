const API_URL = import.meta.env.VITE_API_URL;
const PRODUCTS = `${API_URL}/products`;

export default class ProductSerivce {
  getAll() {
    return fetch(PRODUCTS)
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }
}
