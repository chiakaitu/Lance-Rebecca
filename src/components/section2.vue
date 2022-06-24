<template>
  <div class="box">
    <!------------ 圖片區塊 start ------------>
    <div class="wrap display_flex">
      <!-- 左邊 start -->
      <div class="left">
        <img data-aos-duration="1200" data-aos="fade-right" class="" :src="photo2_1" alt="" />
      </div>
      <!-- 左邊 end -->

      <!-- 右邊 start -->
      <div class="right display_flex middle">
        <img data-aos-duration="700" data-aos="fade-up" :src="photo2_2" alt="" />
        <img data-aos-duration="1000" data-aos="fade-down" :src="photo2_3" alt="" />
      </div>
      <!-- 右邊 end -->
    </div>
    <!------------ 圖片區塊 end ------------>

    <!------------ 文字區塊 start ------------>
    <div class="margin_top_30"></div>
    <p>成都</p>
    <p>是我們開始的起點</p>
    <div class="margin_top_30"></div>
    <p>相識 相知 相戀</p>
    <p>一起走過1300多個日子</p>
    <p>經歷春夏秋冬 共度喜怒哀樂</p>

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
