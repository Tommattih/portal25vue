<template>
  <div id="local">
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <p>{{ textNews }}</p>
    <!-- o formato do arquivo no drive esta errado, arrumar quando arrumar o wifi https://drive.google.com/file/d/1lHwLix3QFvup7qz5IQ5og_p8BoiybZCH/view?usp=sharing // https://drive.google.com/file/d/1cCRGCaI7t4wkpNaX2oGFWOuTyzgGaARZ/view?usp=share_link-->
    <img
      src="https://tommattih.github.io/portal-25-pvsn/img/PlantaLightPVSN.svg"
      alt="Traçado de delimitação estimado das ruas do loteamento"
    />
    <img
      src="https://tommattih.github.io/portal-25-pvsn/img/RuasLoteamentoPVSN.svg"
      alt="Traçado de delimitação estimado das ruas do loteamento"
    />

    <h5>Visão geral</h5>
    <p>
      Divisão das quadras, ruas e lotes
      <a
        href="https://drive.google.com/file/d/1wL5JUv5JAPpUlpp-GnHNbZOoNuwSLM2y/view?usp=sharing"
        download="PlantaDoLoteamentoPVSN"
        alt="link para download da planta completa em PDF"
        target="_blank"
      >
        (Visualizar PDF)</a
      >
    </p>

    <!-- <img
      class="preview"
      src="#"
      alt="Planta geral do loteamento"
    /> -->

    <h5>Ruas e arredores</h5>
    <p>
      Delimitação estimada das ruas
      <a
        href="https://drive.google.com/file/d/1lHwLix3QFvup7qz5IQ5og_p8BoiybZCH/view?usp=sharing"
        download="RuasLoteamentoPVSN(PDF)"
        alt="link para download do traçado das ruas em PDF"
        target="_blank"
      >
        (Visualizar PDF)</a
      >
    </p>

    <!-- <img
      class="preview"
      src="./img/RuasLoteamentoPVSN.svg"
      alt="Traçado de delimitação estimado das ruas do loteamento"
    /> -->
    <h5>Quadras</h5>
    <ul class="blocksDetails">
      <li>48x</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AreaRefs',
  data() {
    return {
      titleSection: 'Loteamento & Quadras',
      titleNews: 'um título',
      textNews: 'lorembla bla bla...'
    }
  }
}
</script>
<style scoped>
img {
  width: 95%;
  margin: 0 auto 1rem;
  box-shadow: -1px 2px 4px rgba(45, 61, 37, 0.52);
}
</style>
