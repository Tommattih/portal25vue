"
<template>
  <div>
    <h3>{{ titleNews }}</h3>
    <img :src="imageNews" :alt="imageNewsAlt" />
    <p>{{ textNews }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data() {
    return {
      titleNews: 'uma manchete',
      imageNews: '/img/keyframe/ico-pvsn-25-keyframe.png',
      imageNewsAlt: 'uma imagem',
      textNews: 'lorem...'
    }
  }
}
</script>

<style scoped>
h3 {
  background: blue;
}
img {
  max-width: 100vh;
  padding: 1rem;
  border: solid 2px yellow;
}
</style>
"
