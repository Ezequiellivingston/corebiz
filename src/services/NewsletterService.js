const API_URL = import.meta.env.VITE_API_URL;
const NEWSLETTER = `${API_URL}/newsletter`;

export default class ProductSerivce {
  subscribe(name, email) {
    return fetch(NEWSLETTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }
}
