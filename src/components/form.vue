<template>
  <div class="box display_flex middle">
    <!-- 文字 start -->
    <p>請以「一家人」為單位</p>
    <p>填寫以下資料</p>
    <div class="margin_top_30"></div>
    <hr />
    <div class="margin_top_20"></div>
    <div class="margin_top_20"></div>
    <!-- 文字 end -->

    <!-- 表單 start -->

    <!------------- 第一題 ------------->
    <h1>1</h1>
    <b>您的大名</b>
    <input type="text" v-model="name" />
    <div class="margin_top_45"></div>

    <!------------- 第二題 ------------->
    <h1>2</h1>
    <b>您的聯絡電話</b>
    <input type="text" inputmode="tel" v-model="phone" />
    <div class="margin_top_45"></div>

    <!------------- 第三題 ------------->
    <h1>3</h1>
    <b>和新人的關係</b>
    <p>鴻海夥伴請選"鴻海專屬，我都熟"，別擔心你們都有餅:)</p>

    <div class="radio_option">
      <input
        name="relation"
        type="radio"
        id="one"
        value="男方親友"
        v-model="relation"
      />
      <label for="one">男方親友</label>
    </div>

    <div class="radio_option">
      <input
        name="relation"
        type="radio"
        id="two"
        value="女方親友"
        v-model="relation"
      />
      <label for="two">女方親友</label>
    </div>

    <div class="radio_option">
      <input
        name="relation"
        type="radio"
        id="three"
        value="鴻海專屬，我都熟"
        v-model="relation"
      />
      <label for="three">鴻海專屬，我都熟</label>
    </div>

    <div class="margin_top_45"></div>

    <!------------- 第四題 ------------->
    <h1>4</h1>
    <b>是否出席婚宴</b>
    <p>無法前來的朋友請不要有壓力，非常感謝你們的祝福！</p>

    <div class="radio_option">
      <input
        name="show"
        type="radio"
        id="one"
        value="出席，一定要親眼見證！"
        v-model="show"
      />
      <label for="one">出席，一定要親眼見證！</label>
    </div>

    <div class="radio_option">
      <input
        name="show"
        type="radio"
        id="two"
        value="好想去，但當天有事，禮到人不到～～"
        v-model="show"
      />
      <label for="two">好想去，但當天有事，禮到人不到～～</label>
    </div>

    <div class="radio_option">
      <input
        name="show"
        type="radio"
        id="three"
        value="無法出席，祝你們幸福美滿！"
        v-model="show"
      />
      <label for="three">無法出席，祝你們幸福美滿！</label>
    </div>

    <div class="margin_top_45"></div>

    <!------------- 第五題 ------------->
    <h1>5</h1>
    <b>共幾位出席</b>
    <input type="text" inputmode="numeric" v-model="show_num" />
    <div class="margin_top_45"></div>

    <!------------- 第六題 ------------->
    <h1>6</h1>
    <b>需要幾張兒童座椅</b>
    <input type="text" inputmode="numeric" v-model="child_num" />
    <div class="margin_top_45"></div>

    <!------------- 第七題 ------------->
    <h1>7</h1>
    <b>共幾位吃素</b>
    <input type="text" inputmode="numeric" v-model="veg_num" />
    <div class="margin_top_45"></div>

    <!------------- 第八題 ------------->
    <h1>8</h1>
    <b>想要收到紙本喜帖嗎</b>

    <div class="radio_option">
      <input
        name="invitation"
        type="radio"
        id="one"
        value="我要我要，請寄喜帖給我～～"
        v-model="invitation"
      />
      <label for="one">我要我要，請寄喜帖給我～～</label>
    </div>

    <div class="radio_option">
      <input
        name="invitation"
        type="radio"
        id="two"
        value="不用哦，婚禮相關資訊我都知道了！"
        v-model="invitation"
      />
      <label for="two">不用哦，婚禮相關資訊我都知道了！</label>
    </div>

    <div class="margin_top_45"></div>

    <!------------- 第九題 ------------->
    <h1>9</h1>
    <b>有什麼話想和我們說嗎</b>
    <textarea cols="36" rows="4" v-model="feedback"></textarea>

    <div class="margin_top_45"></div>
    <!-- 表單 end -->

    <!-- 按鈕 start -->
    <button>送出</button>
    <!-- 按鈕 end -->
    <div class="margin_top_45"></div>
  </div>
</template>

<script>
export default {
  name: "sectionFive",
  data() {
    return {
      name: "",
      phone: "",
      relation: "",
      show: "",
      show_num: "",
      child_num: "",
      veg_num: "",
      invitation: "",
      feedback: ""
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio_option {
  display: inline-block;
}

label {
  margin-left: 15px;
}
</style>
