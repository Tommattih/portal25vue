<template>
  <div>
    <ServicesContent />
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-services-page.png"
        alt="services-icon"
    /></aside-content>
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
