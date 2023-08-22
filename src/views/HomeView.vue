<template>
  <header>
    <div class="header-container">
      <h1 class="logo">Hair++</h1>
    </div>
  </header>
  <main>
    <div class="btn-container">
      <button @click="routeToCustomerForm" type="button">+Kunde</button>
      <button @click="viewCustomers" type="button">++Kunden</button>
    </div>
  </main>
  <AppFooter />
</template>

<script>
import { useCustomerStore } from "../stores/CustomerStore";
import { useServiceStore } from "../stores/ServiceStore";
import { useSessionStore } from "../stores/SessionStore";
import { useStateCardStore } from "../stores/StateCardStore";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "HomeView",
  components: {
    AppFooter,
  },
  methods: {
    viewCustomers() {
      this.$router.push("/customerssearch");
    },
    routeToCustomerForm() {
      this.$router.push("/customerform");
    },
  },
  mounted() {
    this.customerStore = useCustomerStore();
    this.useServiceStore = useServiceStore();
    this.useSessionStore = useSessionStore();
    this.useStateCardStore = useStateCardStore();
  },
};
</script>

<style scoped>
@import url(https://fonts.bunny.net/css?family=aboreto:400);

.header-container {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 160px;
}
.btn-container {
  display: flex;
  margin-top: 10px;
  gap: 130px;
}
button {
  padding: 10px 20px 10px 20px;
  width: 320px;
  font-family: "Aboreto", display;
  font-size: 25px;
  background-color: rgb(212, 215, 216);
  border-radius: 6px;
  border-color: black;
  color: rgb(6, 5, 5);
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}

button:hover {
  box-shadow: 0px 0px 10px 3px rgb(3, 3, 3);
}

.logo {
  font-family: "Aboreto", display;
  font-size: var(--ueberschrift-groesse, 140px);
  color: var(--ueberschrift-farbe, black);
  text-shadow: var(--ueberschrift-schatten, 0px 0px 0px transparent);
}

.logo:hover {
  color: rgb(251, 251, 249);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
