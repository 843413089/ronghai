<template>
  <div class="Editchannel">
    <div class="header">
      <DestoryHeader :msg="text"></DestoryHeader>
    </div>
    <div class="main">
      <div class="adress-card">
        <div>
          <div class="adress-in">出</div>
          <div>
            <span>省市区</span>
            <span>浙江省杭州市西湖区文三路 138 号东方通信大厦</span>
          </div>
          <div>
            <span>详细地址</span>
            <span>浙江省杭州市西湖区文三路 138 号东方通信大厦</span>
          </div>
        </div>
        <div>
          <div class="adress-out">入</div>
          <div>
            <span>省市区</span>
            <span>浙江省杭州市西湖区文三路 138 号东方通信大厦</span>
          </div>
          <div style="margin-right:60px">
            <span>详细地址</span>
            <span>浙江省杭州市西湖区文三路 138 号东方通信大厦</span>
          </div>
        </div>
      </div>
      <van-cell is-link>
        <template #title>
          <span class="Deliverytime">班车时间</span>
          <van-tag closeable size="medium" round text-color="red" type="warning">18:00</van-tag>
          <van-tag closeable size="medium" round text-color="red" type="warning">18:00</van-tag>
        </template>
      </van-cell>

      <van-cell class="stepping-motor">
        <template #title>
          <span class="Deliverytime">派送时效</span>
          <van-stepper v-model="value" input-width="104px" />
          <!-- 步进器 -->
        </template>
      </van-cell>
      <van-cell class="stepping-motor">
        <template #title>
          <span class="Deliverytime">派送时效</span>
          <van-stepper v-model="value" input-width="104px" />
          <!-- 步进器 -->
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
      <div class="button-father">
        <van-button type="warning">保存</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import DestoryHeader from "@/components/DestoryHeader.vue";
export default {
  data() {
    return {
      text: "编辑专线渠道",
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
    // 编辑地址
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  .adress-card {
    position: relative;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
    background: #fff;
    .adress-in {
      width: 20px;
      margin-top: 10px;
      border: 1px solid red;
      display: inline-block;
      border-radius: 0 6px 6px 0;
      color: #fff;
      background: rgb(25, 137, 250);
      font-size: 10px;
      text-align: center;
    }
    .adress-out {
      text-align: center;
      margin-top: 10px;
      width: 20px;
      border: 1px solid red;
      display: inline-block;
      border-radius: 0 6px 6px 0;
      color: #fff;
      background: rgb(255, 151, 106);
      font-size: 10px;
    }
  }
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
  .van-tag {
    height: 25px;
    position: relative;
    top: 50%;
    left: 66px;
    transform: translateY(-50%);
    letter-spacing: 3px;
    margin-left: 20px;
  }
  .stepping-motor .van-cell__title {
    display: flex;
  }
  .border-none {
    .van-cell::after {
      border: none;
    }
  }
  .stepping-motor .van-stepper {
    display: inline-block;
    margin-left: 89px;
    /* 这个值要修改 */
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
}
.footer {
  .button-father {
    background: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    .van-button {
      border-radius: 19px;
      width: 351px;
      height: 42px;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>