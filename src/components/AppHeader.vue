<template>
  <div class="header-container">
    <router-link id="router-logo" to="/">
      <h1 class="logo">Hair++</h1>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  font-family: "Aboreto", display;
  font-size: var(--ueberschrift-groesse, 60px);
  color: var(--ueberschrift-farbe, rgb(251, 251, 249));
}

#router-logo {
  text-decoration: none;
  color: black;
}

.logo:hover {
  color: rgb(6, 6, 6);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.header-container {
  position: fixed;
  left: 0;
  margin-top: -60px;
  padding: 25px;
}
</style>
