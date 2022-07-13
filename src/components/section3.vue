<template>
  <div class="box">
    <!------------ 圖片區塊 start ------------>
    <img data-aos-duration="1000" data-aos="fade-left" class="" :src="photo3" alt="" />
    <!------------ 圖片區塊 end ------------>

    <!------------ 文字區塊 start ------------>
    <div class="float_right middle margin_top_30">
      <p>台北</p>
      <p>是我們的家</p>
      <p>見證了我們新的身分</p>
      <div class="margin_top_30"></div>
      <p>未來的日子</p>
      <p>一起面對柴米油鹽 經歷酸甜苦辣</p>
      <div class="margin_top_30"></div>
      <p>願我們可以保持初心</p>
      <p>好好談一場</p>
      <p>一輩子的戀愛</p>
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
