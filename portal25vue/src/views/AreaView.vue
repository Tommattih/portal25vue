<template>
  <div>
    <AreaRefs class="boxContent" />
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-plants-page.png"
        alt="mapa-local"
    /></aside-content>
  </div>
</template>

<script>
import AreaRefs from '@/components/main/AreaRefs.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'AreaView',
  components: {
    AreaRefs,
    AsideContent
  }
}
</script>

<style></style>
