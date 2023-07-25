<script setup>

</script>

<template>
  <header class="header">
    <div class="container">
      <button class="header__btn-popup">
        <img alt="Location SVG Icon" src="public/Location.svg">
        <span>Новосибирск</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 4.5rem;
  min-width: 100%;
  background-color: white;
}

.header__btn-popup {
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.header__btn-popup img {
  margin-right: 8px;
}
</style>
