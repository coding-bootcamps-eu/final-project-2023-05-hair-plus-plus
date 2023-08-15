<template>
  <div class="contact-form">
    <h1>Kontaktformular</h1>
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
        <label for="kundenNr">Kundennr.:</label>
        <input v-model="kundenNr" type="text" id="kundenNr" />
      </div>
      <div class="form-group">
        <label for="adresse">Adresse:</label>
        <input v-model="adresse" type="text" id="adresse" />
      </div>
      <div class="form-group">
        <label for="geburtstag">Geburtstag:</label>
        <input v-model="geburtstag" type="date" id="geburtstag" />
      </div>
      <div class="form-group">
        <label for="tel">Tel.:</label>
        <input v-model="tel" type="tel" id="tel" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
    </form>
    <div class="button-container">
      <button @click="routeToStartPage">Zurück</button>
      <button type="submit">Absenden</button>
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
      kundenNr: "",
      adresse: "",
      geburtstag: "",
      tel: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      console.log(
        "Formulardaten:",
        this.name,
        this.vorname,
        this.kundenNr,
        this.adresse,
        this.geburtstag,
        this.tel,
        this.email
      );
    },
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
