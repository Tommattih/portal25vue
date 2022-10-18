<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Notícias</b-nav-item>
          <b-nav-item href="#">História</b-nav-item>
          <b-nav-item href="#">Rotas</b-nav-item>
          <b-nav-item href="#">DoBem</b-nav-item>
          <b-nav-item href="#">Planta</b-nav-item>
          <b-nav-item href="#" disabled>Serviços</b-nav-item>
          <b-nav-item href="#" disabled>Dúvidas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" right>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" disabled></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" disabled>Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
