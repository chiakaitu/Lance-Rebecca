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
    <form class="display_flex middle" v-on:click="addGoogle">
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

      <div class="wrap">
        <div class="radio_option">
          <input
            name="relation"
            type="radio"
            id="relation1"
            value="男方親友"
            v-model="relation"
          />
          <label for="relation1">男方親友</label>
        </div>

        <div class="radio_option">
          <input
            name="relation"
            type="radio"
            id="relation2"
            value="女方親友"
            v-model="relation"
          />
          <label for="relation2">女方親友</label>
        </div>

        <div class="radio_option">
          <input
            name="relation"
            type="radio"
            id="relation3"
            value="鴻海專屬，我都熟"
            v-model="relation"
          />
          <label for="relation3">鴻海專屬，我都熟</label>
        </div>
      </div>

      <div class="margin_top_45"></div>

      <!------------- 第四題 ------------->
      <h1>4</h1>
      <b>是否出席婚宴</b>
      <p>無法前來的朋友請不要有壓力，非常感謝你們的祝福！</p>

      <div class="wrap">
        <div class="radio_option">
          <input
            name="show"
            type="radio"
            id="show1"
            value="出席，一定要親眼見證！"
            v-model="show"
          />
          <label for="show1">出席，一定要親眼見證！</label>
        </div>

        <div class="radio_option">
          <input
            name="show"
            type="radio"
            id="show2"
            value="好想去，但當天有事，禮到人不到～～"
            v-model="show"
          />
          <label for="show2">好想去，但當天有事，禮到人不到～～</label>
        </div>

        <div class="radio_option">
          <input
            name="show"
            type="radio"
            id="show3"
            value="無法出席，祝你們幸福美滿！"
            v-model="show"
          />
          <label for="show3">無法出席，祝你們幸福美滿！</label>
        </div>
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

      <div class="wrap">
        <div class="radio_option">
          <input
            name="invitation"
            type="radio"
            id="invitation1"
            value="我要我要，請寄喜帖給我～～"
            v-model="invitation"
          />
          <label for="invitation1">我要我要，請寄喜帖給我～～</label>
        </div>

        <div class="radio_option">
          <input
            name="invitation"
            type="radio"
            id="invitation2"
            value="不用哦，婚禮相關資訊我都知道了！"
            v-model="invitation"
          />
          <label for="invitation2">不用哦，婚禮相關資訊我都知道了！</label>
        </div>
      </div>
      <div class="margin_top_45"></div>

      <!------------- 第九題 ------------->
      <h1>9</h1>
      <b>有什麼話想和我們說嗎</b>
      <textarea cols="36" rows="4" v-model="feedback"></textarea>

      <div class="margin_top_45"></div>
      <!-- 表單 end -->

      <!-- 按鈕 start -->
      <button type="submit">送出</button>
      <!-- 按鈕 end -->
    </form>
    <div class="margin_top_45"></div>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require("google-spreadsheet");
// const creds = require("@/auth.json");
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
      feedback: "",
      creds: require("../../auth.json"),
    };
  },
  methods: {
    async addGoogle(e) {
      e.preventDefault();
      const newData = {
        time: new Date().toLocaleString(),
        name: this.name,
        phone: "'" + this.phone,
        relation: this.relation,
        show: this.show,
        show_num: this.show_num,
        child_num: this.child_num,
        veg_num: this.veg_num,
        invitation: this.invitation,
        feedback: this.feedback,
      };

      const doc = new GoogleSpreadsheet(
        "1JLFjQmDmp9q-XLg50xKKzpR4jYeUkoGUI5s3i8HVptQ"
      );
      await doc.useServiceAccountAuth(this.creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow(newData);

      this.name = "";
      this.phone = "";
      this.relation = "";
      this.show = "";
      this.show_num = "";
      this.child_num = "";
      this.veg_num = "";
      this.invitation = "";
      this.feedback = "";

      console.log("新增成功");
    },
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

.wrap {
  display: grid;
  text-align: left;
}
</style>
