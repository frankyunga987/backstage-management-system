import React, { Component } from 'react'

import { Form, Select, Input } from 'antd';

export default class AddForm extends Component {
    addFormRef = React.createRef();

    render() {
        const { dataSource, parentKey } = this.props
        const list = dataSource.filter(d => { return d.parentKey === "0" })


        return (
            <Form
                ref={this.addFormRef}
                layout={'vertical'}
                initialValues={{ select: parentKey , name: '' }}
            >

                <Form.Item
                    name="select"
                    label="分類選擇:"
                >
                    <Select>
                        <Select.Option value='0' key='0'>品類列表</Select.Option>
                        {
                            list.map(c => <Select.Option value={c.key} key={c.key}>{c.name}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name="name"
                    label="新增品類名稱:"
                    rules={[
                        {
                            required: true,
                            message: '請輸入要添加的品類名稱',
                        }
                    ]}
                >
                    <Input placeholder='請輸入品類名稱' />
                </Form.Item>
            </Form>
        )
    }
}
