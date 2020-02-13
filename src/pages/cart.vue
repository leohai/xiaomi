<template>
  <div class="cart">
    <order-header title="我的购物车"> </order-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
export default {
  name: "index",
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter,
  },
};
</script>
<style lang="scss"></style>
