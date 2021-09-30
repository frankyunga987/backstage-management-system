import React, { Component } from 'react'
import { Form, Input, Button,} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { reqLogin } from '../../api'


import './Login.less'
import logo from './images/logo192.png'

// 登入的路由組件

export default class Login extends Component {
    render() {

        const onFinish = async (values) => {
            // console.log('Received values of form: ', values);
            this.props.history.replace('/home')

            // 以下為AJAX請求登入
            // console.log('Received values of form: ', values);
            /* 
            const { username, password } = values
            const response = await reqLogin(username, password)
            // console.log('請求成功', response)
            const result=response.data
            if(result.status===0){

                message.success('登入成功')
                this.props.history.replace('/')

            }else{
                message.error(result.msg)
            }
            */
            
            // 以下為AJAX請求登入(未優化)
            // reqLogin(username, password).then(
            //     response=>{
            //         console.log('請求成功', response.data)
            //     }).catch(error=>{
            //         console.log('請求失敗', error)
            //     })
        };

        return (
            <div className="login">
                <header className="login_header">
                    <img src={logo} alt="logo"></img>
                    <h1>React專案練習:後台管理系統</h1>
                </header>
                <div className="login_content">
                    <h2>用戶登入</h2>
                    <h3 style={{textAlign: 'center'}}>隨意輸入4位數帳號和6位數密碼模擬登入</h3>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    { required: true, message: ' 請輸入帳號!' },
                                    { min: 4, message: '用戶名最少4位' },
                                    { max: 12, message: '用戶名最多12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '帳號名稱必須是英文、數字或下劃線組成!' }
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: '請輸入密碼!' },
                                    { min: 6, message: '密碼最少6位' },
                                    { max: 12, message: '密碼最多12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '帳號名稱必須是英文、數字或下劃線組成!' }
                                ]}
                            >
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
                </div>
            </div>
        )
    }
}
