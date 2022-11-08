<template>
  <div id="app">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <div>
      <router-view class="content" />
    </div>
    <footer class="mt-2">
      <p @click="clicou()" class="mb-0 pb-2">M.T. Lins - Brasil - 2022</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import PortalHeader from '@/components/header/PortalHeader.vue'
export default {
  name: 'HomeView',
  components: {
    PortalHeader
    // AsideContent
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
* {
  list-style: none;
}
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
}
.content {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
  margin: 0.75rem;
}
.boxContent {
  width: 100%;
  // border: 2px dotted #60663962;
  border: 2px dashed rgb(60 60 40 / 15%);
  display: flex;
  flex-direction: column;
  // box-shadow: 2px 0px 16px #34432290;

  // background: #fff;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
  box-shadow: 1px 2px 2px #344322;
}
nav {
  padding: 30px; //o q faz?

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

@media only screen and (max-width: 768px) {
  .content {
    gap: 0.25rem;
    margin: 0;
    padding: 0.5rem;
    align-items: flex-start;
  }
}
</style>
