import React, { Component } from 'react'
import { Card, Input, Button, Table, Space } from 'antd';
import { dataSource } from '../../config/products';

import { SearchOutlined } from '@ant-design/icons';



export default class ProductHome extends Component {
    state = {
        dataSource: dataSource,
        products: [],
        _id: '',
        searchText: '',
        searchedColumn: '',
    }
    // 查詢功能
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>

                </Space>
            </div>
        ),
        filterIcon: filtered => <span style={{ color: 'green' }}> <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} /> 進行搜索  </span>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },

    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    // 表格資料
    getColumns = () => {
        this.columns = [
            {
                title: '商品名稱',
                dataIndex: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
                ...this.getColumnSearchProps('desc'),
            },
            {
                title: '價格',
                width: 120,
                dataIndex: 'price',
                render: (price) => '$' + price
            },
            {
                title: '狀態',
                dataIndex: 'status',
                render: (status) => {
                    
                    return (
                        <span>
                            <Button type={'primary'}>{status === 1 ? '下架' : '上架'}</Button>
                            <span style={{ marginLeft: '20px' }}>
                                {status === 1 ? '在售' : '已下架'}
                            </span>
                        </span>
                    )
                }
            },
            {
                title: '操作',
                render: (product) => (
                    <Space size="middle">
                        <button>修改</button>
                        <button onClick={() => this.props.history.push('/product/detail', { product })} >詳情</button>
                    </Space>
                ),
            },
        ];
    }

    

    getCategorys = () => {

        this.setState({ products: dataSource })
    }

    UNSAFE_componentWillMount() {
        this.getColumns()
        this.getCategorys()
    }

    render() {
        const { products, _id } = this.state

        const title = (
            <span>
                按下 下方的 <SearchOutlined /> 符號可對表格內容進行搜索
            </span>
        )

        const extra = (
            <Button type='primary'>
                +添加商品
            </Button>
        )

        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    rowKey={_id}
                    dataSource={products}
                    columns={this.columns}
                    pagination={{ defaultPageSize: 5, showQuickJumper: true }}
                >
                </Table>
            </Card>
        )
    }
}
