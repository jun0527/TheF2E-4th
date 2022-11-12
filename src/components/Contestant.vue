<template>
  <div class="contestant-area">
    <div class="contestant_title title_bg">
      <h2>本屆主題：互動式網頁設計</h2>
    </div>
    <span class="h5 contestant_text">以下兩個角色進行攜手合作</span>
    <ul class="contestant_list">
      <li>
        <img
          class="contestant_image"
          src="@/assets/image/character/character_f2e.png"
          alt="contestant f2e"
        />
        <button class="press-btn contestant_btn">
          <img
            class="join-btn_hand"
            src="@/assets/image/btn/btn_joinHand.gif"
            alt="join hand"
          />
          <span class="icon icon-join"></span>
          <span class="h4 btn_title">前端工程師</span>
        </button>
      </li>
      <li class="reverse">
        <img
          class="contestant_image"
          src="@/assets/image/character/character_ui.png"
          alt="contestant ui"
        />
        <button class="press-btn contestant_btn">
          <img
            class="join-btn_hand"
            src="@/assets/image/btn/btn_joinHand.gif"
            alt="join hand"
          />
          <span class="icon icon-join"></span>
          <span class="h4 btn_title">ＵＩ設計師</span>
        </button>
      </li>
      <li>
        <img
          class="contestant_image"
          src="@/assets/image/character/character_team.png"
          alt="contestant team"
        />
        <button class="press-btn contestant_btn">
          <img
            class="join-btn_hand"
            src="@/assets/image/btn/btn_joinHand.gif"
            alt="join hand"
          />
          <span class="icon icon-join"></span>
          <span class="h4 btn_title">團體組(UI+前端)</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contestant-Area",
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
.contestant-area {
  min-height: 100vh;
  padding-top: 40px;
}
.contestant_title {
  &.title_bg {
    // mix titleBg
    width: 875px;
    height: 151px;
    background-size: 98.57px 151px, 677.86px 151px, 98.57px 151px;
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
.contestant_text {
  display: block;
  color: $secondary_dark;
  margin-bottom: 64px;
  text-align: center;
}
.contestant_list {
  max-width: 1196px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  > li {
    width: 359px;
    height: 196px;
  }
  .contestant_image {
    display: none;
  }
  .contestant_btn {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    &:hover .join-btn_hand {
      display: block;
    }
  }
  .join-btn_hand {
    display: none;
    width: 57px;
  }
  .btn_title {
    margin-top: 16px;
    color: $primary_default;
  }
}
@media (max-width: 1440px) {
  .contestant_text {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 39px;
  }
  .contestant_list {
    max-width: 1180px;
    .btn_title {
      white-space: nowrap;
      font-weight: 400;
    }
  }
}
@media (max-width: 768px) {
  .contestant_title {
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
  .contestant_text {
    font-weight: 700;
  }
  .contestant_list {
    max-width: 100%;
    padding: 0 20px;
    display: block;
    margin: 0 auto;
    > li {
      max-width: 478px;
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    .reverse {
      flex-direction: row-reverse;
    }
    .contestant_image {
      display: block;
      width: 50%;
      margin-right: 20px;
      margin-left: 0;
    }
    .reverse {
      .contestant_image {
        // margin-left: 20px;
        margin-right: 0;
      }
    }
    .contestant_btn {
      width: calc(50% - 20px);
      height: 196px;
    }
    .join-btn_hand {
      display: none;
      width: 57px;
    }
    .btn_title {
      font-weight: 700;
    }
  }
}
@media (max-width: 500px) {
  .contestant_list {
    .btn_title {
      font-size: 20px;
    }
  }
}
@media (max-width: 375px) {
  .contestant_text {
    font-size: 20px;
  }
  .contestant_list {
    .contestant_image {
      display: block;
      width: 157px;
      margin-right: 0;
      margin-left: 0;
    }
  }
}
</style>
