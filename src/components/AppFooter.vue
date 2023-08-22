<template>
  <div class="footer-container">
    <footer>
      <div class="footer-content">
        <span>Copyright © 2023 HAIR++</span>
        <router-link class="router-design" to="/impressum"
          >Impressum
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-container {
  border-top: 1px solid rgb(34, 31, 31);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  font-family: "Aboreto", display;
  background-color: rgb(220, 214, 210);
}

.footer-content {
  width: 50%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}

.router-design {
  margin-left: auto;
  text-decoration: none;
  color: black;
}

.router-design:hover {
  text-decoration: underline;
}

span {
  transform: translateX(-50%);
}
</style>
