<template>
  <div class="container">
    <myHeader />
    <sectionOne />
    <sectionTwo />
    <sectionThree />
    <sectionFour />
    <sectionFive />
    <sectionSix />
    <formSection />
  </div>
</template>

<script>
import "@/assets/style.scss";
import myHeader from "../components/header.vue";
import sectionOne from "../components/section1.vue";
import sectionTwo from "../components/section2.vue";
import sectionThree from "../components/section3.vue";
import sectionFour from "../components/section4.vue";
import sectionFive from "../components/section5.vue";
import sectionSix from "../components/section6.vue";
import formSection from "../components/form.vue";

export default {
  name: "myHome",
  components: {
    myHeader,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
    formSection
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
