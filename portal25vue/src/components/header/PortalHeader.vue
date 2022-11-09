<template>
  <div class="header">
    <img
      class="logoHeader mobileHidden"
      alt="Portal Logo"
      src="/img/ico-pvsn-25.png"
    />
    <div class="areaInfo">
      <h2 class="mb-0 pt-2">Portal da {{ numberArea }}ª Área</h2>
      <h1 class="mb-0">{{ nameArea }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortalHeader',
  props: {
    numberArea: String,
    nameArea: String
  }
}
</script>

<style scoped>
.header {
  background-image: url(https://tommattih.github.io/portal-25-pvsn/img/sabesptube.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  margin-top: 3.3rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
img.logoHeader {
  width: 6rem;
}
h1,
h2 {
  background-color: var(--bg-color);
  color: var(--font-color);
  width: fit-content;
  padding: 0 0.5rem;
}
h1 {
  -webkit-border-radius: 30px;
  -webkit-border-top-left-radius: 0;
  -moz-border-radius: 30px;
  -moz-border-radius-topleft: 0;
  border-radius: 30px;
  border-top-left-radius: 0;
}
h2 {
  -webkit-border-top-left-radius: 30px;
  -webkit-border-top-right-radius: 30px;
  -moz-border-radius-topleft: 30px;
  -moz-border-radius-topright: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
@media only screen and (max-width: 728px) {
  .mobileHidden {
    display: none;
  }
  .header {
    margin-top: 3rem;
  }
  .areaInfo {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
