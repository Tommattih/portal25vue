<template>
  <div id="place">
    <form @submit="saveDb">
      <input type="text" v-model="nameService" placeholder="WRITE A Service" />
      <input type="text" v-model="typeService" placeholder="SET TYPE" />
      <input
        type="text"
        v-model="descriptionService"
        placeholder="WRITE A DESCRIPTION"
      />
      <input
        type="text"
        v-model="contactService"
        placeholder="TROCAR > form para contatos?"
      />
      <input
        type="text"
        v-model="imageSource"
        placeholder="WRITE A IMAGE PATH HERE"
      />
      <input
        type="text"
        v-model="imageAlt"
        placeholder="WRITE AN ALT IMAGE HERE"
      />
      <input type="submit" value="save-db" />
    </form>
    <servicesInfo />
  </div>
</template>

<script>
import servicesInfo from '@/components/ServicesInfo.vue'
export default {
  name: 'InsertService',
  components: { servicesInfo },
  methods: {
    saveDb() {
      alert('salvou')
    }
  },
  data() {
    return {
      nameService: '',
      typeService: '',
      descriptionService: '',
      contactService: '',
      imageSrc: '',
      imageAlt: ''
    }
  }
}
</script>
<style scoped>
#place {
  margin: 0 auto;
}
</style>
