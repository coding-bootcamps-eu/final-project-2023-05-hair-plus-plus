<template>
  <AppHeader />
  <div class="customer-card">
    <div class="top-of-card">
      <div class="customer-data">
        <!-- Getter für den Vornamen und Nachnamen -->
        <p>{{ stateCardStore.getFirstName }} {{ stateCardStore.getSurName }}</p>

        <!-- Getter für die Straße -->
        <p>{{ stateCardStore.getAddressStreet }}</p>

        <!-- Getter für die PLZ und die Stadt -->
        <p>
          {{ stateCardStore.getAddressZipCode }}
          {{ stateCardStore.getAddressCity }}
        </p>

        <!-- Getter für das Geburtsdatum -->
        <p>geb. {{ stateCardStore.getDayOfBirth }}</p>
      </div>

      <div class="history-btn">
        <button @click="routeSelectServices" class="service-btn">
          ++Service
        </button>
      </div>
    </div>

    <div class="history-container">
      <!-- Iteriere über die Sessions im cardData in umgekehrter Reihenfolge -->
      <div
        v-for="session in stateCardStore.getSessions.slice().reverse()"
        :key="session.id"
      >
        <p>{{ new Date(session.date).toLocaleDateString("de-DE") }}</p>
        <div v-for="service in session.services" :key="service.servicesId">
          <!-- Hier können Sie die relevanten Daten für jeden Service anzeigen. Beispiel: -->
          <p>Service ID: {{ service.servicesId }}</p>
        </div>
        <!-- Andere Informationen über die Session können hier hinzugefügt werden, wenn benötigt. -->
      </div>
    </div>
  </div>
  <div class="btn-container">
    <button @click="routeToHome" class="home-btn">&lt; Home</button>
    <button @click="routeToSearch" class="home-btn">Suche &gt;</button>
  </div>
  <AppFooter />
</template>

<script>
import { useStateCardStore } from "@/stores/StateCardStore";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    customerId() {
      return this.$route.params.id;
    },
    stateCardStore() {
      return useStateCardStore();
    },
  },
  created() {
    this.loadStateCardStore();
  },
  methods: {
    loadStateCardStore() {
      this.stateCardStore.setCustomer(this.customerId);
    },
    routeToHome() {
      this.$router.push("/");
    },
    routeToSearch() {
      this.$router.push("/customerssearch");
    },
    routeSelectServices() {
      this.$router.push("/selectservices/" + this.customerId);
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
  margin-top: 0px;
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
