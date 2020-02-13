<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }"></div>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
</style>
