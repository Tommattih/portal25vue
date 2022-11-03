"
<template>
  <div>
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <img :src="imageNews" :alt="imageNewsAlt" />
    <p>{{ textNews }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsContent',
  data() {
    return {
      titleSection: 'News',
      titleNews: 'uma manchete',
      imageNews: '/img/keyframe/ico-pvsn-25-keyframe.png',
      imageNewsAlt: 'uma imagem',
      textNews: 'lorem...'
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100vh;
  padding: 1rem;
  border: solid 2px yellow;
}
</style>
"
