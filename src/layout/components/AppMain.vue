<template>
  <section class="app-main">
    <div class="app-main-content">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"/>
        </keep-alive>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppMain',
  computed: {
    ...mapState('cache', ['cachedViews']),
    key() {
      return this.$route.fullPath
    }
  },
}
</script>

<style scoped lang="scss">
@import '~@/style/variables';

.app-main {
  position: relative;
  padding: 16px;
  width: calc(100vw - #{$width-side-bar});
  height: calc(100vh - #{$height-header});
  background-color: #F0F2F5;
  .app-main-content {
    min-width: 1200px;
    height: 100%;
    overflow: auto;
    background-color: #ffffff;
  }
}

</style>
