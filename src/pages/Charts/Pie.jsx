import React, { Component } from 'react'
import { Card, Button } from 'antd'
import ReactECharts from 'echarts-for-react';

export default class Pie extends Component {

    state = {
        option: {},
        // sales: [5, 20, 36, 10, 10, 20],
        // stores: [10, 25, 20, 15, 30, 20],
    }

    update = () => {
        this.setState(state => ({
            sales: state.sales.map(sale => sale + 1),
            stores: state.stores.map(store => store - 1),
        }))
        this.getOption()
    }

    getOption = () => {

        // const { sales, stores } = this.state

        const option = {
            title: {
              text: '銷售比例',
              subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 5, name: '衬衫' },
                  { value: 20, name: '羊毛衫' },
                  { value: 36, name: '雪纺衫' },
                  { value: 10, name: '裤子' },
                  { value: 10, name: '高跟鞋' },
                  { value: 10, name: '袜子' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };

        this.setState({ option: option })
    }

    UNSAFE_componentWillMount() {
        this.getOption()

    }

    render() {

        const { option } = this.state

        return (
            <div>
                <Card>
                    <Button type='primary' onClick={this.update}>更新</Button>
                </Card>
                <Card title='圓餅圖一'>
                    <ReactECharts option={option} />
                </Card>
            </div>
        )
    }
};