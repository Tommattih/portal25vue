<template>
  <div class="home">
    <PortalHeader numberArea="25" nameArea="Parque Vitória do Sol Nascente" />
    <!-- Comentado para visualizar, uma vez que o Eslint e o Prettier não gostam de mim e ainda tenho que entender melhor sobre rotas -->
    <div class="content">
      <PortalMain
        title="Any info"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor, facilis nulla vel, nam laboriosam temporibus culpa non asperiores aperiam quis atque sit placeat eum commodi ea quia, voluptatem suscipit."
      />
      <AsideContent />
    </div>
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
  }
}
</script>

<style>
.home {
  overflow-x: hidden;
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
