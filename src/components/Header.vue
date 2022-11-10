<template>
  <header class="header">
    <div class="header_logo">
      <img
        v-if="mapIndex !== 0"
        :style="logoStyle"
        src="@/assets/image/logo/logo.png"
        alt="logo"
      />
    </div>
    <div class="header_logo-text">
      <img
        :style="logoStyle"
        src="@/assets/image/logo/logo_text.png"
        alt="logo"
      />
    </div>
    <button type="button" class="header_user-btn">
      <span class="icon icon-80 icon-user-btn"></span>
    </button>
  </header>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "@/stores/main";

export default {
  name: "F2E_Header",
  data() {
    return {};
  },
  computed: {
    ...mapState(useMainStore, ["mapIndex"]),
    logoStyle() {
      const style = {};
      if (this.mapIndex === 0) {
        style.backgroundImage = "none";
      }
      return style;
    },
  },
  methods: {},
  mounted() {
    console.log(this.mapIndex);
  },
};
</script>
<style lang="scss">
@import "@/assets/css/colors.scss";
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 40px;
  .header_logo {
    width: 200px;
  }
  .header_logo-text {
    position: absolute;
    display: none;
    width: 133px;
    left: 50%;
    margin-left: -66px;
  }
  .header_user-btn {
    width: 80px;
    height: 80px;
    background: transparent;
    > span {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }
    .icon-user-btn {
      background-image: url("@/assets/image/btn/btn_user.png");
    }
    &:hover .icon-user-btn {
      background-image: url("@/assets/image/btn/btn_user_h.png");
    }
  }
}

@media (max-width: 1430px) {
  .header {
    padding: 30px 20px;
  }
}
@media (max-width: 768px) {
  .header {
    padding: 12px 8px;
    .header_logo-text {
      display: block;
    }
    .header_user-btn {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
