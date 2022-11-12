<template>
  <div class="subject-area">
    <div class="subject_title title_bg">
      <h2>年度最強合作，三大主題來襲</h2>
    </div>
    <span class="h5 subject_text"
      >各路廠商強強聯手<br />共同設計出接地氣的網頁互動挑戰關卡</span
    >
    <ul class="subject_list">
      <li>
        <img
          class="subject_image"
          src="@/assets/image/main/week_1.png"
          alt="subject week_1"
        />
        <div class="subject_content">
          <h3 class="h2">WEEK 1</h3>
          <h4 class="">The F2E 活動網站設計</h4>
          <ul class="tags">
            <li class="highlight">Parallax Scrolling</li>
            <li class="highlight">#版塊設計</li>
          </ul>
          <button type="button">查看關卡細節</button>
        </div>
      </li>
      <li class="reverse">
        <img
          class="subject_image"
          src="@/assets/image/main/week_2.png"
          alt="subject week_2"
        />
        <div class="subject_content">
          <h3 class="h2">WEEK 2</h3>
          <h4>今晚，我想來點點簽</h4>
          <ul class="tags">
            <li class="highlight">Canvas</li>
            <li class="highlight">#凱鈿行動科技</li>
          </ul>
          <button type="button">查看關卡細節</button>
        </div>
      </li>
      <li>
        <img
          class="subject_image"
          src="@/assets/image/main/week_3.png"
          alt="subject week_3"
        />
        <div class="subject_content">
          <h3 class="h2">WEEK 3</h3>
          <h4>Scrum 新手村</h4>
          <ul class="tags">
            <li class="highlight">JS draggable</li>
            <li class="highlight">#鈦坦科技</li>
          </ul>
          <button type="button">查看關卡細節</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Subject-Area",
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
.subject-area {
  min-height: 100vh;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
.subject_title {
  &.title_bg {
    // mix titleBg
    width: 940px;
    height: 151px;
    background-size: 98.57px 151px, 742.86px 151px, 98.57px 151px;
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
.subject_text {
  display: block;
  color: $secondary_dark;
  margin-bottom: 100px;
  text-align: center;
}
.subject_list {
  max-width: 1438px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 318px;
  padding: 0 20px;
  > li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
  }
  .subject_image {
    width: 280px;
    margin-right: 40px;
    margin-left: 0;
  }
  .subject_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .reverse {
    flex-direction: row-reverse;
    .subject_image {
      margin-left: 40px;
      margin-right: 0;
    }
    .subject_content {
      align-items: flex-end;
    }
  }
  h3 {
    color: $highlight_default;
    margin-bottom: 8px;
  }
  h4 {
    color: $primary_default;
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .tags {
    display: flex;
    margin-bottom: 20px;
    > li {
      color: $secondary_dark;
      padding: 4px 24px;
      border: 2px solid $secondary_dark;
      border-radius: 60px;
      margin-right: 12px;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
  button {
    color: $white;
    font-size: 18px;
    font-weight: 500;
    padding: 4px 24px;
    background: $secondary_dark;
    border-radius: 60px;
    &:hover {
      background: $highlight_default;
    }
  }
}
@media (max-width: 1440px) {
  .subject_text {
    margin-bottom: 100px;
  }
  .subject_list {
    max-width: 1180px;
  }
}
@media (max-width: 960px) {
  .subject_title {
    &.title_bg {
      // mix titleBg
      width: 730px;
      background-size: 98.57px 151px, 532.86px 151px, 98.57px 151px;
      padding-top: 32px;
    }
    h2 {
      font-size: 48px;
    }
  }
  .subject_list {
    .tags {
      > li {
        font-size: 20px;
        padding: 4px 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .subject-area {
    padding-left: 0;
    padding-right: 0;
  }
  .subject_title {
    &.title_bg {
      // mix titleBg
      width: 100vw;
      height: 72px;
      background-size: 100vw 72px;
      padding-top: 12.4px;
      padding-bottom: 25.5px;
    }
    h2 {
      font-size: 24px;
      line-height: 1.4;
    }
  }
  .subject_list {
    width: 100%;
    > li {
      display: block;
      margin-bottom: 44px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
    .reverse {
      .subject_image {
        margin: 0 auto;
      }
      .subject_content {
        align-items: center;
      }
    }
    .subject_image {
      display: block;
      width: 200px;
      margin: 0 auto;
      margin-bottom: 8px;
    }
    .subject_content {
      align-items: center;
    }
    .tags {
      flex-direction: column;
      align-items: center;
      > li {
        margin-bottom: 16px;
        margin-right: 0;
        font-size: 24px;
        padding: 4px 24px;
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
}
@media (max-width: 490px) {
  .subject_text.subject_text {
    font-size: 20px;
  }
  .subject_list {
    h4 {
      font-size: 30px;
    }
  }
}
@media (max-width: 375px) {
  .subject_list {
    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 24px;
    }
    .tags {
      > li {
        font-size: 18px;
      }
    }
  }
}
</style>
