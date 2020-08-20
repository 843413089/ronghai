<template>
  <div class="Newbuild">
    <div class="header">
      <van-cell>
        <template #title>
          <van-image class="DeleteIcon" :src="DeleteIcon" />
          <span class="custom-title">新建专线渠道</span>
        </template>
      </van-cell>
    </div>
    <div class="main">
      <van-cell is-link>
        <template #title>
          <span class="Deliverytime">经营地址</span>
          <span class="Deliveryarea">请选择经营地址</span>
        </template>
      </van-cell>

      <van-cell is-link>
        <template #title>
          <span class="Deliverytime">派送区域</span>
          <span class="Deliveryarea">请选择省市区县</span>
        </template>
      </van-cell>

      <van-cell class="stepping-motor">
        <template #title>
          <span class="Deliverytime">派送时效</span>
          <van-stepper v-model="value" input-width="104px" button-size="25px" />
        </template>
      </van-cell>

      <van-cell>
        <template #title>
          <span class="Deliverytime">备注信息</span>
        </template>
      </van-cell>

      <van-field v-model="message" rows="1" autosize type="textarea" placeholder="请输入备注信息" />
    </div>
    <div class="footer">
      <van-button type="warning">大号按钮</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DeleteIcon: require("../assets/icon/cancel.png"),
      message: "",
      value: "",
    };
  },
};
</script>
<style scope>
.main {
  margin-top: 13px;
}
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

.dress-class {
  width: 67px;
  height: 15px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}

.value-class {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(173, 169, 169, 1);
  border: solid;
}

.default-class {
  text-align: right;
  position: relative;
}
.Deliverytime {
  width: 67px;
  height: 15px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}

.Deliveryarea {
  display: inline-block;
  margin-left: 46px;
  width: 103px;
  height: 13px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(173, 169, 169, 1);
  line-height: 20px;
}

.van-field__value {
  background: rgba(243, 243, 243, 1);
  height: 86px;
}

.stepping-motor .van-cell__title {
  display: table-cell;
  vertical-align: middle;
}

.stepping-motor .van-stepper {
  display: inline-block;
  margin-left: 46px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer .van-button {
  position: fixed;
  bottom: 12.5px;
  border-radius: 19px;
  width: 351px;
  height: 42px;
}
</style>