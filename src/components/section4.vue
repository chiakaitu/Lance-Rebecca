<template>
  <div class="box">
    <!-- 圖片 start -->
    <div class="wrap display_flex">
      <div class="left">
        <img class="photo" :src="photo4_1" alt="" />
      </div>
      <div class="right">
        <img class="photo" :src="photo4_2" alt="" />
      </div>
    </div>
    <!-- 圖片 end -->

    <!-- 文字 start -->
    <div class="display_flex middle margin_top_35">
      <h5>許耕端 & 凃馨勻</h5>
      <div class="margin_top_20"></div>
      <p>偕同我們的父母</p>
      <p>許隆仁 & 鍾秀菊 &emsp;/&emsp; 凃育銅 & 黃碧玉</p>
      <div class="margin_top_20"></div>
      <p>誠摯的邀請您和您的家人</p>
      <p>見證我們此生最重要的決定</p>
      <div class="margin_top_20"></div>
      <p>感謝您 不遠萬里</p>
      <p>為我們而來</p>
    </div>
    <!-- 文字 end -->

    <!-- 囍 start -->
    <div class="margin_top_35">
      <img class="photo joy" :src="joy4" alt="" />
    </div>
    <!-- 囍 end -->
  </div>
</template>

<script>
export default {
  name: "sectionFour",
  data() {
    return {
      photo4_1: require("../assets/images/photo4-1.jpg"),
      photo4_2: require("../assets/images/photo4-2.jpg"),
      joy4: require("../assets/images/joy4.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joy {
  width: 10%;
}
</style>
