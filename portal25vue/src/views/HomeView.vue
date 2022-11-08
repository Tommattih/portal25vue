<template>
  <div id="home">
    <div>
      <NewsContent class="boxContent mb-2" />
      <HistoryContent />
    </div>
    <AsideContent />
  </div>
</template>

<script>
// @ is an alias to /src
import AsideContent from '@/components/aside/AsideContent.vue'
import NewsContent from '@/components/main/NewsContent.vue'
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
