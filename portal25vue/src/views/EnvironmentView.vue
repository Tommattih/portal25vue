<template>
  <div>
    <EnvironmentsTips :environmentData="environmentData" class="boxContent" />
    <AsideContent imgSrc="/img/asideIcons/ico-doBem-page.png" />
  </div>
</template>

<script>
import EnvironmentsTips from '@/components/main/EnvironmentsTips.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'EnvironmentsView',
  data() {
    return {
      environmentData: {
        titleSection: 'DoBem',
        subtitleText: 'Ter um bairro modelo é possível',
        text: 'Todos nós sonhamos com uma vizinhança bonita, agradável, limpa e feliz.'
      }
    }
  },
  components: {
    EnvironmentsTips,
    AsideContent
  }
}
</script>
