<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <!-- <div class="form" v-html="content"></div> -->
  </div>
</template>
<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading,
  },
};
</script>
