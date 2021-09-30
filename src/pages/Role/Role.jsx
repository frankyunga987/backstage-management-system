import React, { Component } from 'react'
import { Card, Button, Table, } from 'antd'
import { dataSource } from '../../config/roles';


export default class Role extends Component {

    state = {
        persons: {},
        dataSource: dataSource,
        role:{},
    }

    getColumns = () => {
        this.columns = [
            {
                title: '角色名稱',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '創建時間',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '授權時間',
                dataIndex: 'authorizeTime',
                key: 'authorizeTime',
            },
            {
                title: '授權人',
                dataIndex: 'authorizer',
                key: 'authorizer',
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
        const { persons,role } = this.state

        const title = (
            <span>
                <Button type='primary' style={{ marginRight: 20 }}>創建角色</Button>
                <Button type='primary'>設置角色權限</Button>
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
                    rowSelection={{ type: 'radio' ,  selectedRowKeys:[role._id]}}
                    onRow={this.onRow}
                >
                </Table>
            </Card>
        )
    }
}
