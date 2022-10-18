<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
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
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
