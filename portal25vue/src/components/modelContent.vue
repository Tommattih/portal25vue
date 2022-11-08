<template>
  <div class="portal">
    <slot name="id-title"><h5>Um Título</h5></slot>
    <slot name="description"
      ><p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae mollitia
        sit, inventore perferendis accusamus deleniti asperiores at nam, fuga
        quae quis nihil eveniet eum porro corrupti qui, numquam tenetur culpa.
      </p></slot
    >
    <slot name="image"
      ><img
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
    /></slot>
    <slot name="button"><button>Leia mais</button></slot>
    <slot name="link"><a href="/"></a></slot>
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
