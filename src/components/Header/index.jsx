import React, { Component } from 'react'
import './index.less'

export default class Header extends Component {
    render() {
        return (
            <div className="header" >
                <div className="header-top">
                    <span>歡迎,admin</span>
                    <a href="javascript:;">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <span>首頁</span>
                    </div>
                    <div className="header-bottom-right">
                        <span>2021-8-2 05:00</span>
                        <img src="" alt="weather"></img>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}
