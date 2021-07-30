import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo192.png'
import './index.less'

const { SubMenu } = Menu;


export default class LeftNav extends Component {

    state = {
        collapsed: false,
    };

    getMenuNodes = (menuList) => {
        return menuList.map(item => {

            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    render() {
        return (

            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>模擬後台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMenuNodes(menuList)
                    }

                    {/* <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to='/home'>首頁</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
                        <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                            <Link to='/category'>品類管理</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<ToolOutlined />}>
                            <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to='/user'>用戶管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SafetyOutlined />}>
                        <Link to='/role'>角色管理</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AreaChartOutlined />} title="圖形圖表">
                        <Menu.Item key="6">柱狀圖表</Menu.Item>
                        <Menu.Item key="7">圓餅圖表</Menu.Item>
                        <Menu.Item key="8">線形圖表</Menu.Item>
                    </SubMenu> */}


                </Menu>
            </div>

        )
    }
}
