<template>
  <div class="home">
    <div :style="backgroundDiv">
      <van-image
        style="margin-top:30px;"
        round
        width="7rem"
        height="7rem"
        fit="cover"
        :src="userAvatar"
      />
      <p style="margin-top:20px;color:white;">{{company}}</p>
    </div>
    <van-grid :border="false" :column-num="4" style="margin-top:30px;">
      <van-grid-item>
        <van-image :src="transportIcon" style="width:34px;height:29px;" />
        <p class="settingModule">快运</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="deliveryIcon" style="width:25px;height:29px;" />
        <p class="settingModule">快递</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="thirdIcon" style="width:25px;height:29px;" />
        <p class="settingModule">三方</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="cityIcon" style="width:25px;height:29px;" />
        <p class="settingModule">城配</p>
      </van-grid-item>
      <van-grid-item to="landTransportLineList">
        <van-image :src="lineIcon" style="width:25px;height:29px;" />
        <p class="settingModule">陆运渠道</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="lineGoodIcon" style="width:25px;height:29px;" />
        <p class="settingModule">陆运落货</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="airportIcon" style="width:25px;height:29px;" />
        <p class="settingModule">空运渠道</p>
      </van-grid-item>
      <van-grid-item>
        <van-image :src="airportGoodIcon" style="width:25px;height:29px;" />
        <p class="settingModule">空运落货</p>
      </van-grid-item>
    </van-grid>

    <van-cell-group style="margin-left:13px;margin-right:13px;">
      <van-cell center title="经营地址" is-link to="addressList" />
      <van-cell center title="子单面单显示公司名称">
        <template>
          <van-switch v-model="checked" active-color="#FF5D24" size="small" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Image as VanImage,
  Grid,
  GridItem,
  Switch,
} from "vant";
import { getUser } from "../request/request";
export default {
  name: "home",
  components: {},
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/setting_bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "300px",
        "text-align": "center",
      },
      transportIcon: require("../assets/icon/transport.png"),
      deliveryIcon: require("../assets/icon/delivery.png"),
      thirdIcon: require("../assets/icon/third.png"),
      cityIcon: require("../assets/icon/city.png"),
      lineIcon: require("../assets/icon/line.png"),
      lineGoodIcon: require("../assets/icon/line_good.png"),
      airportIcon: require("../assets/icon/airport.png"),
      airportGoodIcon: require("../assets/icon/airport_good.png"),
      checked: true,
      userAvatar: "",
      company: "",
    };
  },
  mounted() {
    this.initFN();
  },
  methods: {
    initFN() {
      console.log(this.$route.query.userId);
      this.userId = this.$route.query.userId;
      getUser(this.userId).then((res) => {
        console.log(res.data);
        if (res.data.code === 0) {
          this.userAvatar = res.data.data.avatarurl;
          this.company = res.data.data.companyName;
        }
      });
    },
  },
};
</script>

<style scoped>
.van-grid-item__content {
  background-color: transparent;
}

.settingModule {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 31px;
}
</style>
