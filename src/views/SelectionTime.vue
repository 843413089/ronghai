<template>
  <div class="SelectionTime">
    <van-popup
      v-model="show"
      position="bottom"
      round
      closeable
      :style="{ height: '345px',overflow:'hidden'}"
    >
      <van-cell class="cover-vancell">
        <template #title>
          <span class="cover-header">选择班车时间</span>
        </template>
      </van-cell>

      <!-- <van-cell class="cover-mid">
        <template #title>
          <span class="cover-header">时</span>
        </template>
      </van-cell>-->

      <van-datetime-picker v-model="currentTime" type="time" :columns-order="['hour', 'minute']" :formatter="formatter"/>

      <div class="footer">
        <van-button type="warning">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: true,
      currentTime: new Date(),
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    formatter(type, val) {
      if (type === 'hour') {
        return val + '时';
      }
      if (type === 'minute') {
        return val + '分';
      }
      return val;
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}
.van-button {
  position: fixed;
  bottom: 12.5px;
  border-radius: 19px;
  width: 351px;
  height: 42px;
}

.cover-vancell {
  text-align: center;
}

.cover-header {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}

.van-datetime-picker {
  position: relative;
  top: -60px;
  z-index: -100;
}

/deep/ .van-picker-column__item {
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
  z-index: -100;
  background: transparent;
}


/deep/ .van-picker-column__item--selected {
  color: #ff5d23;
}

</style>