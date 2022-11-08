<template>
  <div class="header">
    <NavBar />
    <div class="areaInfo">
      <img
        class="logoHeader mobileHidden"
        alt="Portal Logo"
        src="/img/ico-pvsn-25.png"
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
}
</script>

<style>
:root {
  --bg-color: #606639;
  --font-color2: #262b05;
  --font-color: #f3f7e0;
  box-sizing: border-box;
}

.header {
  background-image: url('/public/img/bg-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: max-content;
}
.areaInfo {
  margin-top: 3.3rem;
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
@media only screen and (max-width: 768px) {
  .mobileHidden {
    display: none;
  }
}
</style>
