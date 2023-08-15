<template>
  <div>
    <input
      type="search"
      name="customers-search"
      id="customers-search"
      placeholder="Customers Search"
    />
  </div>
  <div class="btn">
    <button @click="searchToCustomers">Suchen</button>
    <button @click="routeToStartPage">Zurück</button>
  </div>
</template>
<script>
export default {
  methods: {
    routeToStartPage() {
      this.$router.push("/");
    },
    searchToCustomers() {
      this.$router.push("/customercard");
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  margin: 20px;
}

button {
  padding: 8px 15px;
  background-color: rgb(88, 91, 112);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
