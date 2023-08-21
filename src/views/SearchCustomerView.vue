<template>
  <AppHeader />
  <div class="search-input">
    <h1>Kunden</h1>
    <div>
      <input
        v-model="searchQuery"
        type="search"
        name="customers-search"
        id="customers-search"
        placeholder="Kunden suchen.."
        @input="searchToCustomers"
      />
      <div class="customer-data">
        <ul>
          <li
            v-for="customer in filteredCustomers"
            :key="customer.id"
            @click="goToCustomerCard(customer.id)"
          >
            {{ customer.firstName }} {{ customer.surName }}
          </li>
        </ul>
      </div>
    </div>
    <div class="btn">
      <button @click="routeToStartPage">&lt; Zurück</button>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import { useCustomerStore } from "@/stores/CustomerStore";
import { mapActions } from "pinia";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["addCustomer"]),
    routeToStartPage() {
      this.$router.push("/");
    },
    searchToCustomers() {},
    goToCustomerCard(customerId) {
      this.$router.push({ name: "customer", params: { id: customerId } });
    },
  },
  computed: {
    filteredCustomers() {
      const customerStore = useCustomerStore();
      const query = this.searchQuery.toLowerCase().trim();

      if (query === "") {
        return customerStore.customerState;
      }
      return customerStore.customerState.filter((customer) => {
        if (customer.firstName && customer.surName) {
          return (
            customer.firstName.toLowerCase().includes(query) ||
            customer.surName.toLowerCase().includes(query)
          );
        }
        return;
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Aboreto", display;
}
.btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
}

button {
  font-family: "Aboreto", display;
  font-size: 20px;
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

input {
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  width: 500px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.customer-data {
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  overflow: auto;
  max-height: 45vh;
  margin-top: 35px;
}
.search-input {
  margin-top: 150px;
}
ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

ul li:hover {
  color: rgb(247, 247, 239);
}
</style>
