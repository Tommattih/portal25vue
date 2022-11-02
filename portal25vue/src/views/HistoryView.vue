"
<template>
  <div>
    <h3>{{ title }}</h3>
    <img :src="image" :alt="imageAlt" />
    <h5>O Movimento por Moradia</h5>
    <p>{{ text }}</p>
    <h5>A Aprovação</h5>
    <p>burocracia a luta</p>
    <p>cetesb</p>
    <p>graprohab</p>
    <p>aprovacao daa plantas</p>
    <p>projeto de lei</p>
    <h5>A Abertura de ruas</h5>
    <p>
      No dia *** foi publicado no diário oficial d* *** de São Paulo a portaria
      nº**** que deu nome as ruas (visualize na íntegra em Links úteis)
    </p>
    <p>
      Na reunião do dia 3/12/2021 os associados da 25ª área foi liberado o
      início das construções.
    </p>
    <h5>A Infrestrutura</h5>
    <p><strong>Água e Esgoto</strong></p>
    <p><strong>Luz</strong></p>
    <p><strong>Asfalto</strong></p>
    <p><strong>Educação</strong></p>
    <p><strong>Segurança</strong></p>
    <p><strong>Saúde</strong></p>
    <p><strong>Lazer</strong></p>
  </div>
</template>

<script>
export default {
  name: 'HistoryView',
  data() {
    return {
      title: 'Como tudo começou',
      image: '/img/keyframe/ico-pvsn-25-keyframe.png',
      imageAlt: 'uma imagem',
      text: 'lorem...'
    }
  }
}
</script>

<style scoped>
h3 {
  background: blueviolet;
}
img {
  max-width: 100vh;
  padding: 1rem;
  border: solid 2px yellow;
}
</style>
"
