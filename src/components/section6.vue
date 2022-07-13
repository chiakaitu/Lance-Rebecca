<template>
  <div class="box" id="box">
    <!-- 文字 start -->
    <div class="display_flex middle margin_top_35">
      <div class="text_box display_flex middle">
        <h4>婚禮日期</h4>
        <b>2022/10/09 (日) 午宴</b>
        <div id="line_box1">
          <img class="line" :src="line6" alt="" />
        </div>
        <p>11:30 迎賓酒會</p>
        <p>12:00 準時開席</p>
      </div>
      <div class="margin_top_30"></div>
      <div class="text_box display_flex middle">
        <h4>婚禮地點</h4>
        <b>君品酒店</b>
        <div id="line_box2">
          <img class="line" :src="line6_1" alt="" />
        </div>
        <p>台北市大同區承德路一段3號5F</p>
        <p>(君品大廳在京站大門旁)</p>
      </div>
      <div class="margin_top_30"></div>
      <div class="text_box display_flex middle">
        <p>– 開車 –</p>
        <p>停車場入口位於市民大道上</p>
        <p>由台北轉運站停車場入口進入</p>
        <p>君品專屬停車區位於B4&B5</p>
      </div>
      <div class="margin_top_30"></div>
      <div class="text_box display_flex middle">
        <p>– 大眾運輸 –</p>
        <p>台北車站Y5出口右轉承德路</p>
      </div>
    </div>
    <!-- 文字 end -->

    <!-- 圖片 start -->
    <div class="wrap display_flex">
      <div class="wrap_box">
        <img
          data-aos-duration="400"
          data-aos="fade-down"
          class="photo"
          :src="photo6_1"
          alt=""
        />
      </div>
      <div class="wrap_box">
        <img
          data-aos-duration="800"
          data-aos="fade-up"
          class="photo"
          :src="photo6_2"
          alt=""
        />
      </div>
      <div class="wrap_box">
        <img
          data-aos-duration="1200"
          data-aos="fade-down"
          class="photo"
          :src="photo6_3"
          alt=""
        />
      </div>
    </div>
    <!-- 圖片 end -->
  </div>
</template>

<script>
export default {
  name: "sectionSix",
  data() {
    return {
      photo6_1: require("../assets/images/photo6-1.jpg"),
      photo6_2: require("../assets/images/photo6-2.jpg"),
      photo6_3: require("../assets/images/photo6-3.jpg"),
      line6: require("../assets/images/line6.png"),
      line6_1: require("../assets/images/line6_1.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box {
  margin-top: 30px;
}

b {
  color: #932220;
}

#line_box1 {
  position: relative;
  width: 300%;
}

#line_box2 {
  position: relative;
  width: 155%;
}

#line_box1 .line {
  width: 50%;
  margin: 0;
  /* transform: translateY(-30px); */
  position: absolute;
  top: -35px;
  left: 107px;
  z-index: -1;
  opacity: 60%;
}

#line_box2 .line {
  width: 50%;
  margin: 0;
  /* transform: translateY(-30px); */
  position: absolute;
  top: -31px;
  left: 65px;
  z-index: -1;
  opacity: 60%;
}

.wrap {
  width: 100%;
  justify-content: space-between;
}

.wrap_box:not(:last-child) {
  margin-right: 10px;
}
</style>
