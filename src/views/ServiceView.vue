<template>
  <div>
    <h2>Service</h2>
    <div>
      <input
        v-model="searchQuery"
        type="search"
        name="services-search"
        id="services-search"
        placeholder="Dienstleistungen suchen"
        @input="searchServices"
      />
      <div class="EnumerableLIST">
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
            {{ service.title }}
          </label>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="BTNcontainer">
        <button @click="goBack">Zurück</button>
        <button @click="submitServices">Speichern</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useServiceStore } from "@/stores/ServiceStore";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      searchQuery: "",
      selectedServices: [],
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
      console.log(this.selectedServices);
      this.$router.go(-1);
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
h2 {
  font-family: "Aboreto", display;
}
.service-item {
  display: flex;
  align-items: center;
}

.service-label {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
</style>
