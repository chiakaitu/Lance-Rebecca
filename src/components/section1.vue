<template>
  <div class="box">
    <p class="float_right">想和您分享我們的幸福喜悅</p>
    <img data-aos="fade-down" class="photo" :src="img1" alt="" />
    <div class="margin_top_30"></div>
    <img class="photo joy" :src="joy1" alt="" />
    <div class="display_flex middle margin_top_35">
      <p>我們決定</p>
      <p>在2022年10月9日這一天</p>
      <p>開啟人生新的篇章</p>
      <p>以夫妻的名義 與您相見</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectionOne",
  data() {
    return {
      img1: require('../assets/images/photo1.jpg'),
      joy1: require("../assets/images/joy1.png"),
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joy {
  margin-top: 0;
  width: 55%;
}
</style>
