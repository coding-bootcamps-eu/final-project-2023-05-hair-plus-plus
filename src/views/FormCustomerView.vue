<template>
  <AppHeader />
  <div class="contact-form">
    <h1>KUNDENDATEN</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="vorname">Vorname</label>
        <input v-model="vorname" type="text" id="vorname" required />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="strasse">Straße</label>
        <input v-model="strasse" type="text" id="strasse" />
      </div>
      <div class="form-group">
        <label for="plz">Plz</label>
        <input v-model="plz" type="text" id="plz" />
      </div>
      <div class="form-group">
        <label for="stadt">Stadt</label>
        <input v-model="stadt" type="text" id="stadt" />
      </div>
      <div class="form-group">
        <label for="geburtstag">Geburtstag</label>
        <input v-model="geburtstag" type="date" id="geburtstag" />
      </div>
    </form>
    <div class="button-container">
      <button @click="routeToStartPage">&lt; Zurück</button>
      <button @click="submitForm">Speichern</button>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import { useCustomerStore } from "../stores/CustomerStore";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      name: "",
      vorname: "",
      strasse: "",
      plz: "",
      stadt: "",
      geburtstag: "",
      id: "",
      customerStore: null,
    };
  },
  created() {
    this.customerStore = useCustomerStore();
  },
  methods: {
    submitForm() {
      const customer = {
        surName: this.name,
        firstName: this.vorname,
        address: {
          street: this.strasse,
          zipCode: this.plz,
          city: this.stadt,
        },
        dayOfBirth: this.geburtstag,
      };
      const URL = "http://localhost:3333/customers";
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      })
        .then((res) => res.json())
        .then((response) => {
          this.customerStore.addCustomer(response);
          this.$router.push("/customer/" + response.id);
        })
        .catch((error) => {
          console.error(
            "Es gab einen Fehler beim Speichern des Kunden:",
            error
          );
        });
    },
    routeToStartPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.bunny.net/css?family=aboreto:400);
h1 {
  font-family: "Aboreto", display;
}
.contact-form {
  color: #060606;
  max-width: 500px;
  margin-top: 135px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
}

.form-group {
  margin-bottom: 15px;
  color: #ccc;
}

label {
  color: #060606;
  display: block;
  margin-bottom: 5px;
  font-family: "Courier New", Courier, monospace;
  font-size: 22px;
}

input {
  font-family: "Courier New", Courier, monospace;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 25px;
}

input:focus {
  outline: 2px solid black;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 30px;
}

button {
  font-family: "Aboreto", display;
  font-size: 20px;
  background-color: rgb(212, 215, 216);
  border-radius: 6px;
  border-color: black;
  color: rgb(6, 5, 5);
  cursor: pointer;
  transition: box-shadow 0.5s ease;
  width: 330px;
}
button:hover {
  box-shadow: 0px 0px 10px 3px rgb(3, 3, 3);
}
</style>
