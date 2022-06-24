<template>
  <div class="box">
    <!------------ 圖片區塊 start ------------>
    <img class="" :src="photo3" alt="" />
    <!------------ 圖片區塊 end ------------>

    <!------------ 文字區塊 start ------------>
    <div class="float_right middle margin_top_30">
      <p>台北</p>
      <p>是我們的家鄉</p>
      <p>也是我們決定成家的地方</p>
    </div>
    <!------------ 文字區塊 end ------------>
  </div>
</template>

<script>
export default {
  name: "sectionTwo",
  data() {
    return {
      photo3: require("../assets/images/photo3.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  justify-content: space-between;
}

img {
  margin-top: 0;
}
</style>
