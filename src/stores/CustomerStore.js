import { defineStore } from "pinia";

function initializeStore() {
  let result = [];
  const URL = "http://localhost:3333/customers";

  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((customers) => {
      customers.forEach((customer) => {
        result.push(customer);
      });
    });
  return result;
}

export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      customers: initializeStore(),
    };
  },
  getters: {
    customerState() {
      return this.customers.filter((customer) => customer.id);
    },
  },
  actions: {
    getCustomerById(id) {
      return this.customers.find((customer) => customer.id === id);
    },
    addCustomer(newCustomer) {
      this.customers.push(newCustomer);
    },
  },
});
