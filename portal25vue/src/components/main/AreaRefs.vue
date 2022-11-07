<template>
  <div id="local">
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <p>{{ textNews }}</p>
    <!-- o formato do arquivo no drive esta errado, arrumar quando arrumar o wifi -->
    <img
      src="https://drive.google.com/file/d/1lHwLix3QFvup7qz5IQ5og_p8BoiybZCH/view?usp=sharing"
      alt="Traçado de delimitação estimado das ruas do loteamento"
    />
    <img
      class="newlinks"
      src="https://drive.google.com/file/d/1cCRGCaI7t4wkpNaX2oGFWOuTyzgGaARZ/view?usp=share_link"
      alt="Traçado de delimitação estimado das ruas do loteamento"
    />
    <img
      src="ttps://drive.google.com/file/d/1wL5JUv5JAPpUlpp-GnHNbZOoNuwSLM2y/view?usp=sharing"
      alt="link para download da planta completa em PDF"
    />
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
  width: 20%;
  border: solid 3px blue;
}
</style>
