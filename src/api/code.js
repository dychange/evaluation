import axios from './index'

const getCode=(data)=>{
    return axios.request({
        url:'/weChat/get/code',
        method:'post',
        data
    })
}

const wxJsSdk=(data)=>{
    return axios.request({
        url:'/wechat/jsSdk',
        method:'post',
        data
    })
}

const getDomain=(data)=>{
    return axios.request({
        url:'/wxQiniu/bucketHostName',
        method:'post',
        data
    })
}

export {
    getCode,
    wxJsSdk,
    getDomain
}