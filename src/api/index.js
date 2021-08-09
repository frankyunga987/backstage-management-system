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
        `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-69327A40-E51E-4015-816A-02FD6EB61EDD&locationName=基隆`,
    )
        .then(response => response.json())
        .then(data => {
            const locationData = data.records.location[0];
            const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                    if (['Weather', 'TEMP'].includes(item.elementName)) {
                        neededElements[item.elementName] = item.elementValue;
                    }
                    return neededElements;
                },
                {}
            );
            const parameters = locationData.parameter.reduce(
                (neededElements, item) => {
                    if (['CITY'].includes(item.parameterName)) {
                        neededElements[item.parameterName] = item.parameterValue;
                    }
                    return neededElements;
                },
                {}
            );
            const time = locationData.time.obsTime
            const weather = weatherElements.Weather
            const location = parameters.CITY
            const temp = weatherElements.TEMP
 
            console.log(locationData)
            console.log(time)
            console.log(weather)
            console.log(location)
            console.log(temp)

            return {
                time: time,
                weather: weather,
                location: location,
                temp: temp,

            }

        });
};
