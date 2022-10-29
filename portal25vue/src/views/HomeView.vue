<template>
  <div class="home">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <!-- Comentado para visualizar, uma vez que o Eslint e o Prettier não gostam de mim e ainda tenho que entender melhor sobre rotas -->
    <div class="content">
      <PortalMain
        title="Any info"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor, facilis nulla vel, nam laboriosam temporibus culpa non asperiores aperiam quis atque sit placeat eum commodi ea quia, voluptatem suscipit."
      />
      <AsideContent class="" />
    </div>
    <p @click="clicou()" class="mb-0 pb-2">M.T. Lins - Brasil - 2022</p>
  </div>
</template>

<script>
// @ is an alias to /src
import PortalHeader from '@/components/header/PortalHeader.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
import PortalMain from '@/components/main/PortalMain.vue'

export default {
  name: 'HomeView',
  components: {
    PortalHeader,
    AsideContent,
    PortalMain
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

<style>
.home {
  overflow-x: hidden;
  max-width: 100vw;
  background: #606639;
  background: linear-gradient(
    180deg,
    rgba(96, 102, 57, 1) 0%,
    rgba(243, 247, 224, 1) 12%,
    rgba(237, 241, 217, 1) 75%,
    rgb(166, 172, 127) 100%
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
  display: inline-flex;
  padding: 0.5rem;
  margin: 0 0.5rem;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.5rem;
}
</style>
