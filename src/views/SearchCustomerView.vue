<template>
  <div class="search-input">
    <h3>Kundensuche:</h3>
    <input
      type="search"
      name="customers-search"
      id="customers-search"
      placeholder="Suche.."
    />
  </div>
  <div class="btn">
    <button @click="routeToStartPage">&lt; Zurück</button>
    <button @click="searchToCustomers">Suchen</button>
  </div>
  <AppFooter />
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppFooter,
  },
  methods: {
    routeToStartPage() {
      this.$router.push("/");
    },
    searchToCustomers() {
      //this.$router.push("/customercard");
      this.$router.push("/customer/:id");
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Aboreto", display;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 20px;
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

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.search-input {
  margin-top: 350px;
}
</style>
