<template>
  <div class="landTransportLineList">
  	
  </div>
</template>

<script>
import { Button, Col, Row, Dialog } from 'vant';
import { getAddressList, deleteAddress } from "../request/request";
export default {
  name: 'landTransportLineList',
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
    	
    },

    
  }
}
</script>

<style scoped>

</style>
