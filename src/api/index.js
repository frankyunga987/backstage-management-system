// 包含所有接口請求函數的模塊
// import jsonp from 'jsonp'
// import { useState, useEffect } from 'react';
import ajax from './ajax'

// 登入
export const reqLogin = (username, password) => { return ajax('/Login', { username: 'admin', password: '123456' }, 'POST') }

// 新增帳號
export const reqAddUser = (user) => { return ajax('/manage/user/add', user, 'POST') }

// fetch請求的天氣資訊
export const fetchCurrentWeather = () => {
    return fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=臺北',
    )
        .then(response => response.json())
        .then(data => {
            const locationData = data.records.location[0];
            const time = locationData.time.obsTime
            console.log(locationData)
            console.log(time)
            
            return {time:time}

        });
};
