<template>
  <div class="home">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
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
  min-height: 100vh;
  background: rgb(166, 172, 127);
  background: linear-gradient(
    90deg,
    rgba(166, 172, 127, 0.8) 0%,
    rgba(237, 240, 225, 1) 2%,
    rgba(244, 247, 227, 1) 98%,
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
  display: inline-flex;
  padding: 0.5rem;
  margin: 0 0.5rem;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.5rem;
}
</style>
