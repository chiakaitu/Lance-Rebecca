<template>
  <div class="box">
    <img class="photo joy" :src="joy" alt="" />
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
  name: "sectionTwo",
  data() {
    return {
      joy: require("../assets/images/joy.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joy {
  margin-top: 0;
  width: 35%;
}
</style>
