<template>
  <div class="customer-card">
    <div class="top-of-card">
      <div class="customer-data">
        <p>{{ customer.surName }} {{ customer.firstName }}</p>
        <p>{{ customer.address.street }}</p>
        <p>{{ customer.address.zipCode }} {{ customer.address.city }}</p>
        <p>geb. {{ customer.dayOfBirth }}</p>
      </div>
      <div>
        <button @click="routeSelectServices">Service</button>
      </div>
    </div>

    <div class="history-container">
      <ul>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>Lorem ipsum dolor sit amet consectetu</li>
      </ul>
    </div>

    <div class="btn-container">
      <button @click="routeToHome">&lt; Home</button>
      <button @click="routeToSearch">Suche ></button>
    </div>
  </div>
</template>

<script>
import { useCustomerStore } from "@/stores/CustomerStore";

export default {
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
  margin: 0;
  box-sizing: border-box;
}
.customer-card {
  border: 5px solid black;
  border-radius: 5px;
  margin: 100px;
  padding: 30px;
  width: 1250px;
  height: 700px;
  box-sizing: border-box;
}

.customer-data {
  font-size: px;
  border: 2px solid black;
  width: 550px;
  padding: 20px;
  box-sizing: border-box;
}
.top-of-card {
  display: flex;
  justify-content: space-between;
  gap: 250px;
}
.history-container {
  border: 2px solid black;
  width: 1180px;
  height: 310px;
  margin-top: 60px;
  padding: 20px;
}

button {
  margin-top: 100px;
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
.btn-container {
  display: flex;
  justify-content: space-between;
}
</style>
