import React, { Component } from 'react'
// import { Button } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'

import './App.less'


export default class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>

        )
    }
}