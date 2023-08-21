<template>
  <AppHeader />
  <div class="customer-card">
    <div class="top-of-card">
      <div class="customer-data">
        <p>{{ customer.surName }} {{ customer.firstName }}</p>
        <p>{{ customer.address.street }}</p>
        <p>{{ customer.address.zipCode }} {{ customer.address.city }}</p>
        <p>geb. {{ customer.dayOfBirth }}</p>
      </div>
      <div class="history-btn">
        <button @click="routeSelectServices" class="service-btn">
          ++Service
        </button>
      </div>
    </div>

    <div class="history-container">
      <!--  <p>{{ service.title }}</p>-->
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
    </div>
  </div>
  <div class="btn-container">
    <button @click="routeToHome" class="home-btn">&lt; Home</button>
  </div>
  <AppFooter />
</template>

<script>
import { useServiceStore } from "@/stores/ServiceStore";
import { useCustomerStore } from "@/stores/CustomerStore";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      customerStore: useCustomerStore(),
      serviceStore: useServiceStore(),
      customer: null,
      customerId: this.$route.params.id,
      serviceId: this.$route.params.id,
      service: [],
    };
  },
  created() {
    this.loadCustomer();
    this.loadService();
  },
  methods: {
    loadCustomer() {
      this.customer = this.customerStore.getCustomerById(this.customerId);
    },
    loadService() {
      this.service = this.serviceStore.getServiceById(this.serviceId);
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
  max-height: 100vh;
}
.customer-card {
  border: 3px solid black;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 200px;
}

.top-of-card {
  display: flex;
  justify-content: space-between;
  gap: 250px;
}

.customer-data {
  font-family: "Courier New", Courier, monospace;
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
  font-family: "Courier New", Courier, monospace;
  overflow: auto;
  max-height: 25vh;
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
}

.service-btn {
  margin-top: 200px;
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
.home-btn {
  font-family: "Aboreto", display;
  font-size: 20px;
  width: 150px;
  background-color: rgb(212, 215, 216);
  border-radius: 6px;
  border-color: black;
  color: rgb(6, 5, 5);
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}

.service-btn:hover {
  box-shadow: 0px 0px 10px 3px rgb(3, 3, 3);
}

.home-btn:hover {
  box-shadow: 0px 0px 10px 3px rgb(3, 3, 3);
}
.btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
