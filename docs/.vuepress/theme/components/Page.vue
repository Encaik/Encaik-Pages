<template>
  <main class="page">
    <slot name="top" />

    <!-- <img v-if="img" :src="`/img/${this.$page.relativePath.split('.')[0]}.png`" class="banner" alt /> -->
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
let fs = require("fs");

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  created() {
    console.log()
  },
  methods: {
    img() {
      fs.exists(`/img/${this.$page.relativePath.split('.')[0]}.png`, function (exists) {
        if (exists) {
          return true
        }
        if (!exists) {
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

.banner {
  display: block;
  max-width: 740px;
  margin: 3.6rem auto 0 auto;
}
</style>
