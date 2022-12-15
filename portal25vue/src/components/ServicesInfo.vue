<template>
  <div class="portal">
    <b-card no-body style="max-width: 10rem">
      <b-card-body>
        <b-card-title>{{ nameService }}</b-card-title>
        <b-card-sub-title class="mb-2">{{ typeService }}</b-card-sub-title>
        <b-card-text>{{ descriptionService }}</b-card-text>
        <b-card-text>{{ contactService }}</b-card-text>
        <!-- <b-card-text>{{ starsService }}</b-card-text> -->
        <!-- <b-card-text>{{ priceService }}</b-card-text> -->
      </b-card-body>

      <b-card-img :src="imgService" :alt="imgAlt" bottom></b-card-img>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'servicesInfo',
  props: {
    nameService: String,
    typeService: String,
    descriptionService: String,
    contactService: Object
    // starsService: Object,
    // priceService: String, $$$
    // imgService: String,
    // imgAlt: String
  },
  data() {
    return {
      imgService: 'https://placekitten.com/240/240',
      imgAlt: 'imagem de gatinho'
    }
  }
}
</script>

<style scoped>
h5 {
  background: green;
}
.portal {
  margin-bottom: 1rem;
}
</style>
