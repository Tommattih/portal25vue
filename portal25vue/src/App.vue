<template>
  <div id="app" :class="colorMode">
    <NavBar />
    <!-- to toggle theme -->
    <div class="lightButton">
      <transition name="appear">
        <img
          v-if="isDark"
          @click="changeColor()"
          src="img/navItens/button-moon.png"
          alt="icon-moon"
          height="40"
        />
      </transition>
      <transition name="appear">
        <img
          v-if="!isDark"
          @click="changeColor()"
          src="img/navItens/button-sun.png"
          alt="icon-sun"
          height="40"
        />
      </transition>
    </div>
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <div>
      <router-view class="content" />
    </div>
    <footer class="mt-2">
      <p @click="clicou()" class="mb-0 pb-2">
        PVSN25 &copy; M.T. Lins - Brasil - 2022
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/header/NavBar.vue'
import PortalHeader from '@/components/header/PortalHeader.vue'
export default {
  name: 'HomeView',
  components: {
    PortalHeader,
    NavBar
  },
  data() {
    return {
      isDark: true,
      colorMode: ''
    }
  },
  methods: {
    changeColor() {
      this.isDark = !this.isDark
      if (this.isDark) {
        return (this.colorMode = 'dark')
      } else {
        return (this.colorMode = '')
      }
    }
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0.5rem;
}
::-webkit-scrollbar-track {
  background: var(--font-color);
}
::-webkit-scrollbar-thumb {
  background: var(--bg-color);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--font-color2);
}
:root {
  --font-color: #f3f7e0;
  --font-color1: #2c3e50;
  --font-color2: #262b05;

  --bg-color: #606639;
  --bg-h3-color: #344322;
  --bg-section-color: #f3f2ed;
  --bg-base-color: #a6ac7f;
  --bg-base-color1: #a6ac7fcc;
  --bg-base-color2: #f0f0e1;
  --bg-base-color3: #f4f7e399;

  --shaddow-button: -1px 1px 5px rgba(45, 61, 37, 0.52);

  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}

.dark {
  /* padronizar e corrigir nomes */
  --bg-color: #343819;
  --font-color1: #bbd1e4;
  --font-color2: #00447c;
  --font-nav-active: rgb(89, 247, 255);
  --bg-section-color: #1e1e1e;
  --bg-base-color: #ff00fb;
  --bg-base-color1: #000;
  --bg-base-color2: #06152cea;
  --bg-base-color3: #0e2038da;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color1);
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--bg-base-color);
  background: linear-gradient(
    90deg,
    var(--bg-base-color1) 0%,
    var(--bg-base-color2) 1%,
    var(--bg-base-color3) 99%,
    var(--bg-base-color1) 100%
  );
}
.content {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}
.boxContent {
  width: 100%;
  // border: 2px dotted #60663962;
  border: 2px dashed rgb(60 60 40 / 15%);
  display: flex;
  flex-direction: column;
  background: var(--bg-section-color);
  margin-bottom: 0.25rem;
  padding: 0 1rem;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
  box-shadow: 1px 2px 2px #344322;
}

h4 {
  background-color: #0004;
  border-radius: 0.5rem;
  // font-size: 1.25rem;
}
nav {
  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--font-color);
    transition: 0.3s;

    &.router-link-exact-active {
      color: rgba(0, 40, 0, 0.5);
      background: none;
    }
    a:hover {
      color: var(--font-color1);
      background: var(--font-color);
      border: 2px dashed var(--bg-color);
      border-radius: 25%;
      padding: 0.5em;
    }
  }
}
h1,
.bg-color,
.header,
.boxContent {
  box-shadow: -1px 2px 4px rgba(45, 61, 37, 0.52);
}

// MOBILE
@media only screen and (max-width: 768px) {
  .content {
    gap: 0.25rem;
    margin: 0;
    padding: 0.5rem;
    align-items: flex-start;
  }
}
</style>
