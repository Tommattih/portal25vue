<template>
  <div>
    <HistoryContent />
    <AsideContent imgSrc="/img/asideIcons/ico-history-page.png" />
  </div>
</template>

<script>
import HistoryContent from '@/components/main/HistoryContent.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'HistoryView',
  components: {
    HistoryContent,
    AsideContent
  }
}
</script>
