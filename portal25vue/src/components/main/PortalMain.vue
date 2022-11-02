<template>
  <div class="boxContent">
    <h3>{{ title }}</h3>
    <p>
      {{ info }}
    </p>
    <HistoryView />
    <!-- importar componentes estilizados com o formato do box-content 
    OU definir como style scoped 
    OU ???-->
    <!-- a lógica ta invertida nos componentes e rotas-->
    <!-- just to test view -->
  </div>
</template>

<script>
import HistoryView from '@/views/HistoryView.vue'
export default {
  name: 'PortalMain',
  props: {
    title: String,
    info: String
  },
  components: {
    HistoryView
  }
}
</script>
<style scoped>
.boxContent {
  border: 1px dotted #60663962;
}
h3 {
  background-color: var(--bg-color);
  color: var(--font-color);
}
</style>
