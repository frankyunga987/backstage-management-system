import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


import LinkButton from '../LinkButton';
import { fetchCurrentWeather } from '../../api/'
import menuList from '../../config/menuConfig'

import './index.less'

class Header extends Component {

    state = {
        time: '',
        weather: '',
        location: '',
        temp: '',

    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }


    getWeather = async () => {
        const { time, weather, location, temp } = await fetchCurrentWeather()
        this.setState({ time, weather, location, temp })
    }




    logout = () => {
        Modal.confirm({
            title: '確定退出嗎?',
            icon: <ExclamationCircleOutlined />,
            content: '退出將跳回登陸頁面',
            onOk: () => {
                console.log('OK');
                this.props.history.replace('/login');
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }




    componentDidMount() {
        this.getWeather()
    }



    render() {
        const { time, weather, location, temp } = this.state
        const title = this.getTitle()


        return (
            <div className="header" >
                <div className="header-top">
                    <span>歡迎,admin</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <span>{title}</span>
                    </div>
                    <div className="header-bottom-right">
                        <span>{time}</span>
                        <span>{location}</span>
                        <img src="" alt="weather"></img>
                        <span>{weather}</span>
                        <span>{temp}度C</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)