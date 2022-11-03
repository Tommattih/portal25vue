<template>
  <div>
    <h3>{{ titleMap }}</h3>
    <a :href="googleMaps">
      <img :src="mapSat" alt="" />
      <img :src="mapDraw" alt="" />
    </a>
    <h5>Pontos de Referencia de Carro U+1F698</h5>
    <p v-for="refpoint in nearby" :key="refpoint.id">
      {{ refpoint.refPoints }}
    </p>
    <h5>Pontos de Referencia de Ônibus U+1F68D</h5>
    <p>...</p>
    <div class="localMaps">
      <img
        :src="StreetsMap"
        alt="Traçado de delimitação estimado das ruas do loteamento"
      />
      <img
        :src="BlocksMap"
        alt="link para download da planta completa em PDF"
      />
      <h5>Quadras</h5>
      <ul class="blocksDetails">
        <li>48x</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapsView',
  data() {
    return {
      titleMap: 'Como Chegar',
      mapSat: '/img/mapSat.png',
      mapDraw: '/img/mapDraw.png',
      googleMaps: 'https://goo.gl/maps/28BABSX6SCNMPUGHA',
      StreetsMap:
        'https://drive.google.com/file/d/1lHwLix3QFvup7qz5IQ5og_p8BoiybZCH/view?usp=sharing',
      BlocksMaps:
        'https://drive.google.com/file/d/1wL5JUv5JAPpUlpp-GnHNbZOoNuwSLM2y/view?usp=sharing',
      nearby: [
        { id: 1, refPoints: 'SP-021, Rodoanel Mario Covas' },
        { id: 2, refPoints: 'Cemitério do Jaraguá' },
        { id: 3, refPoints: 'BR-050, Parque São Domingos' },
        { id: 4, refPoints: 'KM-24, Rodovia Anhanguera' },
        { id: 5, refPoints: 'Nas proximidades do Pico do Jaraguá' },
        { id: 6, refPoints: 'Terminal Jardim Britânia' }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: fit-content;
  height: 40vh;
  padding-bottom: 1rem;
}
</style>
