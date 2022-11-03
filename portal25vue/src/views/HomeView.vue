<template>
  <div class="home">
    <PortalMain
      title="Any info"
      info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor, facilis nulla vel, nam laboriosam temporibus culpa non asperiores aperiam quis atque sit placeat eum commodi ea quia, voluptatem suscipit."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PortalMain from '@/components/main/PortalMain.vue'

export default {
  name: 'HomeView',
  components: {
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
