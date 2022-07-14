<template>
  <div class="box">
    <!-- 圖片 start -->
    <div class="wrap display_flex">
      <!-- <div class="left"> -->
        <img data-aos-duration="1000" data-aos="fade-up" class="photo" :src="photo5_1" alt="" />
      <!-- </div> -->
      <!-- <div class="right"> -->
        <!-- <img data-aos-duration="1400" data-aos="flip-right" class="photo" :src="photo5_2" alt="" /> -->
      <!-- </div> -->
    </div>
    <!-- 圖片 end -->

    <!-- 文字 start -->
    <div class="display_flex middle margin_top_35">
      <h3>許耕端 & 凃馨勻</h3>
      <div class="margin_top_20"></div>
      <p>偕同我們的父母</p>
      <p>許隆仁&nbsp;&nbsp;鍾秀菊 &emsp;/&emsp; 凃育銅&nbsp;&nbsp;黃碧玉</p>
      <div class="margin_top_20"></div>
      <p>誠摯的邀請您和您的家人</p>
      <p>見證我們此生最重要的決定</p>
      <div class="margin_top_20"></div>
      <p>感謝您 不辭千里</p>
      <p>為我們而來</p>
    </div>
    <!-- 文字 end -->

    <!-- 囍 start -->
    <div class="margin_top_35">
      <img class="photo joy" :src="joy5" alt="" />
    </div>
    <!-- 囍 end -->
  </div>
</template>

<script>
export default {
  name: "sectionFive",
  data() {
    return {
      photo5_1: require("../assets/images/photo5-1.jpg"),
      // photo5_2: require("../assets/images/photo5-2.jpg"),
      joy5: require("../assets/images/joy5_1.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joy {
  width: 20%;
}
</style>
