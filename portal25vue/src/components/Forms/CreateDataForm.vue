<template>
  <div class="new-content">
    <form @submit="saveDb">
      <input
        type="text"
        v-model="titleH3"
        placeholder="WRITE A TITLE H3 HERE"
      />
      <input
        type="text"
        v-model="headerH5"
        placeholder="WRITE A TITLE H5 HERE"
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
      <input
        type="text"
        v-model="figCaption"
        placeholder="WRITE A DESCRIPTION"
      />
      <input
        type="text"
        v-model="paragraph1"
        placeholder="WRITE A 1# PARAGRAPH"
      />
      <input
        type="text"
        v-model="paragraph2"
        placeholder="WRITE A 2# PARAGRAPH"
      />
      <input
        type="text"
        v-model="paragraph3"
        placeholder="WRITE A 3# PARAGRAPH"
      />
      <input
        type="text"
        v-model="paragraph4"
        placeholder="WRITE A 4# PARAGRAPH"
      />
      <input
        type="text"
        v-model="paragraph5"
        placeholder="WRITE A 5# PARAGRAPH"
      />
      <input type="submit" value="SaveDb" />
    </form>

    <!-- output -->
    <div class="boxContent">
      <h3>{{ titleH3 }}</h3>
      <h5>{{ headerH5 }}</h5>
      <figure>
        <img :src="imageSource" :alt="imageAlt" />
        <figcaption>
          {{ figCaption }}
        </figcaption>
      </figure>
      <p>{{ paragraph1 }}</p>
      <p>{{ paragraph2 }}</p>
      <p>{{ paragraph3 }}</p>
      <p>{{ paragraph4 }}</p>
      <p>{{ paragraph5 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateDataForm',
  data: function () {
    return {
      colorMode: '',
      titleH3: '',
      headerH5: '',
      imageSource: 'https://picsum.photos/700/300',
      imageAlt: '',
      figCaption: '',
      paragraph1: '',
      paragraph2: '',
      paragraph3: '',
      paragraph4: '',
      paragraph5: ''
    }
  },
  methods: {
    saveDb() {
      alert('enviando...')
    }
  }
}
</script>

<style scoped>
img,
figcaption {
  width: 60vw;
  margin: 0 auto;
}
figure {
  display: block;
  position: relative;
  overflow: hidden;
}

figcaption {
  position: relative;
  z-index: 15;
  background: rgb(0 0 0 / 60%);
  color: white;
  top: -5rem;
  padding: 0.5rem;
}
</style>
