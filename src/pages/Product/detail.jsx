import React, { Component } from 'react'
import { Button, Card, List, } from 'antd'

import { ArrowLeftOutlined } from '@ant-design/icons';



export default class PoductDetail extends Component {

     



    render() {

        const { name, desc, price, detail, imgs ,status } = this.props.location.state.product

        const title = (
            <span>
                <Button type={'link'} onClick={() => this.props.history.goBack()}>
                    <ArrowLeftOutlined style={{ color: 'green', margin: '0 10px', fontSize: 25 }} />
                </Button>
                <span style={{ fontSize: 25 }}>商品詳情</span>
            </span>
        )


        return (
            <Card title={title} className='product-detail'>
                <List itemLayout={'vertical'}>
                    <List.Item >
                        <span className='left'>商品名稱:</span>
                        <span>{name}</span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>商品描述:</span>
                        <span>{desc}</span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>商品價格:</span>
                        <span>{price}</span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>商品狀態:</span>
                        <span>{status === 1 ? '在售' : '已下架'}</span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>所屬分類:</span>
                        <span>電腦周邊 -- 耳機</span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>商品圖片:</span>
                        <span>
                            {
                                imgs.map(img => (
                                    <img
                                        key={img}
                                        className="product-img"
                                        src={img}
                                        alt="img"
                                    />
                                ))
                            }
                        </span>
                    </List.Item>
                    <List.Item>
                        <span className='left'>商品詳情:</span>
                        <span dangerouslySetInnerHTML={{ __html: detail }}></span>
                    </List.Item>
                </List>
            </Card>
        )
    }
}
