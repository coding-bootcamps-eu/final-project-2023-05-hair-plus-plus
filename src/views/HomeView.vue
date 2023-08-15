<template>
  <div>
    <header>
      <h1>Hair++</h1>
    </header>
    <div class="container">
      <button @click="routeToCustomerForm" type="button">+ new Customer</button>
      <button @click="viewCustomers" type="button">Customers</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPageView",
  components: {},
  methods: {
    viewCustomers() {
      this.$router.push("/customerssearch");
      //alert("Kunden anzeigen");
    },
    routeToCustomerForm() {
      this.$router.push("/customerform");
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.bunny.net/css?family=aboreto:400);

header {
  color: rgb(241, 244, 248);
  display: flex;
  justify-content: center;
  margin-top: 0px;
  padding: 110px;
  font-size: 36px;
}
.container {
  display: flex;
  justify-content: center;
  gap: 150px;
}
button {
  font-family: "Aboreto", display;
  font-size: 30px;
  background-color: rgb(88, 91, 112);
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.5s ease; /* Übergangseffekt für den Schatten */
}

button:hover {
  box-shadow: 0px 0px 10px 3px rgb(238, 226, 47); /* Leuchtender Schatten bei Hover */
}
</style>
