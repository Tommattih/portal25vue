<template>
  <div>
    <faq-content class="boxContent">
      <h3 slot="section">{{ titleFaq }}</h3>
      <p slot="asks">Uma pergunta</p>
      <p slot="answers">
        {{ textFaq }}
      </p>
    </faq-content>
    <aside-content>
      <img
        slot="focusimage"
        src="/img/asideIcons/ico-faq-page.png"
        alt="faq-icon"
    /></aside-content>
  </div>
</template>

<script>
import FaqContent from '@/components/main/FaqContent'
import AsideContent from '@/components/aside/AsideContent.vue'
export default {
  name: 'FaqView',
  components: {
    FaqContent,
    AsideContent
  },
  data() {
    return {
      titleFaq: 'Perguntas Frequentes',
      textFaq: 'lorem...'
    }
  }
}
</script>
