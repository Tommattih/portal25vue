<template>
  <div>
    <b-navbar toggleable="lg" class="py-1 px-2 bg-color" type="dark">
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
            ><router-link to="/mapa-local"
              ><b-icon-map class="me-1"></b-icon-map>Local</router-link
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
          <b-nav-item
            ><router-link to="/duvidas"
              ><b-icon-question-circle class="me-1"></b-icon-question-circle
              >Dúvidas</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
a.nav-link:hover {
  color: var(--font-color1);
}
.bg-color {
  background-color: var(--bg-color);
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
}
.navbar-expand-lg .navbar-collapse {
  justify-content: space-between; /*? space-between faz algo muito especifico, acho q com o botão de modo*/
}
</style>
