<template>
  <div>
    <h3>{{ titleMap }}</h3>
    <iframe
      :src="googleMaps"
      width="770"
      height="728"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
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
      googleMaps:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.8994050230262!2d-46.778048990577396!3d-23.4400447481186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefcf9ff046bed%3A0xbba599a8eb55ab4!2sAlameda%20Aristotenes%20Claudio%20Sbrigh%2C%20923%20-%20Vila%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005282-000!5e1!3m2!1spt-BR!2sbr!4v1622959672281!5m2!1spt-BR!2sbr',
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

<style>
h3 {
  background: red;
}
</style>
"
