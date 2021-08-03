import React, { Component } from 'react'
import './index.less'

import {fetchCurrentWeather} from '../../api/'

export default class Header extends Component {

    state= {
        time: ''
    }

    getWeather =async()=>{
        const {time} = await fetchCurrentWeather()
        this.setState({time})
    }

    componentDidMount(){
        this.getWeather()
    }

    render() {
        const {time}=this.state

        return (
            <div className="header" >
                <div className="header-top">
                    <span>歡迎,admin</span>
                    <a href="#" onClick={this.fetchCurrentWeather}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <span>首頁</span>
                    </div>
                    <div className="header-bottom-right">
                        <span>2021-8-2 05:00</span>
                        <img src="" alt="weather"></img>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        )
    }
}
