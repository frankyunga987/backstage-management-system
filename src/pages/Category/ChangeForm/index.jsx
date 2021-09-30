import React, { Component } from 'react'


import { Form, Input } from 'antd';

export default class ChangeForm extends Component {
    changeFormRef = React.createRef()



    render() {
        const { categoryName } = this.props

        return (
            <Form
                ref={this.changeFormRef}
                layout={'vertical'}
                initialValues={{ name: categoryName }}
                // onValuesChange={(v) => {
                //     if (v.name) {
                //         this.props.changeName(v.name);
                //     }
                // }}
            >
                <Form.Item
                    name="name"
                    label="修改品類名稱:"
                    rules={[
                        {
                            required: true,
                            message: '必須輸入要修改的品類名稱',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }
}
