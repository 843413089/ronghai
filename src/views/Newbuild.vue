<template>
  <div class="Newbuild">
    <div class="header">
      <DestoryHeader :msg="text"></DestoryHeader>
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
          <van-stepper v-model="value" input-width="104px" />
          <!-- 步进器 -->
        </template>
      </van-cell>

      <div class="border-none">
        <van-cell>
          <template #title>
            <span class="Deliverytime">备注信息</span>
          </template>
        </van-cell>
      </div>

      <div class="field-father">
        <van-field
          class="field-height"
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入备注信息"
        />
      </div>
    </div>
    <div class="footer">
      <van-button type="warning">保存</van-button>
    </div>
  </div>
</template>
<script>
import DestoryHeader from "@/components/DestoryHeader.vue";
export default {
  data() {
    return {
      text: "新建专线渠道",
      DeleteIcon: require("../assets/icon/cancel.png"),
      message: "",
      value: "",
    };
  },
  components: {
    DestoryHeader,
  },
  methods: {
    dataChange(data) {
      this.msg = data;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin-top: 13px;
  .Deliverytime {
    width: 67px;
    height: 15px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    line-height: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .Deliveryarea {
    display: inline-block;
    width: 103px;
    height: 13px;
    font-size: 13px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(173, 169, 169, 1);
    line-height: 13px;
    position: absolute;
    top: 50%;
    left: 110px;
    transform: translateY(-50%);
  }
  .field-father {
    padding: 10px;
    background-color: #fff;
    .field-height {
      height: 86px;
      background: rgba(243, 243, 243, 1);
      border-radius: 5px;
    }
  }
  .stepping-motor .van-cell__title {
    display: flex;
  }
  .stepping-motor .van-stepper {
    display: inline-block;
    margin-left: 89px;
    /* 这个值要修改 */
  }
}
.border-none {
  .van-cell::after {
    border: none;
  }
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  .van-button {
    position: fixed;
    bottom: 12.5px;
    border-radius: 19px;
    width: 351px;
    height: 42px;
  }
}
</style>