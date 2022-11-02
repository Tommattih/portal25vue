"
<template>
  <div>
    <h3>{{ title }}</h3>
    <h5>{{ subtitle }}</h5>
    <p>Description...</p>
    <ul class="services">
      <ul class="groupServices">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ul class="groupServices1">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ul class="groupServices2">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </ul>
    <img :src="image.src" :alt="image.alt" />
  </div>
</template>

<script>
export default {
  name: 'servicesView',
  data() {
    return {
      title: 'Serviços Locais',
      subtitle: 'Precisa de ajuda?',
      image: { src: '/img/ico-tommattih.png', alt: 'uma descrição' }
    }
  }
}
</script>

<style>
h3 {
  background: violet;
}
</style>
"
