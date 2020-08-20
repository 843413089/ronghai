<template>
  <div class="SelectAddress">
    <div class="header">
      <van-cell>
        <template #title>
          <van-image class="DeleteIcon" :src="DeleteIcon" />
          <span class="custom-title">选择经营地址</span>
          <span class="custom-over">完成</span>
        </template>
      </van-cell>
    </div>
    <div class="main">
      <div class="cell-main" v-for="(item,index) in Managementlist" :key="index">
        <van-row>
          <van-col span="4">
            <van-radio-group v-model="radio">
              <van-radio
                class="checkbox-type"
                checked-color="#FF5D23"
                icon-size="13px"
                @click="saveradio(item)"
                :name="item.companyId"
              ></van-radio>
            </van-radio-group>
          </van-col>

          <van-col span="20">
            <div class="title-type">
              <div class="name-type">
                <span>{{item.linkMan}}</span>
                <span>{{item.linkPhone}}</span>
              </div>
              <div class="adress-type">
                <van-tag type="warning" class="Shoptype-style">{{item.cherss}}</van-tag>
                <span class="Shopadress-length">{{item.address}}</span>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "",
      DeleteIcon: require("../assets/icon/cancel.png"),
      checked: "1",
      Managementlist: "", //经营数据
    };
  },
  created() {
    //   获取经营地址
    this.getbusiness();
  },
  methods: {
    saveradio() {
      console.log(this.radio);
    },
    getbusiness() {
      // console.log("获取经营地址");
      var url = "/setting/businessAddress/fetchList";
      this.axios
        .get(url, { params: { pageNum: 1, pageSize: 1, companyId: 1 } })
        .then((response) => {
          // console.log(response.data.data.list);
          this.Managementlist = response.data.data.list;
          // console.log(this.Managementlist.length);
          // 循环判断经营类型
          for (var i = 0; i <= this.Managementlist.length; i++) {
            let managementType = response.data.data.list[i].managementType;
            if (managementType == "") {
              this.Managementlist[i].cherss = "未知";
            } else if (managementType == "0") {
              this.Managementlist[i].cherss = "门店";
            } else if (managementType == "1") {
              this.Managementlist[i].cherss = "出入巷";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.DeleteIcon {
  width: 13px;
  height: 13px;
  margin-left: 13px;
}

.custom-title {
  margin-left: 9px;
  width: 117px;
  height: 18px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 27px;
}

.checkbox-type {
  position: absolute;
  top: 0;
  left: 28px;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}

.cell-main {
  width: 414px;
  height: 69px;
  background: rgba(255, 255, 255, 1);
  position: relative;
}

.title-type {
  position: absolute;
  top: 50%;
  margin-top: -21.5px;
}
.name-type {
  height: 50%;
}
.name-type span:nth-child(1) {
  width: 50px;
  height: 15px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}

.name-type span:nth-child(2) {
  width: 87px;
  height: 11px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(137, 137, 137, 1);
  line-height: 20px;
  margin-left: 34px;
}

.adress-type {
  height: 13px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(49, 48, 48, 1);
  line-height: 20px;
}

.Shopadress-length {
  margin-left: 7px;
  width: 201px;
  height: 13px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(49, 48, 48, 1);
  line-height: 20px;
}

.custom-over {
  float: right;
  width: 28px;
  height: 13px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  margin-right: 12px;
  color: rgba(0, 0, 0, 1);
  line-height: 27px;
}
</style>