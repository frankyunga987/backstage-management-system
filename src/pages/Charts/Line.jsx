import React, { Component } from 'react'
import { Card, Button } from 'antd'
import ReactECharts from 'echarts-for-react';

export default class Line extends Component {

  state = {
    option: {},
    sales: [5, 20, 36, 10, 10, 20],
    stores: [10, 25, 20, 15, 30, 20],
  }

  update = () => {
    this.setState(state => ({
      sales: state.sales.map(sale => sale + 1),
      stores: state.stores.map(store => store - 1),
    }))
    this.getOption()
  }

  getOption = () => {

    const { sales, stores } = this.state

    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量', '庫存']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: sales
      },
      {
        name: '庫存',
        type: 'line',
        data: stores
      }]
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
        <Card title='折線圖一'>
          <ReactECharts option={option} />
        </Card>
      </div>
    )
  }
}
