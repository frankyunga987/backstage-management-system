import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.less'
import logo from './images/logo192.png'

// 登入的路由組件

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login_header">
                    <img src={logo} alt="logo"></img>
                    <h1>React專案練習:後台管理系統</h1>
                </header>
                <selection className="login_content">
                    <h2>用戶登陸</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"

                        >
                            <Form.Item>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>

                            </Form.Item>
                        </Form>
                    </div>
                </selection>
            </div>
        )
    }
}
