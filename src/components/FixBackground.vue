<template>
  <div class="fix-background">
    <div class="background-item__start">
      <div class="background-item__start-image"></div>
    </div>
    <div class="background-item__ready-frame">
      <span class="ready-frame__text">READY?</span>
      <img
        class="ready-frame"
        src="@/assets/image/main/ready_frame.png"
        alt="ready frame"
      />
      <img
        class="ready-frame__light ready-frame__red-light"
        src="@/assets/image/main/ready_3.png"
        alt="red light"
      />
      <img
        class="ready-frame__light ready-frame__orange-light"
        src="@/assets/image/main/ready_2.png"
        alt="orange light"
      />
      <img
        class="ready-frame__light ready-frame__green-light"
        src="@/assets/image/main/ready_1.png"
        alt="green light"
      />
    </div>
    <div class="background_racing">
      <div :style="racingStyle">
        <div class="racing_road">
          <img src="@/assets/image/main/road.png" alt="road" />
          <div class="racing_runner runner-f2e">
            <img
              src="@/assets/image/character/character_f2e.gif"
              alt="runner f2e"
            />
          </div>
          <div class="racing_runner runner-ui">
            <img
              src="@/assets/image/character/character_ui.gif"
              alt="runner ui"
            />
          </div>
          <div class="racing_runner runner-team">
            <img
              src="@/assets/image/character/character_team.gif"
              alt="runner team"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="press-btn background_join-btn">
      <span class="join-btn_text">JOIN</span>
      <img
        class="join-btn_hand"
        src="@/assets/image/btn/btn_joinHand.gif"
        alt="join hand"
      />
      <span class="icon icon-join"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scope>
@import "@/assets/css/colors.scss";
.fix-background {
  position: absolute;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
}
.background-item__start {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
}
.background-item__start-image {
  max-width: 1480px;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-image: url("@/assets/image/main/start.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.background-item__ready-frame {
  position: absolute;
  width: 275px;
  height: 154px;
  right: 0;
  top: calc(50% - (67.2px / 2));
}
.ready-frame__text {
  position: absolute;
  top: 0;
  left: 60px;
  color: $highlight_default;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
}
.ready-frame {
  position: absolute;
  z-index: 1;
  bottom: 0;
}
.ready-frame__light {
  position: absolute;
  bottom: 29px;
  left: 0;
  width: 49px;
  height: 49px;
}
.ready-frame__red-light {
  left: 33px;
}
.ready-frame__orange-light {
  left: 97px;
}
.ready-frame__green-light {
  left: 162px;
}
@media (max-width: 768px) {
  .background-item__start-image {
    display: none;
  }
  .background-item__ready-frame {
    width: 120px;
    height: 70px;
    top: calc(50% - (67.2px / 2) + 163.6px);
  }
  .ready-frame__text {
    top: 0;
    left: 26px;
    font-size: 14px;
  }
  .ready-frame__light {
    width: 22px;
    height: 22px;
    bottom: 13.9px;
  }
  .ready-frame__red-light {
    left: 14px;
  }
  .ready-frame__orange-light {
    left: 42px;
  }
  .ready-frame__green-light {
    left: 70px;
  }
}
.background_racing {
  position: relative;
  width: 100%;
  height: 100%;
  > div {
    height: 100%;
    width: 100%;
  }
  .racing_runner {
    position: absolute;
    bottom: 0;
    > img {
      position: absolute;
      bottom: 0;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .runner-f2e {
    left: 23.39%;
    right: 58.33%;
    top: calc(42.87% - 41.85%);
    bottom: 1.48%;
  }
  .runner-ui {
    left: 40.42%;
    right: 40.31%;
    top: calc(41.85% - 41.85%);
    bottom: 2.5%;
  }
  .runner-team {
    left: 58.85%;
    right: 22.86%;
    top: calc(50.37% - 41.85%);
    bottom: 0.83%;
  }
  .racing_road {
    position: absolute;
    top: 41.85%;
    right: 0;
    left: 0;
    bottom: 0;
    > img {
      position: absolute;
      max-width: 1175px;
      width: 100%;
      bottom: -0.5px;
      left: calc(50% - 1175px / 2 + 0.5px);
    }
    @media (max-height: 900px) {
      top: 60%;
    }
  }
}
.background_join-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 103px;
  height: 173px;
  .join-btn_text {
    font-size: 24px;
    font-weight: 700;
    color: $primary_default;
    margin-bottom: 4px;
  }
  .join-btn_hand {
    width: 57px;
  }
}
@media (max-width: 1440px) {
  .background_racing {
    .runner-f2e {
      left: 19.1%;
      right: 59.93%;
      top: calc(42.87% - 41.85%);
      bottom: 0.49%;
    }
    .runner-ui {
      left: 38.61%;
      right: 39.24%;
      top: calc(48.05% - 41.85%);
      bottom: 1.46%;
    }
    .runner-team {
      left: 59.79%;
      right: 19.24%;
      top: calc(55.76% - 41.85%);
      bottom: -0.1%;
    }
    .racing_road {
      top: 41.05%;
      > img {
        left: calc(50% - 1175px / 2 - 5.5px);
      }
      @media (max-height: 900px) {
        top: 55%;
      }
    }
  }
}
@media (max-width: 1175px) {
  .background_racing {
    .racing_road {
      > img {
        left: 0;
      }
    }
  }
}
@media (max-width: 768px) {
  .background_racing {
    .racing_runner {
      top: auto;
      bottom: 0;
    }
    .runner-f2e {
      width: 112.35px;
      height: 192.47px;
      left: 0;
    }
    .runner-ui {
      width: 118.49px;
      height: 192.47px;
      left: 124.5px;
    }
    .runner-team {
      width: 112.35px;
      height: 168.83px;
      left: 248px;
    }
    .racing_road {
      width: 360.35px;
      left: calc(50% - 180px);
      top: 618px;
      bottom: 0;
    }
  }
  .background_join-btn {
    display: none;
  }
}
@media (max-width: 375px) {
  .background_racing {
    .runner-f2e {
      width: 112.35px;
      height: 192.47px;
      left: 4px;
    }
    .runner-ui {
      width: 118.49px;
      height: 192.47px;
      left: 117.5;
      bottom: 1.53px;
    }
    .runner-team {
      width: 112.35px;
      height: 168.83px;
      left: 227px;
      bottom: 0.61px;
    }
    .racing_road {
      width: 100%;
      left: 0;
      top: 618px;
      bottom: 0;
    }
  }
}
</style>
