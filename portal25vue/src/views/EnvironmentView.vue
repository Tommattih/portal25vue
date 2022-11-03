<template>
  <div id="environment">
    <h3>{{ titleSection }}</h3>
    <h5>{{ titleNews }}</h5>
    <p>{{ textNews }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleSection: 'DoBem',
      titleNews: 'um título',
      textNews: 'lorembla bla bla...'
    }
  }
}
</script>
