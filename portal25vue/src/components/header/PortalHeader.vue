<template>
  <div class="header">
    <NavBar />
    <!-- <img class="my-2" alt="Portal Logo" :src="`@/assets/img/${imageLogo}.png`" /> -->
    <div class="areaInfo">
      <img
        class="logoHeader"
        alt="Portal Logo"
        src="@/assets/img/ico-pvsn-25.png"
      />
      <div>
        <h2 class="text-start px-3 pt-1 ms-3 mb-0 fs-3">
          Portal da {{ numberArea }}ª Área
        </h2>
        <h1 class="text-start px-3 mx-3 mb-3 fs-1">{{ nameArea }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/header/NavBar.vue'
export default {
  name: 'PortalHeader',
  props: {
    numberArea: String,
    nameArea: String
  },
  components: {
    NavBar
  }
  // data() {
  //   return {
  //     imageLogo: "ico-pvsn-25",
  //   };
  // },
}
</script>

<style>
:root {
  --bg-color: #606639;
  --font-color: #f3f7e0;
  box-sizing: border-box;
}

.header {
  background-image: url(@/assets/img/bg-header.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: max-content;
}
.areaInfo {
  margin-top: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-end;
}
img.logoHeader {
  width: 6rem;
  margin: 0 0 0.75rem 4rem;
}
h1,
h2 {
  background-color: var(--bg-color);
  color: var(--font-color);
  width: max-content;
}
</style>
