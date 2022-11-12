<template>
  <div class="question-area">
    <div class="question_title title_bg">
      <h2>你是否也有以下困擾？</h2>
    </div>
    <ul class="question_list">
      <li>
        <span class="h4 question_text">羨慕別人的酷酷網頁動畫？</span>
        <img
          class="question-image"
          src="@/assets/image/main/question_1.png"
          alt="question_1"
        />
        <img
          class="question-image--m"
          src="@/assets/image/main/question_1_m.png"
          alt="question_1"
        />
      </li>
      <li>
        <span class="h4 question_text">滿足不了同事的許願？</span>
        <img
          class="question-image"
          src="@/assets/image/main/question_2.png"
          alt="question_2"
        />
        <img
          class="question-image--m"
          src="@/assets/image/main/question_2.png"
          alt="question_2"
        />
      </li>
      <li>
        <span class="h4 question_text">動畫技能樹太雜無從下手？</span>
        <img
          class="question-image"
          src="@/assets/image/main/question_3.png"
          alt="question_3"
        />
        <img
          class="question-image--m"
          src="@/assets/image/main/question_3_m.png"
          alt="question_3"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// import { gsap } from "gsap";

export default {
  name: "QuestionArea",
  data() {
    return {
      step: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scope>
@import "@/assets/css/colors.scss";
.question-area {
  height: 100vh;
  padding-top: 40px;
}
.question_title {
  margin-bottom: 68px;
  &.title_bg {
    // mix titleBg
    width: 736px;
    height: 151px;
    background-size: 98.57px 151px, 538.86px 151px, 98.57px 151px;
    padding-top: 26px;
    padding-bottom: 49px;
  }
  h2 {
    font-size: 60px;
    line-height: 1.25;
    font-weight: 700;
    color: $primary_default;
    text-align: center;
  }
}
.question_list {
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  > li {
    margin-right: 20px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  .question_text {
    display: block;
    text-align: center;
    color: $highlight_default;
    margin-bottom: 4px;
  }
  .question-image {
    display: block;
  }
  .question-image--m {
    display: none;
  }
}
@media (max-width: 1440px) {
  .question_list {
    padding-left: 20px;
  }
}
@media (max-width: 1175px) {
  .question_text {
    font-size: 26px;
  }
}
@media (max-width: 965px) {
  .question_text {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .question_title {
    margin-bottom: 40px;
    &.title_bg {
      // mix titleBg
      width: 100vw;
      background-size: 100vw 72px;
      padding-top: 12.4px;
      padding-bottom: 25.5px;
    }
    h2 {
      font-size: 24px;
      line-height: 1.4;
    }
  }
  .question_list {
    max-width: 477px;
    width: 100%;
    display: block;
    padding-left: 0;
    > li {
      margin-right: 0;
      margin-bottom: 8px;
    }
    .question_text {
      display: block;
      text-align: center;
      color: $highlight_default;
      margin-bottom: 4px;
    }
    .question-image {
      display: none;
    }
    .question-image--m {
      display: block;
    }
  }
}
</style>
