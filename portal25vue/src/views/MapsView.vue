<template>
  <div class="rotas">
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <p>{{ textNews }}</p>
  </div>
</template>

<script>
export default {
  name: 'DirectionsView',
  data() {
    return {
      titleSection: 'Loteamento & Quadras',
      titleNews: 'um título',
      textNews: 'lorembla bla bla...'
    }
  }
}
</script>
