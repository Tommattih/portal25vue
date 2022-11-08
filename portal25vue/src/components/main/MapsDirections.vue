<template>
  <div id="maps">
    <div class="">
      <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.8994050230262!2d-46.778048990577396!3d-23.4400447481186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefcf9ff046bed%3A0xbba599a8eb55ab4!2sAlameda%20Aristotenes%20Claudio%20Sbrigh%2C%20923%20-%20Vila%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005282-000!5e1!3m2!1spt-BR!2sbr!4v1622959672281!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
      <h3>Como Chegar</h3>
      <div>
        <img
          v-if="isMap"
          @click="changeMap()"
          :src="mapDraw"
          alt="map-top-2d"
        />
        <img v-else @click="changeMap()" :src="mapSat" alt="map-top-satelite" />
      </div>
      <h5>Pontos de referência</h5>
      <p>SP-021, Rodoanel Mario Covas</p>
      <p>Cemitério do Jaraguá</p>
      <p>BR-050, Parque São Domingos</p>
      <p>KM-24, Rodovia Anhanguera</p>
      <p>Nas proximidades do Pico do Jaraguá</p>
      <p>Terminal Jardim Britânia</p>

      <h5>Transporte Público</h5>
      <p>
        Se você não tem carro, não tem problema, também é possível chegar de
        ônibus.
        <strong
          >Estas são algumas das opções mais próximas ao loteamento:</strong
        >
      </p>
      <p>
        <strong>-> </strong> Ponto de parada, Al. Aristóteles Claudio Sbrighi,
        20 / Final
      </p>
      <p>
        Linha 8040-10 Lapa / Sol Nascente<a
          href="https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-8040_10-Sao_Paulo-242-10224-611285-0"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 1019-10 Terminal Pirituba / Sol Nascente
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/1019-10/577477/2253663/pt-br?customerId=4908&ref=2&poiType=line"
          >(Detalhes)</a
        >.
      </p>

      <p>
        <strong>Outras linhas nas proximidades</strong> <br /><strong
          >->
        </strong>
        Ponto de parada, BR-050, 1572 (+15min a pé)
      </p>
      <p>
        Linha 119L-10 Term. Lapa / Vl. Sulina
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/119L-10/181322/4542097/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8013-10 Lapa / Term. Jardim Britânia
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8013-10/698434/2963017/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8050-10 Lapa / Pq. Morro Doce
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8050-10/182336/564298/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8050-31 Lapa / Pq. Morro Doce
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8050-31/25111644/4542057/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8055-10 Lapa / Perus
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8055-10/182340/564304/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8055-51 Metrô Barra Funda / Perus
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8055-51/505434/1893702/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
      <p>
        Linha 8622-10 Pça. Ramos de Azevedo / Morro Doce
        <a
          href="https://moovitapp.com/sao_paulo-242/lines/8622-10/505490/1893799/pt-br?customerId=4908&ref=1&poiType=stop"
          >(Detalhes)</a
        >.
      </p>
    </div>
    <!-- outro modo -->
    <!-- <div class="">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MapsDirections',
  //outro modo
  data() {
    return {
      titleMap: 'Como Chegar',
      mapSat: '/img/mapSat.png',
      mapDraw: '/img/mapDraw.png',
      googleMaps: 'https://goo.gl/maps/28BABSX6SCNMPUGHA',
      nearby: [
        { id: 1, refPoints: 'SP-021, Rodoanel Mario Covas' },
        { id: 2, refPoints: 'Cemitério do Jaraguá' },
        { id: 3, refPoints: 'BR-050, Parque São Domingos' },
        { id: 4, refPoints: 'KM-24, Rodovia Anhanguera' },
        { id: 5, refPoints: 'Nas proximidades do Pico do Jaraguá' },
        { id: 6, refPoints: 'Terminal Jardim Britânia' }
      ],
      isMap: false
    }
  },
  methods: {
    changeMap() {
      this.isMap = !this.isMap
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
  padding-bottom: 1rem;
}
h5 {
  background: #ccc;
  padding: 0.25rem 0;
}
</style>
