<template>
  <div class="sponsor-area">
    <div class="sponsor_title title_bg">
      <h2>贊助單位</h2>
    </div>
    <ul class="sponsor_list">
      <li>
        <div class="sponsor-image">
          <img
            class="img-btn"
            src="@/assets/image/btn/btn_sponsor.png"
            alt="sponsor_3"
          />
          <img
            class="img-btn--hover"
            src="@/assets/image/btn/btn_sponsor_h.png"
            alt="sponsor_3"
          />
          <div class="img-logo">
            <img
              src="@/assets/image/main/logo_blockstudio.png"
              alt="sponsor_1"
            />
          </div>
        </div>
        <span class="h4 highlight-m sponsor_text">#版塊設計</span>
      </li>
      <li>
        <div class="sponsor-image">
          <img
            class="img-btn"
            src="@/assets/image/btn/btn_sponsor.png"
            alt="sponsor_3"
          />
          <img
            class="img-btn--hover"
            src="@/assets/image/btn/btn_sponsor_h.png"
            alt="sponsor_3"
          />
          <div class="img-logo">
            <img
              src="@/assets/image/main/logo_kdanmobile.png"
              alt="sponsor_2"
            />
          </div>
        </div>
        <span class="h4 highlight-m sponsor_text">#鈦坦科技</span>
      </li>
      <li>
        <div class="sponsor-image">
          <img
            class="img-btn"
            src="@/assets/image/btn/btn_sponsor.png"
            alt="sponsor_3"
          />
          <img
            class="img-btn--hover"
            src="@/assets/image/btn/btn_sponsor_h.png"
            alt="sponsor_3"
          />
          <div class="img-logo">
            <img src="@/assets/image/main/logo_titansoft.png" alt="sponsor_3" />
          </div>
        </div>
        <span class="h4 highlight-m sponsor_text">#凱鈿科技</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import { gsap } from "gsap";

export default {
  name: "Sponsor-Area",
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
.sponsor-area {
  min-height: 100vh;
  padding-top: 40px;
}
.sponsor_title {
  margin-bottom: 68px;
  &.title_bg {
    // mix titleBg
    width: 466px;
    height: 151px;
    background-size: 98.57px 151px, 268.86px 151px, 98.57px 151px;
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
.sponsor_list {
  max-width: 1196px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sponsor_text {
    color: $secondary_dark;
    padding: 4px 24px;
    border: 2px solid $secondary_dark;
    border-radius: 60px;
  }
  .sponsor-image {
    position: relative;
    width: 315px;
    height: 315px;
    margin-bottom: 12px;
    cursor: pointer;
    .img-btn--hover {
      display: none;
    }
    .img-logo {
      position: absolute;
      top: 24px;
      left: 27px;
      bottom: 41px;
      right: 38px;
      z-index: 1;
    }
    &:hover {
      .img-btn {
        display: none;
      }
      .img-btn--hover {
        display: block;
      }
      .img-logo {
        top: 26px;
        left: 29px;
        bottom: 39px;
        right: 36px;
      }
    }
  }
}
@media (max-width: 1440px) {
  .sponsor_list {
    padding-left: 20px;
  }
}
@media (max-width: 768px) {
  .sponsor_title {
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
  .sponsor_list {
    max-width: 477px;
    width: 100%;
    display: block;
    padding-left: 0;
    > li {
      margin-right: 0;
      margin-bottom: 40px;
    }
    .sponsor_text {
      display: block;
      text-align: center;
      color: $highlight_default;
      margin-bottom: 4px;
    }
  }
  .sponsor-image.sponsor-image {
    width: 252px;
    height: 252px;
    .img-logo {
      top: 19.2px;
      left: 21.6px;
      bottom: 32.8px;
      right: 30.4px;
      z-index: 1;
    }
    &:hover {
      .img-btn {
        display: none;
      }
      .img-btn--hover {
        display: block;
      }
      .img-logo {
        top: 17.2px;
        left: 19.6px;
        bottom: 32.8px;
        right: 30.4px;
      }
    }
  }
}
</style>
