<template>
  <div id="environment">
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <p>{{ textNews }}</p>
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
