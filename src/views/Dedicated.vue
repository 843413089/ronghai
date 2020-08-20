<template>
  <div class="Dedicated">
    <div class="header">
      <van-cell>
        <template #title>
          <van-image class="DeleteIcon" :src="DeleteIcon" />
          <span class="custom-title">专线渠道</span>
        </template>
      </van-cell>
      <van-cell v-show="cancel">
        <van-search v-model="value" placeholder="出发地/目的地" input-align="center" @focus="onfocus" />
      </van-cell>
      <van-cell v-show="!cancel">
        <van-search v-model="value" show-action placeholder="出发地/目的地">
          <template #action>
            <div class="search">
              <span>搜索</span>
            </div>
          </template>
        </van-search>
      </van-cell>
    </div>
    <div class="main">
      <div class="card" v-for="item in 3" :key="item.id">
        <van-row class="place">
          <van-col span="8">
            <span>杭州桐庐</span>
          </van-col>
          <van-col span="8">
            <van-image class="across" :src="acrossIcon" />
            <van-image class="across" :src="acrossIcon" />
            <van-image class="across" :src="acrossIcon" />
          </van-col>
          <van-col span="8">
            <span>绍兴柯桥</span>
          </van-col>
        </van-row>

        <van-row class="place-nth">
          <van-col span="6">
            <span>班车时间：</span>
          </van-col>
          <van-col span="18">
            <van-tag round plain type="warning">标签</van-tag>
            <van-tag round plain type="warning">标签</van-tag>
            <van-tag round plain type="warning">标签</van-tag>
          </van-col>
        </van-row>

        <van-row class="place-nth">
          <van-col span="6">
            <span>截载时间：</span>
          </van-col>
          <van-col span="18">发车前2小时</van-col>
        </van-row>

        <van-row class="place-nth">
          <van-col span="6">
            <span>运输时间：</span>
          </van-col>
          <van-col span="18">运输2小时</van-col>
        </van-row>

        <van-row class="place-nth">
          <van-col span="6">
            <span>卸车时间：</span>
          </van-col>
          <van-col span="18">卸车2小时</van-col>
        </van-row>

        <van-row class="place-nth">
          <van-col span="6">
            <span>备注信息：</span>
          </van-col>
          <van-col span="18"></van-col>
        </van-row>

        <van-row class="place-nth-last">
          <van-col span="24">
            <div style="display:inline">
              <van-image class="CompileIcon" :src="CompileIcon" />
              <span>编辑</span>
            </div>
            <div style="display:inline;margin-right:23px;margin-left:9px;">
              <van-image class="CompileIcon" :src="DestoryIcon" />
              <span>删除</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DeleteIcon: require("../assets/icon/cancel.png"),
      acrossIcon: require("../assets/icon/across.png"),
      CompileIcon: require("../assets/icon/compile.png"),
      DestoryIcon: require("../assets/icon/destory.png"),
      value: "",
      cancel: true,
    };
  },
  methods: {
    onfocus() {
      console.log("点击");
      //   this.cancel=="false";
      console.log(this.cancel);
      this.cancel = false;
    },
  },
};
</script>
<style scope>
.custom-title {
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  margin-left: 9px;
  font-weight: 600;
}
.van-search .van-cell {
  background: rgba(238, 238, 238, 1);
  border-radius: 14px;
}

.DeleteIcon {
  width: 13px;
  height: 13px;
  margin-left: 13px;
}
.search {
  width: 78px;
  height: 31px;
  background: rgba(255, 93, 36, 1);
  border-radius: 14px;
  text-align: center;
}
.search span {
  width: 28px;
  height: 14px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
.card {
  width: 388px;
  height: 251px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 13px;
  margin-left: 13px;
}
.place {
  height: 44px;
}
.place .van-col {
  position: relative;
}
.place .van-col span {
  width: 66px;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
  position: absolute;
  margin-top: 14px;
  margin-left: 26px;
}
.place .van-col .van-image {
  margin-top: 20px;
}
.across {
  width: 34px;
  height: 5px;
  background: rgba(220, 220, 220, 1);
  margin-left: 2px;
  transform: skewX(40deg);
  -webkit-transform: skewX(40deg); /*兼容-webkit-引擎浏览器*/
  -moz-transform: skewX(40deg); /*兼容-moz-引擎浏览器*/
}

.place-nth {
  height: 26px;
}
.place-nth span {
  width: 63px;
  height: 13px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(138, 137, 137, 1);
  line-height: 20px;
  margin-left: 6px;
}

.place-nth-last .van-col {
  text-align: right;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(138, 137, 137, 1);
  line-height: 20px;
}
.CompileIcon {
  height: 8px;
  width: 8px;
}
</style>