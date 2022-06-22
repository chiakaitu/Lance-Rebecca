<template>
  <div class="box">
    <!------------ 圖片區塊 start ------------>
    <div class="wrap display_flex">

      <!-- 左邊 start -->
      <div class="left">
        <img class="photo" :src="photo2_1" alt="" />
      </div>
      <!-- 左邊 end -->

      <!-- 右邊 start -->
      <div class="right display_flex middle">
        <img class="photo" :src="photo2_2" alt="" />
        <img class="photo" :src="photo2_3" alt="" />
      </div>
      <!-- 右邊 end -->

    </div>
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
      photo2_1: require("../assets/images/photo2-1.jpg"),
      photo2_2: require("../assets/images/photo2-2.jpg"),
      photo2_3: require("../assets/images/photo2-3.jpg"),
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
