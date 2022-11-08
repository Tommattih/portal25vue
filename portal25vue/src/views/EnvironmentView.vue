<template>
  <div>
    <EnvironmentsTips class="boxContent" />
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-doBem-page.png"
        alt="do-bem-icon"
    /></aside-content>
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
