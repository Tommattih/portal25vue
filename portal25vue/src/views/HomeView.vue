<template>
  <div class="home">
    <NewsContent
      ><h3>humm bla</h3>
      <p>nova noticia</p></NewsContent
    >
    <HistoryView />
  </div>
</template>

<script>
// @ is an alias to /src
// import AsideImage from '@/components/main/AsideImage.vue'
import NewsContent from '@/components/main/News.vue'

export default {
  name: 'HomeView',
  components: {
    NewsContent
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
