import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'

import ProductHome from'./home'
import AddUpdateProduct from'./add-update'
import PoductDetail from'./detail'

import './product.less'


export default class Product extends Component {
    render() {
        return (
            <Switch>
                <Route path='/product' component={ProductHome} exact></Route>
                <Route path='/product/addupdate' component={AddUpdateProduct}></Route>
                <Route path='/product/detail' component={PoductDetail}></Route>
                <Redirect to='/product'></Redirect>
            </Switch>
        )
    }
}
