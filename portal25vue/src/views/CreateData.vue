<template>
  <div class="boxContent">
    <div class="view">
      <p>form environment posts</p>
      <CreateDataForm />
    </div>

    <div class="view">
      <p>form services</p>
      <InsertService />
    </div>

    <div class="view">
      <p>form meets?</p>
    </div>

    <div class="view">
      <p>form history</p>
    </div>
  </div>
</template>

<script>
import CreateDataForm from '@/components/Forms/CreateDataForm.vue'
import InsertService from '@/components/Forms/InsertService.vue'

export default {
  name: 'CreateData',
  components: {
    CreateDataForm,
    InsertService
  }
}
</script>

<style scoped>
.view {
  border: 2px solid var(--bg-color);
  border-radius: 5px;
  margin: 0 auto;
}
</style>
