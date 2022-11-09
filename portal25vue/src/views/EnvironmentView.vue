<template>
  <div>
    <EnvironmentsTips class="boxContent" />
    <AsideContent imgSrc="/img/asideIcons/ico-doBem-page.png" />
  </div>
</template>

<script>
import EnvironmentsTips from '@/components/main/EnvironmentsTips.vue'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'EnvironmentsView',
  components: {
    EnvironmentsTips,
    AsideContent
  }
}
</script>
