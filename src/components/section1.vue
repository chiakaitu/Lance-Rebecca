<template>
  <div class="box">
    <p class="float_right">想和您分享我們的喜悅</p>
    <img class="photo" :src="img1" alt="" />
  </div>
</template>

<script>
export default {
  name: "sectionOne",
  data() {
    return {
      img1: require('../assets/images/photo1.jpg')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  line-height: normal;
}
</style>
