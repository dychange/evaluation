import { Notify } from 'vant';
const axios = require('axios')
const {baseURL} = require('./index')


class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseURL = baseUrl
        this.queue = [] //定义一个队列用来存贮请求
    }
    getInsideConfig() {
        const config = {
            baseURL : this.baseURL,
            headers: {

            }
        }
        return config
    }
    //  拦截器
    interceptors(instance, url) {
        //  请求拦截
        instance.interceptors.request.use(config => {
            console.log('请求拦截：',config)
          
            return config
        }, err => {
            return Promise.reject(err)
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            return res
        }, err => {
            if(err.response.status === 500){
                Notify({
                    message: '服务器繁忙',
                    duration: 1500,
                    background: '#FF0000'
                  });
            }
           return Promise.reject(err)
        })
    }
    request(options, url) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, url)
        return instance(options)
    }
}

export default HttpRequest