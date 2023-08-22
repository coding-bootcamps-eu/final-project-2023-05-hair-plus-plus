import { defineStore } from "pinia";

export const useStateCardStore = defineStore("stateCard", {
  state: () => ({
    customer: "",
    services: [],
    selectedService: [],
    cardData: {
      firstName: "",
      surName: "",
      addressstreet: "",
      addresszipCode: "",
      addresscity: "",
      dayOfBirth: "",
      sessions: [],
    },
  }),
  getters: {
    getCustomer: (state) => state.customer,
    getService: (state) => state.services,
    getCardData: (state) => state.cardData,
    getSessions: (state) => state.cardData.sessions,
    getFirstName: (state) => state.cardData.firstName,
    getSurName: (state) => state.cardData.surName,
    getAddressStreet: (state) => state.cardData.addressstreet,
    getAddressZipCode: (state) => state.cardData.addresszipCode,
    getAddressCity: (state) => state.cardData.addresscity,
    getDayOfBirth: (state) => state.cardData.dayOfBirth,
  },

  actions: {
    setCustomer(customer) {
      this.customer = customer;
      this.cardData.sessions = [];

      fetch("https://23-mai.hair-plus-plus.api.cbe.uber.space/sessions")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            if (element.customerId === customer) {
              this.cardData.sessions.push(element);
            }
          });
          fetch("https://23-mai.hair-plus-plus.api.cbe.uber.space/customers", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((req) => {
              req.forEach((data) => {
                if (data.id === this.$state.customer) {
                  this.$state.cardData.firstName = data.firstName;
                  this.$state.cardData.surName = data.surName;
                  this.$state.cardData.addressstreet = data.address.street;
                  this.$state.cardData.addresszipCode = data.address.zipCode;
                  this.$state.cardData.addresscity = data.address.city;
                  this.$state.cardData.dayOfBirth = data.dayOfBirth;
                }
              });
            })
            .catch((error) => {
              console.error("error: ", error);
            });
        })
        .catch((error) => {
          console.error("Fehler bei der Anfrage:", error);
        });
    },

    setService(input) {
      this.services = [];
      this.cardData.sessions = [];

      for (const key in input) {
        this.services.push({ servicesId: input[key] });
      }

      const data = {
        customerId: this.customer,
        info: "Kommt Später",
        date: Date.now(),
        services: this.services,
      };

      fetch("https://23-mai.hair-plus-plus.api.cbe.uber.space/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((resData) => {
          this.cardData.sessions.push(resData);
        })
        .catch((error) => {
          console.error("Fehler bei der Anfrage:", error);
        });
    },

    setSelectedService(input) {
      this.selectedService = [];
      this.cardData.sessions = [];
      const URL = "https://23-mai.hair-plus-plus.api.cbe.uber.space/sessions";

      for (const key in input) {
        this.selectedService.push({ servicesId: input[key] });
      }

      const data = {
        customerId: this.customer,
        info: "Kommt Später",
        date: Date.now(),
        services: this.selectedService,
      };

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((req) => req.json())
        .then((res) => {
          this.cardData.sessions.push(res);
        })
        .catch((error) => {
          console.error("Fehler bei der Anfrage:", error);
        });
    },
  },
});
