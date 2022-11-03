<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="py-1 px-2"
      type="dark"
      style="background-color: #606639"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- using 'routes' instead of 'href="#"'(removed) -->
          <b-nav-item
            ><router-link to="/"
              ><b-icon-house class="me-1"></b-icon-house>Início</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/historia"
              ><b-icon-book class="me-1"></b-icon-book>História</router-link
            ></b-nav-item
          >
          <!-- 'href="#"' / pattern from bootstrap navBar docs -->
          <b-nav-item href="#"
            ><router-link to="/do-bem"
              ><b-icon-recycle class="me-1"></b-icon-recycle>DoBem</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/mapas"
              ><b-icon-map class="me-1"></b-icon-map>Mapas</router-link
            ></b-nav-item
          >

          <b-nav-item
            ><router-link to="/como-chegar"
              ><b-icon-pin-map class="me-1"></b-icon-pin-map>Rotas</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/servicos"
              ><b-icon-tools class="me-1"></b-icon-tools>Serviços</router-link
            ></b-nav-item
          >
          <b-nav-item disabled
            ><router-link to="/duvidas"
              ><b-icon-question-circle class="me-1"></b-icon-question-circle
              >Dúvidas</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <!-- to toggle theme -->
      <div class="mx-3">
        how can I do it?
        <img @click="changeColor()" :src="colorMode" alt="" width="50" />
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      colorMode: '/img/navItens/button-moon.png',
      changeColor: () => {
        /*quase funciona, vai mas nao volta*/
        this.colorMode = 'img/navItens/button-sun.png'
        console.log('trocou')
        // this.colorMode = 'img/navItens/button-moon.png'
        // this.setMode = !this.setMode
      }
    }
  }
}
</script>
<style scoped>
a.nav-link:hover {
  color: var(--font-color1);
}
</style>
