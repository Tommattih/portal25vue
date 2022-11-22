<template>
  <div id="home">
    <div>
      <NewsContent :newsData="newsData" class="boxContent mb-2" />
      <HistoryContent />
    </div>
    <AsideContent imgSrc="/img/asideIcons/medal-pvsn.png" />
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
      newsData: {
        titleSection: 'Notícias',
        titleNews: 'Resumo da reunião - 21/08/2021',
        imageNews: 'https://tommattih.github.io/portal-25-pvsn/img/sabesp.svg',
        imageNewsAlt: 'uma imagem',
        textNews: 'lorem...'
      },
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
