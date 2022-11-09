<template>
  <div>
    <AreaRefs class="boxContent" />
    <AsideContent imgSrc="/img/asideIcons/ico-plants-page.png" />
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
