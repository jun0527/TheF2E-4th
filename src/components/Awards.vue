<template>
  <div class="awards-area">
    <div class="awards_page1">
      <h2 class="h2 h2-m">
        <span>區區修煉</span><span>已經無法滿足了嗎？</span>
      </h2>
    </div>
    <div class="awards_page2">
      <div class="awards_title title_bg">
        <h2>還有比賽等著你！</h2>
      </div>
      <div class="awards_content">
        <div class="content-img">
          <img src="@/assets/image/main/award_light.png" alt="award trophy" />
          <img
            class="img-award"
            src="@/assets/image/main/award_trophy.png"
            alt="award trophy"
          />
        </div>
        <div class="content_list">
          <div class="content_item">
            <h3 class="h4">評審機制</h3>
            <ul>
              <li>初選： 將由六角學院前端、UI 評審進行第一波篩選。</li>
              <li>
                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                由評審進行直播公布名單！
              </li>
            </ul>
          </div>
          <div class="content_item">
            <h3 class="h4">獎項</h3>
            <ul>
              <li>1. 初選佳作 共六十位 數位獎狀</li>
              <li>
                2. 個人企業獎 共六位 NTD <span class="focus">3,000</span> /位
              </li>
              <li>
                3. 團體企業獎 共三組 NTD <span class="focus">10,000</span> /組
              </li>
              <li>4. 以上皆提供完賽數位獎狀</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Awards-Area",
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
.awards_page1 {
  min-height: 100vh;
  padding-top: 232px;
  h2 {
    color: $highlight_default;
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 768px) {
  .awards_page1 {
    h2 {
      flex-direction: column;
      align-items: center;
    }
  }
}
.awards_page2 {
  min-height: 100vh;
  padding-top: 40px;
}
.awards_title {
  &.title_bg {
    // mix titleBg
    width: 627px;
    height: 151px;
    background-size: 98.57px 151px, 429.86px 151px, 98.57px 151px;
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
.awards_content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  .content-img {
    position: relative;
    max-width: 375px;
    max-height: 375px;
    width: 100%;
    height: auto;
    margin-right: 60px;
  }
  .img-award {
    position: absolute;
    max-width: 375px;
    max-height: 375px;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
  .content_item {
    margin-bottom: 32px;
  }
  h3 {
    color: $highlight_default;
    margin-bottom: 12px;
  }
  li {
    font-size: 18px;
    color: $primary_default;
    font-weight: 500;
  }
}
@media (max-width: 1440px) {
  .awards_content {
    max-width: 1180px;
  }
}
@media (max-width: 960px) {
  .awards_title {
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
}
@media (max-width: 768px) {
  .awards_title {
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
  .awards_content {
    max-width: 478px;
    display: block;
    padding: 20px;
    .content-img {
      margin: 0 auto;
      margin-bottom: 24px;
    }
    .content_item {
      margin-bottom: 32px;
    }
    h3 {
      color: $highlight_default;
      margin-bottom: 12px;
    }
    li {
      font-size: 18px;
      color: $primary_default;
      font-weight: 500;
    }
  }
}
@media (max-width: 375px) {
}
</style>
