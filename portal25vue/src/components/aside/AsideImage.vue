<template>
  <div>
    <slot
      ><img
        v-for="focusicon in asideicon"
        v-show="focusicon.status"
        :key="focusicon.id"
        :src="focusicon.srcimage"
        :alt="focusicon.alt"
    /></slot>
    <!--  -->
    <!-- importar componentes estilizados com o formato do box-content 
    OU definir como style scoped -> sim para p, img, h3, list-style, text-decoration 
    OU ???-->
  </div>
</template>

<script>
// import HistoryView from '@/views/HistoryView.vue'
export default {
  name: 'AsideImage',
  data() {
    return {
      asideicon: [
        {
          id: 1,
          srcimage: '/img/asideIcons/ico-news-page.png',
          alt: 'ico-news',
          status: false
        },
        {
          id: 2,
          srcimage: '/img/asideIcons/ico-history-page.png',
          alt: 'ico-history',
          status: false
        },
        {
          id: 3,
          srcimage: '/img/asideIcons/ico-plants-page.png',
          alt: 'ico-plants',
          status: false
        },
        {
          id: 4,
          srcimage: '/img/asideIcons/ico-maps-page.png',
          alt: 'ico-maps',
          status: true
        },
        {
          id: 5,
          srcimage: '/img/asideIcons/ico-services-page.png',
          alt: 'ico-services',
          status: false
        },
        {
          id: 6,
          srcimage: '/img/asideIcons/medal-pvsn.png',
          alt: 'medal-pvsn',
          status: false
        }
      ]
    }
  }
}
</script>
