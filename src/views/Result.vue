<template>
  <div class="container">
    <div class="margin_top_45"></div>
    <div class="box display_flex middle margin_top_45">
        <p>感謝您的填寫</p>
        <p>誠摯期待在婚禮上見到您</p>
        <img class="photo" :src="result1" alt="" />
    </div>
  </div>
</template>
<script>
import "@/assets/style.scss";
export default {
  name: "myResult",
    data() {
    return {
      result1: require('../assets/images/result1.jpg')
    }
  }
};
</script>
