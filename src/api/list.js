import axios from './index'

const getList=(data)=>{
    return axios.request({
        url:'',
        method:'post',
        data
    })
}

const getListDetail=(data)=>{
    return axios.request({
        url:'',
        method:'post',
        data
    })
}

const getUserList=(data)=>{
    return axios.request({
        url:'',
        method:'post',
        data
    })
}

export {
    getList,
    getListDetail,
    getUserList
}