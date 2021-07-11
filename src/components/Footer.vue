<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="location">
        <h2 class="location__title">Ubicación</h2>

        <div class="location__divider"></div>

        <div class="location__body">
          <p>Avenida Andromeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>

      <div class="contact-us">
        <button class="contact-us__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            />
          </svg>

          <span> CONTÁCTANOS </span>
        </button>

        <button class="contact-us__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>

          <span> HABLA CON UN CONSULTOR </span>
        </button>
      </div>

      <div class="information">
        <div class="information__dev">
          <p>Desarrollado por</p>
          <img src="../assets/logo-corebiz-white.svg" alt="Logo Corebiz" />
        </div>

        <div class="information__stack">
          <p>Powered by</p>
          <img src="../assets/logo-vtex.png" alt="Logo VTEX" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--primary);
  color: white;
  padding: 2rem;
}
.footer__content {
  display: grid;
  width: 100%;
  font-size: 0.85rem;
}
.location__divider {
  height: 4px;
  width: 60px;
  background-color: gray;
}
.location__body {
  font-size: 0.75rem;
}
.contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem auto;
}
.contact-us__button {
  padding: 0.75rem 1rem;
  width: 250px;
  display: flex;
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  border: none;
}
.contact-us__button span {
  width: 100%;
}
.information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  gap: 1rem;
  padding: 1rem 3rem;
}
.information img {
  width: 60px;
  height: auto;
}
@media (min-width: 1024px) {
  .footer__content {
    width: 1024px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
  }
  .information {
    justify-content: flex-end;
  }
}
</style>
