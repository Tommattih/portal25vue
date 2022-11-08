<template>
  <div id="home">
    <div class="boxContent">
      <NewsContent
        ><h3>humm bla</h3>
        <p>nova noticia</p></NewsContent
      >
      <HistoryContent />
    </div>
    <AsideContent />
  </div>
</template>

<script>
// @ is an alias to /src
import AsideContent from '@/components/aside/AsideContent.vue'
import NewsContent from '@/components/main/News.vue'
import HistoryContent from '@/components/main/HistoryContent.vue'
export default {
  name: 'HomeView',
  components: {
    AsideContent,
    NewsContent,
    HistoryContent
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
