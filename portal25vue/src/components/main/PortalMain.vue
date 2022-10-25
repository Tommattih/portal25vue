<template>
  <div class="boxContent">
    <!-- import other component to render infoSelected -->
    <h3>{{ title }}</h3>
    <p>
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PortalMain',
  props: {
    title: String,
    info: String
  }
}
</script>
<style scoped>
.boxContent {
  width: 80%;
  border: 1px dotted #60663962;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
}
</style>
