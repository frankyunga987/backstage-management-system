import React, { Component } from 'react'
import { Card, Button, Table ,Space} from 'antd'
import { dataSource } from '../../config/users';


export default class User extends Component {

    state = {
        persons: {},
        dataSource: dataSource,
        role:{},
    }

    getColumns = () => {
        this.columns = [
            {
                title: '帳戶名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '郵箱',
                dataIndex: 'mail',
                key: 'mail',
            },
            {
                title: '電話',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: '註冊時間',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '所屬角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '操作',
                width: 400,
                key: 'action',
                render: () => (
                  <Space size="middle">
                    <button>修改</button>
                    <button>刪除</button>
                  </Space>
                ),
              },
        ];
    }

    getCategorys = () => {
        this.setState({ persons: dataSource })
    }

    onRow = (role) => {
        return {
            onClick:e=>{
                console.log('row onClick',role)
                this.setState({role})
            }
        }
        
    }

    UNSAFE_componentWillMount() {
        this.getColumns()
        this.getCategorys()

    }


    render() {
        const { persons } = this.state

        const title = (
            <span>
                <Button type='primary'>創建帳戶</Button>
            </span>
        )

        return (
            <Card title={title}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={persons}
                    columns={this.columns}
                    pagination={{ defaultPageSize: 5, showQuickJumper: true }}
                >
                </Table>
            </Card>
        )
    }
}