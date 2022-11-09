<template>
  <div class="portal">
    <b-card no-body style="max-width: 10rem">
      <b-card-body>
        <b-card-title>New Title</b-card-title>
        <b-card-sub-title class="mb-2">New Sub Title</b-card-sub-title>
        <b-card-text> Algum serviço </b-card-text>
      </b-card-body>

      <b-card-img
        src="https://placekitten.com/240/240"
        alt="Image"
        bottom
      ></b-card-img>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'modelContent'
}
</script>

<style scoped>
h5 {
  background: green;
}
.portal {
  margin-bottom: 1rem;
}
</style>
