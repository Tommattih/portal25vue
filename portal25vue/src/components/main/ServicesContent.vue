<template>
  <div class="boxContent">
    <h3>Serviços Locais</h3>
    <div class="services">
      <h5>Alimentação</h5>
      <div class="groupServices food d-flex gap-2">
        <modelContent />
        <modelContent />
        <modelContent />
      </div>
      <h5>Construção</h5>
      <div class="groupServices build d-flex gap-2">
        <modelContent />
        <modelContent />
        <modelContent />
      </div>

      <h5>Saúde & Bem-estar</h5>
      <div class="groupServices beauty d-flex gap-2">
        <modelContent />
        <modelContent />
        <modelContent />
      </div>
    </div>
  </div>
</template>

<script>
import modelContent from '@/components/modelContent.vue'
export default {
  name: 'ServicesContent',
  components: {
    modelContent
  }
}
</script>
<style scoped>
.groupServices {
  justify-content: center;
}
</style>
