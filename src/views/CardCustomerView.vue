<template>
  <div class="customer-container">
    <h2>Kundeninformationen</h2>
    <p>Name: {{ customer.name }}</p>
    <p>Email: {{ customer.email }}</p>
  </div>
  <div class="treamtment-container">
    <div class="treatment-history">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <div class="treatment-button">
    <button>++ treatments</button>
  </div>
</template>

<script>
import { useCustomerStore } from "../stores/CustomerStore";

export default {
  data() {
    return {
      customerId: null,
    };
  },
  computed: {
    customer() {
      const store = useCustomerStore();
      console.log("HAAAAALLOOOO");

      console.log(
        store.getCustomerById("80ad027f-b293-4c38-ba60-d1dd3d5bb782")
      );
      store.forEach((element) => {
        if (element.id === this.$route.params.id) {
          console.log("ende");
        } else {
          console.log("suche");
        }
      });

      return store.getCustomerById(this.customerId);
    },
  },
  created() {
    this.customerId = this.$route.params.id;
  },
};
</script>

<style scoped>
h2 {
  color: pink;
}
</style>
