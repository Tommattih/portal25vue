<template>
  <div class="headerInfo">
    <NavBar />
    <h2>Portal da {{ numberArea }}ª Área</h2>
    <h1>{{ nameArea }}</h1>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "PortalHeader",
  props: {
    numberArea: String,
    nameArea: String,
  },
  components: {
    NavBar,
  },
};
</script>

<style>
:root {
  --bg-color: #5d7545;
  --font-color: #f3f7e0;
}

h2 {
  font-size: 1.5rem;
  background-color: var(--bg-color);
  color: var(--font-color);
}

h1 {
  font-size: 2.5rem;
  background-color: var(--bg-color);
  color: var(--font-color);
}
</style>
