<template>
  <div class="map-start">
    <div class="map-start__logo">
      <div class="logo_img"></div>
      <h1 class="h1">互動式網頁設計</h1>
    </div>
    <ul class="map-start__group">
      <li>
        <span class="h5 h4-m group__title">前端工程師</span>
        <div class="group__number">
          <span class="icon icon-user--white icon-22"></span>
          <span class="group__number-text">920</span>
        </div>
      </li>
      <li>
        <span class="h5 group__title">UI設計師</span>
        <div class="group__number">
          <span class="icon icon-user--white icon-22"></span>
          <span class="group__number-text">110</span>
        </div>
      </li>
      <li>
        <span class="h5 group__title">團體組</span>
        <div class="group__number">
          <span class="icon icon-user--white icon-22"></span>
          <span class="group__number-text">41</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MapStart",
  data() {
    return {
      step: 0,
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scope>
@import "@/assets/css/colors.scss";
.map-start__logo {
  width: 680px;
  margin: 0 auto;
  padding-top: 44px;
  margin-bottom: 47px;
  > .logo_img {
    background-image: url("@/assets/image/logo/logo_text.png");
    background-size: cover;
    width: 100%;
    height: 236px;
  }
  > h1 {
    width: 314px;
    height: 56px;
    color: $white;
    border-radius: 100px;
    text-align: center;
    padding: 8px 40px;
    background: $highlight_default;
    margin: -12px auto 0 auto;
  }
}
.map-start__group {
  max-width: 1196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  > li {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .group__title {
    color: $primary_default;
    margin-bottom: 8px;
  }
  .group__number {
    display: flex;
    align-items: center;
    color: $white;
    background: $primary_default;
    border-radius: 40px;
    padding: 4px 28px;
  }
  .group__number-text {
    font-size: 24px;
    font-weight: 700;
    margin-left: 12px;
  }
}
@media (max-width: 1440px) {
  .map-start__logo {
    margin-bottom: 64px;
  }
  .map-start__group {
    max-width: 940px;
  }
}
@media (max-width: 768px) {
  .map-start__logo {
    width: 253px;
    margin-bottom: 20px;
    padding-top: 91px;
    .logo_img {
      height: 189px;
      background-image: url("@/assets/image/logo/logo.png");
    }
    > h1 {
      width: 176px;
      height: 32px;
      color: $white;
      border-radius: 100px;
      text-align: center;
      padding: 3.5px 15px;
      background: $highlight_default;
      margin-top: 12px;
    }
  }
  .map-start__group {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    > li {
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .group__title {
      color: $primary_default;
      margin-bottom: 8px;
    }
    .group__number {
      border-radius: 40px;
      padding: 4px 20px;
      margin-bottom: 16px;
    }
    .group__number-text {
      font-size: 18px;
      margin-left: 4px;
    }
  }
}
</style>
