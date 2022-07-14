<template>
  <div class="box display_flex middle" id="box">
    <loading v-model:active="isLoading" :is-full-page="true" />
    <!-- 文字 start -->
    <p>請以「一家人」為單位</p>
    <p>填寫以下資料</p>
    <div class="margin_top_30"></div>
    <!-- <hr /> -->
    <div class="margin_top_20"></div>
    <div class="margin_top_20"></div>
    <!-- 文字 end -->

    <!-- 表單 start -->
    <!------------- 第一題 ------------->
    <img class="photo" :src="formQ1" alt="" />
    <!-- <h1>1</h1>
    <b>您的大名</b> -->
    <input type="text" v-model="name" />
    <div class="margin_top_45"></div>

    <!------------- 第二題 ------------->
    <img class="photo" :src="formQ2" alt="" />
    <!-- <h1>2</h1>
    <b>您的聯絡電話</b> -->
    <input type="text" inputmode="tel" v-model="phone" />
    <div class="margin_top_45"></div>

    <!------------- 第三題 ------------->
    <img class="photo" :src="formQ3" alt="" />
    <!-- <h1>3</h1>
    <b>和新人的關係</b> -->
    <div class="hint">
      鴻海夥伴請選"鴻海專屬，我都熟～～"，別擔心你們都有餅:)
    </div>

    <div class="wrap">
      <div class="radio_option">
        <input
          name="relation"
          type="radio"
          id="relation1"
          value="1"
          v-model="relation"
        />
        <label for="relation1">男方親友</label>
      </div>

      <div class="radio_option">
        <input
          name="relation"
          type="radio"
          id="relation2"
          value="2"
          v-model="relation"
        />
        <label for="relation2">女方親友</label>
      </div>

      <div class="radio_option">
        <input
          name="relation"
          type="radio"
          id="relation3"
          value="3"
          v-model="relation"
        />
        <label for="relation3">鴻海專屬，我都熟～～</label>
      </div>
    </div>

    <div class="margin_top_45"></div>

    <!------------- 第四題 ------------->
    <img class="photo" :src="formQ4" alt="" />
    <!-- <h1>4</h1>
    <b>是否出席婚宴</b> -->
    <div class="hint">無法前來的朋友請不要有壓力，非常感謝你們的祝福！</div>

    <div class="wrap">
      <div class="radio_option">
        <input name="show" type="radio" id="show1" value="1" v-model="show" />
        <label for="show1">出席，一定要親眼見證！</label>
      </div>

      <div class="radio_option">
        <input name="show" type="radio" id="show2" value="2" v-model="show" />
        <label v-on:click="toQ8()" for="show2"
          >好想去，但當天有事，禮到人不到～～</label
        >
      </div>

      <div class="radio_option">
        <input name="show" type="radio" id="show3" value="3" v-model="show" />
        <label v-on:click="toQ8()" for="show3"
          >無法出席，祝你們幸福美滿！</label
        >
      </div>
    </div>
    <div class="margin_top_45"></div>

    <!------------- 第五題 ------------->
    <div class="display_flex middle">
      <img class="photo" :src="formQ5" alt="" />
      <!-- <h1>5</h1>
      <b>共幾位出席</b> -->
      <input type="text" inputmode="numeric" v-model="show_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第六題 ------------->
    <div class="display_flex middle">
      <img class="photo" :src="formQ6" alt="" />
      <!-- <h1>6</h1>
      <b>需要幾張兒童座椅</b> -->
      <input type="text" inputmode="numeric" v-model="child_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第七題 ------------->
    <div class="display_flex middle">
      <img class="photo" :src="formQ7" alt="" />
      <!-- <h1>7</h1>
      <b>共幾位吃素</b> -->
      <input type="text" inputmode="numeric" v-model="veg_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第八題 ------------->
    <img class="photo" :src="formQ8" alt="" />
    <!-- <h1 id="question8">8</h1>
    <b>想要收到紙本喜帖嗎</b> -->

    <div class="wrap">
      <div class="radio_option">
        <input
          name="invitation"
          type="radio"
          id="invitation1"
          value="1"
          v-model="invitation"
        />
        <label for="invitation1">我要我要，請寄喜帖給我～～</label>
      </div>

      <div class="radio_option">
        <input
          name="invitation"
          type="radio"
          id="invitation2"
          value="2"
          v-model="invitation"
        />
        <label for="invitation2">不用哦，婚禮相關資訊我都知道了！</label>
      </div>
    </div>
    <div class="margin_top_45"></div>

    <!------------- 第九題 ------------->
    <img class="photo" :src="formQ9" alt="" />
    <!-- <h1>9</h1>
    <b>喜帖郵寄地址</b> -->
    <input id="address" type="text" v-model="address" />
    <div class="margin_top_45"></div>

    <!------------- 第十題 ------------->
    <img class="photo" :src="formQ10" alt="" />
    <!-- <h1>10</h1>
    <b>有什麼話想和我們說嗎</b> -->
    <textarea cols="36" rows="4" v-model="feedback"></textarea>

    <div class="margin_top_45"></div>
    <!-- 表單 end -->

    <!-- 按鈕 start -->
    <!-- <button class="button-80" v-on:click="addGoogle" :disabled="clickLock ? true : false">
      送出
    </button> -->
    <img
      class="photo btn"
      :src="form1"
      v-on:click="addGoogle"
      :disabled="clickLock ? true : false"
      alt=""
    />
    <!-- 按鈕 end -->
    <div class="margin_top_45"></div>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require("google-spreadsheet");
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// const creds = require("@/auth.json");
export default {
  name: "formSection",
  data() {
    return {
      form1: require("../assets/images/form1.png"),
      formQ1: require("../assets/images/formQ1.png"),
      formQ2: require("../assets/images/formQ2.png"),
      formQ3: require("../assets/images/formQ3.png"),
      formQ4: require("../assets/images/formQ4.png"),
      formQ5: require("../assets/images/formQ5.png"),
      formQ6: require("../assets/images/formQ6.png"),
      formQ7: require("../assets/images/formQ7.png"),
      formQ8: require("../assets/images/formQ8.png"),
      formQ9: require("../assets/images/formQ9.png"),
      formQ10: require("../assets/images/formQ10.png"),
      name: "",
      phone: "",
      relation: "",
      show: "",
      show_num: "",
      child_num: "",
      veg_num: "",
      invitation: "",
      address: "",
      feedback: "",
      creds: require("../../auth.json"),
      clickLock: false,
      isLoading: false,
    };
  },
  components: {
    Loading,
  },
  computed: {
    isQ4true() {
      if (this.show != "2" && this.show != "3") {
        return true;
      } else {
        return true;
      }
    },
  },
  methods: {
    async addGoogle() {
      this.isLoading = true;
      this.clickLock = true;
      const newData = {
        time: new Date().toLocaleString(),
        name: this.name,
        phone: "'" + this.phone,
        relation: this.Q3formate(),
        show: this.Q4formate(),
        show_num: this.show_num,
        child_num: this.child_num,
        veg_num: this.veg_num,
        invitation: this.Q8formate(),
        address: this.address,
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
      this.address = "";
      this.feedback = "";

      this.clickLock = false;
      console.log("新增成功");
      // await alert("新增成功");
      await this.$router.push("/result");
    },
    Q3formate() {
      switch (this.relation) {
        case "1":
          return "男方親友";
        case "2":
          return "女方親友";
        case "3":
          return "鴻海專屬，我都熟";
        default:
          return "";
      }
    },
    Q4formate() {
      switch (this.show) {
        case "1":
          return "出席，一定要親眼見證！";
        case "2":
          return "好想去，但當天有事，禮到人不到～～";
        case "3":
          return "無法出席，祝你們幸福美滿！";
        default:
          return "";
      }
    },
    Q8formate() {
      switch (this.invitation) {
        case "1":
          return "我要我要，請寄喜帖給我～～";
        case "2":
          return "不用哦，婚禮相關資訊我都知道了！";
        default:
          return "";
      }
    },
    toQ8() {
      console.log('^^^^^');
      // this.$nextTick(() => {window.document.getElementById('question8').scrollIntoView(true);});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box {
  margin-top: 30px;
}

.btn {
  width: 28%;
}

img {
  width: 85%;
}

.radio_option {
  display: inline-block;
}

.wrap {
  display: grid;
  text-align: left;
}

.hint {
  font-size: 12px;
  color: rgb(85, 81, 81);
}

input[type="text"],
textarea {
  font-size: 16px;
}

input[type="text"] {
  width: 100px;
}

#address {
  width: 200px;
}

label {
  font-size: 13px;
  margin-left: 15px;
}
</style>
