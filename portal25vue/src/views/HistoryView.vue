<template>
  <div>
    <HistoryContent />
    <AsideContent imgSrc="/img/asideIcons/ico-history-page.png" />

    <!-- <aside-content>
      <img
        slot="focusimage"
        src=""
        alt="history-icon"
    /></aside-content> -->
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
