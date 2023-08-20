<template>
  <div class="customer-card">
    <div class="top-of-card">
      <div class="customer-data">
        <p>{{ customer.surName }} {{ customer.firstName }}</p>
        <p>{{ customer.address.street }}</p>
        <p>{{ customer.address.zipCode }} {{ customer.address.city }}</p>
        <p>geb. {{ customer.dayOfBirth }}</p>
      </div>
      <div class="history-btn">
        <button @click="routeSelectServices">++Service</button>
      </div>
    </div>

    <div class="history-container">
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetu jorem ipsum dolor sit amet
          consectetu
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetu lorem ipsum dolor sit amet
          consectetu
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetu sorem ipsum dolor sit amet
          consectetu
        </li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
      </ul>
    </div>
  </div>
  <div class="btn-container">
    <button @click="routeToHome">&lt; Home</button>
  </div>
  <AppFooter />
</template>

<script>
import { useCustomerStore } from "@/stores/CustomerStore";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppFooter,
  },
  data() {
    return {
      store: useCustomerStore(),
      customer: null,
      customerId: this.$route.params.id,
    };
  },
  created() {
    this.loadCustomer();
  },
  methods: {
    loadCustomer() {
      this.customer = this.store.getCustomerById(this.customerId);
    },
    routeToSearch() {
      this.$router.push("/customerssearch");
    },
    routeToHome() {
      this.$router.push("/");
    },
    routeSelectServices() {
      this.$router.push("/selectservicesview");
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
}

.customer-card {
  border: 3px solid black;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box; /* Dies stellt sicher, dass das Padding und der Rand nicht zur Gesamtbreite hinzugefügt werden */
  margin-top: 200px;
}

.top-of-card {
  display: flex;
  justify-content: space-between;
  gap: 250px;
}

.customer-data {
  background-color: rgb(212, 215, 216);
  font-size: 20px;
  border: 2px solid black;
  border-radius: 15px;
  width: 400px;
  padding: 20px;
  box-sizing: border-box;
}

.history-container {
  width: 100%;
  font-size: 20px;
  overflow: auto;
  max-height: 25vh;
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
}

button {
  font-family: "Aboreto", display;
  font-size: 25px;
  width: 200px;
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

.btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
</style>
