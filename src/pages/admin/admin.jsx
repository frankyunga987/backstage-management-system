import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../components/Header';
import LeftNav from '../../components/LeftNav';
import Home from '../Home/Home';
import Category from '../Category/Category'
import Product from '../Product/Product'
import Role from '../Role/Role'
import User from '../User/User'
import Bar from '../Charts/Bar'
import Line from '../Charts/Line'
import Pie from '../Charts/Pie'


const { Footer, Sider, Content } = Layout;

// 後台的路由組件

export default class Admin extends Component {
    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:'20px', backgroundColor: '#fff' }}>
                        <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/category' component={Category}></Route>
                        <Route path='/product' component={Product}></Route>
                        <Route path='/role' component={Role}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/charts/bar' component={Bar}></Route>
                        <Route path='/charts/line' component={Line}></Route>
                        <Route path='/charts/pie' component={Pie}></Route>
                        <Redirect to='/home'></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: 'gray' }}>推薦使用Google瀏覽器操作</Footer>
                </Layout>
            </Layout>
        )
    }
}
