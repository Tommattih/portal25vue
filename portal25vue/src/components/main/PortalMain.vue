<template>
  <div class="boxContent">
    <!-- import other component to render infoSelected -->
    <h3>{{ title }}</h3>
    <p>
      {{ info }}
    </p>
    <mapsDirections />
    <!-- just to test view -->
  </div>
</template>

<script>
import MapsDirections from './Maps.vue'
export default {
  name: 'PortalMain',
  props: {
    title: String,
    info: String
  },
  components: {
    MapsDirections
  }
}
</script>
<style scoped>
.boxContent {
  border: 1px dotted #60663962;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
}
</style>
