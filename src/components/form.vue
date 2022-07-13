<template>
  <div class="box display_flex middle" id="box">
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
    <div class="hint">鴻海夥伴請選"鴻海專屬，我都熟～～"，別擔心你們都有餅:)</div>

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
    <h1>4</h1>
    <b>是否出席婚宴</b>
    <div class="hint">無法前來的朋友請不要有壓力，非常感謝你們的祝福！</div>

    <div class="wrap">
      <div class="radio_option">
        <input name="show" type="radio" id="show1" value="1" v-model="show" />
        <label for="show1">出席，一定要親眼見證！</label>
      </div>

      <div class="radio_option">
        <input name="show" type="radio" id="show2" value="2" v-model="show" />
        <label for="show2">好想去，但當天有事，禮到人不到～～</label>
      </div>

      <div class="radio_option">
        <input name="show" type="radio" id="show3" value="3" v-model="show" />
        <label for="show3">無法出席，祝你們幸福美滿！</label>
      </div>
    </div>
    <div class="margin_top_45"></div>

    <!------------- 第五題 ------------->
    <div class="display_flex middle" v-if="true">
      <h1>5</h1>
      <b>共幾位出席</b>
      <input type="text" inputmode="numeric" v-model="show_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第六題 ------------->
    <div class="display_flex middle" v-if="isQ4true">
      <h1>6</h1>
      <b>需要幾張兒童座椅</b>
      <input type="text" inputmode="numeric" v-model="child_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第七題 ------------->
    <div class="display_flex middle" v-if="isQ4true">
      <h1>7</h1>
      <b>共幾位吃素</b>
      <input type="text" inputmode="numeric" v-model="veg_num" />
      <div class="margin_top_45"></div>
    </div>

    <!------------- 第八題 ------------->
    <h1>8</h1>
    <b>想要收到紙本喜帖嗎</b>

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
    <h1>9</h1>
    <b>喜帖郵寄地址</b>
    <input type="text" v-model="address">
    <div class="margin_top_45"></div>

    <!------------- 第十題 ------------->
    <h1>10</h1>
    <b>有什麼話想和我們說嗎</b>
    <textarea cols="36" rows="4" v-model="feedback"></textarea>

    <div class="margin_top_45"></div>
    <!-- 表單 end -->

    <!-- 按鈕 start -->
    <button
      class="button-80"
      v-on:click="addGoogle"
      :disabled="clickLock ? true : false"
    >
      送出
    </button>
    <!-- 按鈕 end -->
    <div class="margin_top_45"></div>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require("google-spreadsheet");
const $ = require('jquery');
export default {
  name: "formSection",
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
      address: "",
      feedback: "",
      creds: require("../../auth.json"),
      clickLock: false,
    };
  },
  computed: {
    isQ4true() {
      if (this.show != "2" && this.show != "3") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted: function () {
    $("input[type=text], textarea").on({
      touchstart: function () {
        console.log('^^^^^ touch start');
        zoomDisable();
      },
    });
    $("input[type=text], textarea").on({
      touchend: function () {
        console.log('^^^^^ touch end');
        setTimeout(zoomEnable, 500);
      },
    });

    function zoomDisable() {
      $("head meta[name=viewport]").remove();
      $("head").prepend(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />'
      );
    }
    function zoomEnable() {
      $("head meta[name=viewport]").remove();
      $("head").prepend(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />'
      );
    }
  },
  methods: {
    async addGoogle() {
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
      await this.$router.push('/result')
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box {
  margin-top: 30px;
}

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

/* CSS */
.button-80 {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.375rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-80:not(:disabled):hover {
  transform: scale(1.05);
}

.button-80:not(:disabled):hover:active {
  transform: scale(1.05) translateY(0.125rem);
}

.button-80:focus {
  outline: 0 solid transparent;
}

.button-80:focus:before {
  content: "";
  left: calc(-1 * 0.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1 * 0.375rem);
  transition: border-radius;
  user-select: none;
}

.button-80:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-80:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-80:not(:disabled):active {
  transform: translateY(0.125rem);
}

.hint {
  font-size: 12px;
  color: rgb(85, 81, 81);
}

input[type="text"] {
  font-size: 16px;
}

label {
  font-size: 13px;
}
</style>
