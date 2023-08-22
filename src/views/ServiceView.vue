<template>
  <AppHeader />
  <div class="service-container">
    <h1>Service</h1>
    <div>
      <input
        v-model="searchQuery"
        type="search"
        name="services-search"
        id="services-search"
        placeholder="Service suchen.."
        @input="searchServices"
      />
      <div class="service-list">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="service-item"
        >
          <label class="service-label">
            <input
              type="checkbox"
              :value="service.id"
              v-model="selectedServices"
            />
            <span class="checkmark"></span>
            {{ service.title }}
          </label>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button @click="goBack">&lt; Zurück</button>
      <button @click="submitServices">Speichern</button>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { useServiceStore } from "@/stores/ServiceStore";
import { mapActions } from "pinia";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      searchQuery: "",
      selectedServices: [],
      title: "",
      price: "",
      serviceStore: null,
    };
  },
  methods: {
    ...mapActions(useServiceStore, ["addService"]),
    selectService(serviceId) {
      console.log(serviceId);
      this.$router.go(-1);
    },
    goBack() {
      this.$router.go(-1);
    },
    submitServices() {
      //const service = [];
      //const URL = "http://localhost:3333/services";
      console.log(this.$route.params.id);
      this.selectedService = [];
      this.sessions = [];
      const URL = "http://localhost:3333/sessions";

      for (const key in this.selectedServices) {
        this.selectedService.push({ servicesId: this.selectedServices[key] });
      }
      const data = {
        customerId: this.$route.params.id,
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
          this.sessions.push(res);
        })
        .catch((error) => {
          console.error("Fehler bei der Anfrage:", error);
        })
        .finally((e) => {
          console.log(this.selectedServices);
          console.log(e);
          this.$router.go(-1);
        });
    },
  },
  computed: {
    filteredServices() {
      const serviceStore = useServiceStore();
      const query = this.searchQuery.toLowerCase().trim();
      if (query === "") {
        return serviceStore.serviceState;
      }
      return serviceStore.serviceState.filter((service) => {
        return (
          service.title.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Aboreto", display;
}

.service-container {
  margin-top: 180px;
}
.service-list {
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  padding: 4px;
}
.service-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.service-label input[type="checkbox"] {
  display: none;
}

.service-label .checkmark {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #0d0d0d;
  background-color: #fff;
  transition: 0.3s;
}

.service-label input[type="checkbox"]:checked + .checkmark:after {
  font-weight: bold;
  content: "\002B";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  color: black;
}

.service-label input[type="checkbox"]:checked + .checkmark {
  background-color: #eee;
}

input {
  font-family: "Courier New", Courier, monospace;
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
}

input:focus {
  outline: 2px solid black;
}

.btn-container {
  display: flex;
  gap: 200px;
  margin-top: 25px;
}

button {
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
button:hover {
  box-shadow: 0px 0px 10px 3px rgb(3, 3, 3);
}
</style>
