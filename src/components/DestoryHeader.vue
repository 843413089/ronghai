<template>
  <div class="Editchannel">
    <div class="header">
      <van-cell>
        <template #title>
          <van-image class="DeleteIcon" :src="DeleteIcon" />
          <span class="custom-title">{{msg}}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DeleteIcon: require("../assets/icon/cancel.png"),
    };
  },
  props: {
    msg: String,
  },
};
</script>
<style lang="less" scoped>
.custom-title {
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  margin-left: 9px;
  font-weight: 600;
}
.DeleteIcon {
  width: 13px;
  height: 13px;
  margin-left: 13px;
}
</style>
