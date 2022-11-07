<template>
  <div id="app">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <div class="content">
      <div id="renderRoutes">
        <router-view class="boxContent" />
      </div>
      <AsideContent />
    </div>
    <footer>
      <p @click="clicou()" class="mb-0 pb-2">M.T. Lins - Brasil - 2022</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import PortalHeader from '@/components/header/PortalHeader.vue'
import AsideContent from '@/components/aside/AsideContent.vue'

export default {
  name: 'HomeView',
  components: {
    PortalHeader,
    AsideContent
  },
  data() {
    return {
      news: true,
      history: 'false',
      maps: 'false',
      environment: 'false',
      blueprints: 'false',
      services: 'false',
      faq: 'false',
      clicou: () => {
        alert('wahoo')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background: rgb(166, 172, 127);
  background: linear-gradient(
    90deg,
    rgba(166, 172, 127, 0.8) 0%,
    rgba(237, 240, 225, 1) 2%,
    rgba(244, 247, 227, 0.686) 98%,
    rgba(166, 172, 127, 0.8) 100%
  );
  /* use in dark
  background: rgb(63, 57, 102);
  background: linear-gradient(
    14deg,
    rgba(63, 57, 102, 1) 0%,
    rgb(43, 43, 61) 50%,
    rgb(51, 51, 77) 100%
  ); */
}
.content {
  width: 100vw;
  display: inline-flex;
  padding: 0.5rem;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.5rem;
}
.boxContent {
  border: 1px dotted #60663962;
  width: 100%;
  margin-bottom: 1rem;
  // padding: 0 1rem; funciona se o h3 ficar fora da div
}
#renderRoutes {
  min-width: 75%;
  max-width: 90%;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
  box-shadow: 1px 2px 2px #2c3e50;
}
nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    // color: #2c502c;
    color: var(--font-color);
    transition: 0.3s;

    &.router-link-exact-active {
      color: rgba(0, 40, 0, 0.5);
      background: none;
    }
    a:hover {
      color: var(--font-color1);
      background: rgba(184, 135, 11, 0.75);
      border: 1px dashed var(--font-color);
      border-radius: 10px;
      padding: 0.5rem;
      /*only desktop*/
    }
  }
}
p {
  padding: 0 0.5rem;
}
</style>
