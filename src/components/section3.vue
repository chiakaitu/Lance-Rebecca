<template>
  <div class="box">
    <img class="photo joy" :src="photo3" alt="" />
    <div class="float_right middle margin_top_30">
      <p>從「我喜歡」</p>
      <p>到「我願意」</p>
      <div class="margin_top_30"></div>
      <p>人的一生</p>
      <p>只有一次選擇家人的機會</p>
      <p>而我們是彼此親自挑選的家人</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectionThree",
  data() {
    return {
      photo3: require("../assets/images/photo3.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
