<template>
  <div>
    <MapDirections class="boxContent" />
    <AsideContent imgSrc="/img/asideIcons/ico-maps-page.png" />
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
