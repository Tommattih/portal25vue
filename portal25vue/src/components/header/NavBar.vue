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
          <b-nav-item href="#">Notícias</b-nav-item>
          <b-nav-item href="#">História</b-nav-item>
          <b-nav-item href="#">Rotas</b-nav-item>
          <b-nav-item href="#">DoBem</b-nav-item>
          <b-nav-item href="#">Planta</b-nav-item>
          <b-nav-item href="#"
            ><router-link to="/mapas">Mapas</router-link></b-nav-item
          >

          <b-nav-item href="#" disabled>Serviços</b-nav-item>
          <b-nav-item href="#" disabled>Dúvidas</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- to toggle theme -->
      <div class="form-check form-switch mx-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"> </label>
        <!-- <v-else:"" label class="form-check-label" for="flexSwitchCheckDefault"
          ><b-icon icon="lightbulb-on" aria-hidden="true"></b-icon
        ></label> -->
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
