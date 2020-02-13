<template>
  <div class="detail">
    <product-param></product-param>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "detail",
  components: {
    ProductParam,
    ServiceBar,
  },
};
</script>
<style lang="scss"></style>
