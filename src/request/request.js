import axios from '@/request/api.request'

export const getUser = (userid) => axios.request({
  url: '/user/v1/getName',
  params:{
  	userid
  },  
  method: 'get'
})

export const getAddressList = (pageNum,pageSize,companyId) => axios.request({
  url: '/businessAddress/fetchList',
  params:{
  	pageNum,
  	pageSize,
  	companyId
  },  
  method: 'get'
})

export const getAddress = (id) => axios.request({
  url: '/businessAddress/fetchAddressInfoById',
  params:{
  	id
  },  
  method: 'get'
})

export const createAddress = (address) => axios.request({
  url: '/businessAddress/insertAddress',
  data:address,  
  method: 'post'
})

export const updateAddress = (address) => axios.request({
  url: '/businessAddress/edit',
  data:address,  
  method: 'put'
})

export const deleteAddress = (id) => axios.request({
  url: '/businessAddress/deleteById',
  params:{
  	id
  },  
  method: 'delete'
})
