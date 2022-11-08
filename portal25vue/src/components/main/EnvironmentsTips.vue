<template>
  <div id="environment">
    <h3>{{ titleSection }}</h3>
    <p>{{ textNews }}</p>
    <h5>Ter um bairro modelo é possível</h5>
    <p>
      Todos nós sonhamos com uma vizinhança bonita, agradável, limpa e feliz.
    </p>
    <p>
      <strong
        >Mas como isso pode ser possível na situação atual financeira do
        país?</strong
      >
      A resposta está na boa e velha <em>comunicação</em>.
    </p>
    <p>
      Existe no mercado da construção civil vários métodos construtivos mais
      eficientes e práticos do que a alvenaria convencional, como
      <em>Steal frame</em>, <em>Placas cimentícias</em> ou o robusto, leve e
      versátil
      <em
        ><a
          href="https://www.youtube.com/watch?v=h5ldHzN-Lss&list=PLwvRgC3mvx5O5TAA4nDsGpRcZtQ7quV2J&index=24&t=727s"
          >EPS</a
        ></em
      >.
    </p>
    <!-- unir vídeos técnicos e informativos e trocar o link para uma playlist específica-->
    <p>
      Para decorar e dar um charme todo especial para sua casa, também é
      possível apostar em pomares e hortas em vasos,
      <em>jardins de inverno</em>, ou mesmo um <em>telhado verde</em> para
      agregar uma área permeável com estilo.
    </p>
    <p>
      Por último, mas não menos importante, com o crescente aumento das taxas
      cobradas pelas operadoras de energia elétrica, que tal optar por painéis
      fotovoltaicos? Sim, energia limpa, energia solar.
    </p>

    <p>...</p>
    <!-- <img src="./img/earth.svg" alt="sustentabilidade"> -->
  </div>
</template>

<script>
export default {
  name: 'EnvironmentTips',
  data() {
    return {
      titleSection: 'DoBem',
      titleNews: 'um título',
      textNews: 'lorembla bla bla...'
    }
  }
}
</script>

<style scoped>
img {
  width: 20%;
  border: solid 3px rgb(123, 255, 0);
}
</style>
