"
<template>
  <div>
    <h3>{{ titleFaq }}</h3>
    <p>{{ textFaq }}</p>
    <ul>
      <li class="ask">
        <img :src="imageFaq" :alt="imageFaqAlt" />
        <p>lorem...</p>
      </li>
      <li>...</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      titleFaq: 'Perguntas Frequentes',
      imageFaq: '/img/keyframe/ico-pvsn-25-keyframe.png',
      imageFaqAlt: 'um avatar',
      textFaq: 'lorem...'
    }
  }
}
</script>

<style scoped>
h3 {
  background: cyan;
}
img {
  width: 3rem;
}
</style>
"
