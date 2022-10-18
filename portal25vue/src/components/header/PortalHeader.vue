<template>
  <div class="headerInfo pb-2">
    <NavBar />
    <img class="my-2" alt="Portal Logo" src="@/assets/img/ico-pvsn-25.png" />
    <h2 class="text-start px-2 ms-3 fs-3">Portal da {{ numberArea }}ª Área</h2>
    <h1 class="text-start px-2 mx-3 mb-1 fs-1">{{ nameArea }}</h1>
  </div>
</template>

<script>
import NavBar from "@/components/header/NavBar.vue";
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

.headerInfo {
  background-image: url(@/assets/img/bg-header.png);
  background-repeat: no-repeat;
  background-size: cover;
}

h1,
h2 {
  background-color: var(--bg-color);
  color: var(--font-color);
  width: max-content;
}
</style>
