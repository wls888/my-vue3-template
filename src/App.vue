<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -999;
}
</style>
