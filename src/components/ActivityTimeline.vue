<template>
  <div class="activity-timeline">
    <div class="timeline_title title_bg">
      <h2>重要時程</h2>
    </div>
    <div class="timeline_group">
      <div class="timeline_item item_sign-up">
        <div class="item_bg">
          <button class="press-btn item_img">
            <img
              class="btn_hand"
              src="@/assets/image/btn/btn_joinHand.gif"
              alt="sing up"
            />
            <span class="icon icon-join"></span>
          </button>
          <h3 class="h2">SIGN UP</h3>
          <div class="h4 item_time">10/13 - 11/6</div>
          <ul class="item_describe">
            <li class="h5">截止前可修改報名組別</li>
          </ul>
        </div>
        <div class="item_line">
          <img src="@/assets/image/main/date_weekLine.png" alt="weekLine" />
        </div>
      </div>
      <div class="timeline_item item_start">
        <div class="item_bg">
          <div class="item_img">
            <img src="@/assets/image/main/date_start.png" alt="start" />
          </div>
          <h3 class="h2">START</h3>
          <div class="h4 item_time">10/31 - 11/28</div>
          <ul class="item_describe">
            <li class="h5">10/31(一) UI、團體組開賽</li>
            <li class="h5">11/7(一) 前端組開賽</li>
          </ul>
        </div>
        <div class="item_line">
          <img src="@/assets/image/main/date_weekLine.png" alt="weekLine" />
        </div>
      </div>
      <div class="timeline_item item_upload">
        <div class="item_bg">
          <div class="item_img">
            <img src="@/assets/image/main/date_upload.png" alt="upload" />
          </div>
          <h3 class="h2">UPLOAD</h3>
          <div class="h4 item_time">10/31 - 11/28</div>
          <ul class="item_describe">
            <li class="h5">依賽程登錄作品</li>
            <li class="additional">額外競賽： 主題豐厚獎金等著你</li>
          </ul>
        </div>
        <div class="item_line">
          <img src="@/assets/image/main/date_weekLine.png" alt="weekLine" />
        </div>
      </div>
      <div class="timeline_line">
        <img src="@/assets/image/main/date_line.png" alt="timeline line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity-Timeline",
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
.activity-timeline {
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
}
.timeline_title {
  display: none;
}
.timeline_group {
  position: relative;
  max-width: 1440px;
  height: 568px;
  margin: 0 auto;
}
.timeline_item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .item_bg {
    background: $secondary_default;
    padding: 20px;
    z-index: 1;
  }
  .item_line {
    position: absolute;
    width: 32px;
    height: 140px;
    bottom: 0;
  }
  &.item_sign-up {
    width: 302px;
    height: 532px;
    bottom: 36px;
    left: 60.5px;
  }
  &.item_start {
    width: 331px;
    height: 486px;
    bottom: 82px;
    left: 546.5px;
  }
  &.item_upload {
    width: 318px;
    height: 529px;
    bottom: 39px;
    right: 60.5px;
  }
  .item_img {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    margin: 0 auto;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .btn_hand {
      width: 57px;
    }
  }
  h3 {
    color: $highlight_default;
    margin-bottom: 12px;
  }
  .item_time {
    color: $white;
    padding: 8px 28px;
    background: $primary_default;
    border-radius: 50px;
    margin-bottom: 12px;
  }
  .item_describe {
    text-align: center;
    .h5 {
      color: $secondary_dark;
    }
    .additional {
      color: $highlight_default;
    }
  }
}
.timeline_line {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  > img {
    display: block;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }
}
@media (max-width: 1440px) {
}
@media (max-width: 768px) {
  .timeline_title {
    display: block;
    h2 {
      font-size: 60px;
      line-height: 1.25;
      font-weight: 700;
      color: $primary_default;
      text-align: center;
    }
  }
  .timeline_group {
    max-width: 478px;
    padding: 40px;
    height: auto;
  }
  .timeline_item.timeline_item {
    position: static;
    margin: 0 auto;
    height: 392px;
    .item_bg {
      background: transparent;
      z-index: 0;
    }
    .item_line {
      display: none;
    }
  }
  .timeline_line {
    display: none;
  }
}
@media (max-width: 375px) {
  .timeline_group {
    padding: 40px;
    height: auto;
    .timeline_item.timeline_item {
      max-width: 335px;
      width: 100%;
    }
    h3 {
      font-size: 28px;
    }
    .item_time {
      font-size: 20px;
    }
    .item_describe {
      > li {
        font-size: 20px;
      }
      .additional {
        font-size: 16px;
      }
    }
  }
}
</style>
