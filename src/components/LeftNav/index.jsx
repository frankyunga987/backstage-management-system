import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';

import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo192.png'
import './index.less'
// import Item from 'antd/lib/list/Item';

const { SubMenu } = Menu;


class LeftNav extends Component {

    state = {
        collapsed: false,
    };

    getMenuNodes = (menuList) => {

        const path = this.props.location.pathname

        return menuList.map(item => {

            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
                if (cItem) {
                    this.openKey = item.key
                }

                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    UNSAFE_componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {

        let path = this.props.location.pathname
        if (path.indexOf('/product') === 0) {
            path = '/product'
        };

        const openKey = this.openKey

        return (

            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>模擬後台</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>

        )
    }
}

export default withRouter(LeftNav)