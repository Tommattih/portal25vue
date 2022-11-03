<template>
  <div class="boxExample">
    <h3>{{ title }}</h3>
    <p>
      {{ info }}
    </p>
    <!-- <HistoryView /> -->
    <!-- importar componentes estilizados com o formato do box-content 
    OU definir como style scoped -> sim para p, img, h3, list-style, text-decoration 
    OU ???-->
  </div>
</template>

<script>
// import HistoryView from '@/views/HistoryView.vue'
export default {
  name: 'PortalMain',
  props: {
    title: String,
    info: String
  }
}
</script>
