import { defineStore } from "pinia";

function initializeStore() {
  let result = [];
  const URL = "http://localhost:3333/services";

  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((services) => {
      services.forEach((service) => {
        result.push(service);
      });
    });
  return result;
}

export const useServiceStore = defineStore("service", {
  state: () => {
    return {
      services: initializeStore(),
    };
  },
  getters: {
    serviceState() {
      return this.services.filter((service) => service.id);
    },
    getServiceById: (state) => (serviceId) => {
      return state.services.find((service) => service.id === serviceId);
    },
  },
  actions: {
    addService(newService) {
      this.services.push(newService);
    },
  },
});
