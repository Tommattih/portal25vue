<template>
  <div>
    <HistoryContent />
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-history-page.png"
        alt="history-icon"
    /></aside-content>
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
