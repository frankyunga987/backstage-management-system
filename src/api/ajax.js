
import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve, reject) => {

        let promise
        // 1.執行異部ajax請求
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }

        // 2.如果成功了,調用resolve(value)
        promise.then(response => {
            resolve(response)

            // 3.如果失敗了,不調用reject(reason)),而是提示異常信息
        }).catch(error => {
            // reject(error)
            message.error('請求錯誤:' + error.message)
        })

    })
}

// 請求登入街口
// ajax('/Login',{username:'admin',password:'123456'},'POST').then()