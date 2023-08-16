<template>
  <div class="contact-form">
    <h1>Kundendaten</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="vorname">Vorname:</label>
        <input v-model="vorname" type="text" id="vorname" required />
      </div>
      <div class="form-group">
        <label for="strasse">Straße:</label>
        <input v-model="strasse" type="text" id="strasse" />
      </div>
      <div class="form-group">
        <label for="plz">Plz:</label>
        <input v-model="plz" type="text" id="plz" />
      </div>
      <div class="form-group">
        <label for="stadt">Stadt:</label>
        <input v-model="stadt" type="text" id="stadt" />
      </div>
      <div class="form-group">
        <label for="geburtstag">Geburtstag:</label>
        <input v-model="geburtstag" type="date" id="geburtstag" />
      </div>
    </form>
    <div class="button-container">
      <button @click="routeToStartPage">Zurück</button>
      <button @click="submitForm">Speichern</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
      name: "",
      vorname: "",
      strasse: "",
      plz: "",
      stadt: "",
      geburtstag: "",
    };
  },
  methods: {
    submitForm() {
      console.log(
        "Formulardaten:",
        this.name,
        this.vorname,
        this.strasse,
        this.plz,
        this.stadt,
        this.geburtstag
      );
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
        .then((req) => req.json())
        .then((request) => {
          console.log(request);
        });
    },
    sendDataToApi() {},
    routeToStartPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.contact-form {
  color: #ccc;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
  color: #ccc;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.button-container {
  display: flex;
  gap: 200px;
}
button {
  padding: 8px 15px;
  background-color: rgb(88, 91, 112);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
