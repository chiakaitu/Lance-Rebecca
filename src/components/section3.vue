<template>
  <div class="box">
    <!------------ 圖片區塊 start ------------>
    <div class="wrap">

      <!-- 左邊 start -->
      <div class="left">
        <img class="photo section3_img" :src="photo2" alt="" />
      </div>
      <!-- 左邊 end -->

      <!-- 右邊 start -->
      <div class="right display_flex middle">
        <img class="photo section3_img" :src="photo3" alt="" />
        <img class="photo section3_img" :src="photo4" alt="" />
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
  name: "sectionThree",
  data() {
    return {
      photo2: require("../assets/images/photo2.jpg"),
      photo3: require("../assets/images/photo3.jpg"),
      photo4: require("../assets/images/photo4.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  display: flex;
}

.left {
  width: 50%;
  margin-right: 15px;
}

.right {
  width: 50%;
  justify-content: space-between;
}

img {
  margin-top: 0;
}
</style>
