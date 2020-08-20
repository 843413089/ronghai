<template>
  <div class="address">
    <van-cell-group>
      <van-field v-model="address.linkMan" label="姓名" placeholder="请输入姓名" input-align="right"/>
      <van-field v-model="address.linkPhone" label="电话" placeholder="请输入电话" input-align="right"/>
      <van-cell title="省市区" :value="address.province+address.city+address.county" clickable @click="showProvince"/>
      <van-field v-model="address.address" label="详细地址" placeholder="请输入详细地址" input-align="right"/>
      <van-cell title="选择标签" style="height:44px;">
        <template>
          <van-radio-group v-model="address.managementType" direction="horizontal" style="float:right;">
            <van-radio name="0">              
                <template #icon="props">
                  <van-button round type="info" style="height:20px;" v-if="props.checked">门店</van-button>
                  <van-button round type="default" style="height:20px;" v-else>门店</van-button>
                </template>
            </van-radio>
            <van-radio name="1">            
                <template #icon="props">
                  <van-button round type="info" style="height:20px;" v-if="props.checked">出入港</van-button>
                  <van-button round type="default" style="height:20px;" v-else>出入港</van-button>
                </template>
            </van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="设为默认地址" >
        <template>
          <van-switch v-model="address.defaultAddrFlg" active-color="#FF5D24" size="24px"/>
        </template>
      </van-cell>
    </van-cell-group>
    <div style="position:absolute;bottom:30px;width:100%;display:flex;align-items:center;justify-content:center;">
      <van-button round block type="info" color="#FF5D24" style="width:100%;margin-left:30px;margin-right:30px;" @click="saveAddress">保存</van-button>
    </div>

    <van-action-sheet v-model="show" title="选择省市区">
      <van-area :area-list="areaList" @confirm="chooseProvince"/>
    </van-action-sheet>
  </div>
</template>

<script>
import AreaList from '../assets/data/area';
import { Cell, CellGroup, Area, ActionSheet, Button, Field } from 'vant';
import { getAddress, createAddress, updateAddress } from "../request/request";
export default {
  name: 'address',
  components: {
    
  },
  data(){
  	return {
      show: false,
      areaList: AreaList,
  		address:{
        id: "",
        companyId: "1",
        province: "",
        city: "",
        county: "",
        address: "",
        linkMan: "",
        linkPhone: "",
        managementType: "0",
        defaultAddr: "",
        defaultAddrFlg: false,
      }
  	}
  },
  mounted () {
    this.initFN()    
  },
  methods: {
  	initFN(){ 
    	this.address.id = this.$route.params.id;
      if(this.address.id!=='new'){
        getAddress(this.address.id).then(res => {
            console.log(res.data);
            if(res.data.code===0){
              this.address.companyId = res.data.data.companyId
              this.address.province = res.data.data.province
              this.address.city = res.data.data.city
              this.address.county = res.data.data.county
              this.address.address = res.data.data.address
              this.address.linkMan = res.data.data.linkMan
              this.address.linkPhone = res.data.data.linkPhone
              this.address.managementType = res.data.data.managementType
              this.address.defaultAddr = res.data.data.defaultAddr
              if(res.data.data.defaultAddr===1){
                this.address.defaultAddrFlg=true;
              }
            }
        });
      }      
    },

    showProvince(){
      this.show = true;
    },

    chooseProvince(result){
      console.log(result);
      this.address.province = result[0].name;
      this.address.city = result[1].name;
      this.address.county = result[2].name;
      this.show = false;
    },

    saveAddress(){
      if(this.address.defaultAddrFlg){
        this.address.defaultAddr = 1;
      }else{
        this.address.defaultAddr = 0;
      }
      if(this.address.id!=='new'){
        updateAddress(this.address).then(res => {
          console.log(res.data);
          if(res.data.code===0){
            this.$router.go(-1);  
          }
        });
      }else{
        createAddress(this.address).then(res => {
          console.log(res.data);
          if(res.data.code===0){
            this.$router.go(-1);  
          }
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
