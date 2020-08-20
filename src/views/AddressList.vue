<template>
  <div class="addressList">
  	<div>
  		<van-row v-for="(address, index) in addressList">
  			<van-col span="4" style="display:flex;align-items:center;justify-content:center;height:64px;">
  				<div v-if="address.managementType==='0'" style="border-radius:50%;background-color:#FF5D24;width:35px;height:35px;justify-content: center;display:flex;align-items:center;">
  					<p style="color:white;">门</p>
  				</div>
  				<div v-if="address.managementType==='1'" style="border-radius:50%;background-color:#1890FF;width:35px;height:35px;justify-content: center;display:flex;align-items:center;">
  					<p style="color:white;">港</p>
  				</div>
  			</van-col>
  			<van-col span="16" style="height:64px;">
  				<van-row style="display:flex;align-items:center;justify-content:center;height:37px;margin-top:10px;">
  					<van-col span="8">
  						<p style="font-size:16px;">{{address.linkMan}}</p>
  					</van-col>
  					<van-col span="16">
  						<p style="font-size:11px;color:#8A8989;">{{address.linkPhone}}</p>
  					</van-col>
  				</van-row>
  				<van-row style="display:flex;align-items:center;justify-content:center;height:17px;">
  					<van-col span="24">
  						<p style="font-size:14px;color:#313131;">{{address.province+address.city+address.county+address.address}}</p>
  					</van-col>
  				</van-row>
  			</van-col>
  			<van-col span="4">
  				<van-row style="display:flex;align-items:center;justify-content:center;height:64px;">
  					<van-col span="12">
  						<div style="color:#8A8989;font-size:9px;" @click="editAddress(index)">编辑</div>
  					</van-col>
  					<van-col span="12">
  						<div style="color:#8A8989;font-size:9px;" @click="deleteAddress(index)">删除</div>
  					</van-col>
  				</van-row>
  			</van-col>
  		</van-row>
  	</div>
  	<div style="position:absolute;bottom:30px;width:100%;display:flex;align-items:center;justify-content:center;">
    	<van-button round block type="info" color="#FF5D24" style="width:100%;margin-left:30px;margin-right:30px;" @click="newAddress">新增地址</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Col, Row, Dialog } from 'vant';
import { getAddressList, deleteAddress } from "../request/request";
export default {
  name: 'addressList',
  components: {
    
  },
  data(){
  	return {
  		addressList:[]
  	}
  },
  mounted () {
    this.initFN();    
  },
  methods: {
  	initFN(){ 
    	getAddressList(0,10,"1").then(res => {
	        console.log(res.data);
	        if(res.data.code===0){
	        	this.addressList = res.data.data.list;
	        }
	    });
    },

    newAddress(){
    	const route = {
	        name: 'address',
	        params: {
		        id: 'new'
	        }
	    }
	    this.$router.push(route)
    },

    editAddress(index){
    	console.log(this.addressList[index]);
    	let address = this.addressList[index];
    	const route = {
	        name: 'address',
	        params: {
		        id: address.id
	        }
	    }
	    this.$router.push(route)
    },

    deleteAddress(index){
    	let address = this.addressList[index];
    	Dialog.confirm({
  			title: '确认删除',
  			message: '确认删除地址'+address.address+"?",
		}).then(() => {
    		// on confirm
    		deleteAddress(address.id).then(res => {
		        console.log(res.data);
		        if(res.data.code===0){
		        	this.initFN();
		        }
		    });
  		}).catch(() => {
    		// on cancel
  		});
    }
  }
}
</script>

<style scoped>

</style>
