<template>
  <div class="sidebar">
    <div v-if="isMenuOpen" class="mask" @click="isMenuOpen = false"></div>
    <div class="sidebar_menu">
      <button class="menu_switch-button" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="icon icon-burger-close icon-66"></span>
        <span v-else class="icon icon-burger-open icon-66"></span>
      </button>
      <button class="menu_button" type="button">
        <span class="icon icon-menu-info icon-60"></span>
        <span class="button_text">關卡資訊</span>
      </button>
      <button class="menu_button" type="button">
        <span class="icon icon-menu-list icon-60"></span>
        <span class="button_text">作品列表</span>
      </button>
      <button class="menu_button" type="button">
        <span class="icon icon-menu-strategy icon-60"></span>
        <span class="button_text">攻略資源</span>
      </button>
      <button class="menu_button" type="button">
        <span class="icon icon-menu-job icon-60"></span>
        <span class="button_text">求職專區</span>
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { mapWritableState } from "pinia";
import { useMainStore } from "@/stores/main";

export default {
  computed: {
    ...mapWritableState(useMainStore, ["isMenuOpen"]),
  },
  watch: {
    isMenuOpen() {
      if (this.isMenuOpen) {
        gsap.to(".sidebar_menu", { x: 135 });
      } else {
        gsap.to(".sidebar_menu", { x: 0 });
      }
    },
  },
};
</script>
<style lang="scss" scope>
@import "@/assets/css/colors.scss";
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  z-index: 99;
  > * {
    pointer-events: auto;
  }
}
.sidebar_menu {
  position: fixed;
  top: 0;
  left: -135px;
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $primary_default;
  padding: 40px 20px;
  height: 100vh;
}
.menu_switch-button {
  position: absolute;
  top: 50%;
  right: -66px;
  .icon-burger-close {
    background-image: url("@/assets/image/btn/btn_burger_close.png");
  }
  .icon-burger-open {
    background-image: url("@/assets/image/btn/btn_burger_open.png");
  }
  &:hover {
    .icon-burger-close {
      background-image: url("@/assets/image/btn/btn_burger_close_h.png");
    }
    .icon-burger-open {
      background-image: url("@/assets/image/btn/btn_burger_open_h.png");
    }
  }
  &:active {
    .icon-burger-close {
      background-image: url("@/assets/image/btn/btn_burger_close_p.png");
    }
    .icon-burger-open {
      background-image: url("@/assets/image/btn/btn_burger_open_p.png");
    }
  }
}
@media (max-width: 768px) {
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffc37dcc;
  }
  .menu_switch-button {
    top: 12px;
  }
}
.menu_button {
  margin-bottom: 40px;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  .icon {
    margin: 0 auto;
    margin-bottom: 4px;
  }
  .button_text {
    font-size: 18px;
    font-weight: 500;
    color: $secondary_default;
  }
  .icon-menu-info {
    background-image: url("@/assets/image/ic/ic_menu_info.png");
  }
  .icon-menu-list {
    background-image: url("@/assets/image/ic/ic_menu_list.png");
  }
  .icon-menu-strategy {
    background-image: url("@/assets/image/ic/ic_menu_strategy.png");
  }
  .icon-menu-job {
    background-image: url("@/assets/image/ic/ic_menu_job.png");
  }
  &:hover {
    .icon-menu-info {
      background-image: url("@/assets/image/ic/ic_menu_info_h.png");
    }
    .icon-menu-list {
      background-image: url("@/assets/image/ic/ic_menu_list_h.png");
    }
    .icon-menu-strategy {
      background-image: url("@/assets/image/ic/ic_menu_strategy_h.png");
    }
    .icon-menu-job {
      background-image: url("@/assets/image/ic/ic_menu_job_h.png");
    }
    .button_text {
      color: $secondary_tint;
    }
  }
}
</style>
