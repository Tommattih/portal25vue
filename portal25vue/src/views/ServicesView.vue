<template>
  <div>
    <ServicesContent />
    <AsideContent imgSrc="/img/asideIcons/ico-services-page.png" />
  </div>
</template>

<script>
import ServicesContent from '@/components/main/ServicesContent.vue'
import AsideContent from '@/components/aside/AsideContent.vue'

export default {
  name: 'servicesView',
  components: {
    ServicesContent,
    AsideContent
  }
}
</script>
