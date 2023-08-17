<template>
  <div class="customer-container">
    <h2>Placeholder</h2>
    <ul>
      <li v-for="customer in customerStore" :key="customer"></li>
    </ul>
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

<style scoped>
h2 {
  color: pink;
}
</style>
