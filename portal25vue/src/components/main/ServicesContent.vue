<template>
  <div class="boxContent">
    <h3>Serviços Locais</h3>
    <div class="services">
      <h4>Alimentos & Bebidas</h4>
      <div class="groupServices foodservicesInfo">
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
      </div>
      <h4>Construção & Reformas</h4>
      <div class="groupServices buildservicesInfo">
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
      </div>

      <h4>Saúde & Bem-estar</h4>
      <div class="groupServices beautyservicesInfo">
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
        <servicesInfo />
      </div>
    </div>
  </div>
</template>

<script>
import servicesInfo from '@/components/ServicesInfo.vue'
export default {
  name: 'ServicesContent',
  components: {
    servicesInfo
  }
}
</script>
<style scoped>
.groupServices {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
</style>
