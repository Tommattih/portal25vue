<template>
  <div class="home">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <!-- Comentado para visualizar, uma vez que o Eslint e o Prettier não gostam de mim e ainda tenho que entender melhor sobre rotas -->

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import PortalHeader from "@/components/header/PortalHeader.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    PortalHeader,
    // HelloWorld,
  },
};
</script>
