<template>
  <div class="aside">
    <img src="#" alt="">
    <SocialMedia />
    <OtherLinks />
    <AboutProject />
    <AboutDev />
  </div>
</template>

<script>
import SocialMedia from "@/components/aside/SocialMedia.vue"
import OtherLinks from "@/components/aside/OtherLinks.vue"
import AboutProject from "@/components/aside/AboutProject.vue"
import AboutDev from "@/components/aside/AboutDev.vue"

export default {
  name: "PortalAside",
  components: {
    SocialMedia,
    OtherLinks,
    AboutProject,
    AboutDev,
  },
};
</script>
