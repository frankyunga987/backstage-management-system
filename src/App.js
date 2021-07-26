import React, { Component } from 'react'
// import { Button } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

import './App.less'


export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' component={Admin}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}