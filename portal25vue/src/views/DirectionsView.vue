<template>
  <div>
    <MapDirections class="boxContent" />
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-maps-page.png"
        alt="maps-icon"
    /></aside-content>
  </div>
</template>
<script>
import MapDirections from '@/components/main/MapsDirections.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'DirectionsView',
  components: {
    MapDirections,
    AsideContent
  }
}
</script>
