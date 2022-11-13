<template>
  <div class="index">
    <F2EHeader></F2EHeader>
    <SidebarMenu></SidebarMenu>
    <FixBackground></FixBackground>
    <Start></Start>
    <QuestionArea></QuestionArea>
    <Contestant></Contestant>
    <Subject></Subject>
    <ActivityTimeline></ActivityTimeline>
    <Awards></Awards>
    <Sponsor></Sponsor>
  </div>
</template>

<script>
// import { gsap } from "gsap";
import F2EHeader from "@/components/Header.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
import FixBackground from "@/components/FixBackground.vue";
import Start from "@/components/Start.vue";
import QuestionArea from "@/components/QuestionArea.vue";
import Contestant from "@/components/Contestant.vue";
import Subject from "@/components/Subject.vue";
import ActivityTimeline from "@/components/ActivityTimeline.vue";
import Awards from "@/components/Awards.vue";
import Sponsor from "@/components/Sponsor.vue";

export default {
  name: "F2E_Index",
  data() {
    return {
      step: 0,
    };
  },
  components: {
    F2EHeader,
    SidebarMenu,
    FixBackground,
    Start,
    QuestionArea,
    Contestant,
    Subject,
    ActivityTimeline,
    Awards,
    Sponsor,
  },
  methods: {
    // init() {
    //   //   // 計算動畫結束位置
    //   //   const body = document.querySelector("body");
    //   //   const test = document.querySelector(".testBox");
    //   //   const end = test.offsetHeight - body.scrollHeight;
    //   //   console.dir(body);
    //   //   console.dir(test);
    //   //   console.dir(end);
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: `.step-1`,
    //       pin: true,
    //       markers: true,
    //       // start: "top 100%",
    //       // end: `bottom top`,
    //       start: "top 35%",
    //       end: `35% 0%`,
    //       scrub: true,
    //     },
    //   });
    //   timeline.to(".test", { y: 100, delay: 3, duration: 5 });
    //   timeline.to(".test", { x: 100, duration: 1 });
    //   //   const timeline2 = gsap.timeline({
    //   //     scrollTrigger: {
    //   //       trigger: `.step-2`,
    //   //       pin: true,
    //   //       markers: true,
    //   //       start: "top 0%",
    //   //       end: `top ${end}px`,
    //   //       scrub: true,
    //   //     },
    //   //   });
    //   //   timeline2.to(".test", { y: 200, duration: 5 });
    //   //   timeline2.to(".test", { x: 300, duration: 1 });
    // },
  },
  mounted() {
    // this.init();
  },
};
</script>
<style lang="scss">
@import "@/assets/css/colors.scss";
</style>
