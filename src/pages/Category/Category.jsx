import React, { Component } from 'react'
import { Card, Table, Button, Space, Modal } from 'antd';
import {
  ArrowRightOutlined,
} from '@ant-design/icons';

import LinkButton from '../../components/LinkButton'
import { dataSource } from '../../config/category';
import AddForm from './AddForm';
import ChangeForm from './ChangeForm';



export default class Category extends Component {

  state = {
    dataSource: dataSource,
    categorys: [],
    parentKey: '0',
    parentName: '',
    isModalVisible: 0,
  }
  // 獲取表格資料(table)的函數
  getColumns = () => {
    this.columns = [
      {
        title: '商品類別',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '操作',
        width: 400,
        key: 'action',
        render: (category) => (
          <Space size="middle">
            <button onClick={() => this.showChange(category)}>修改  </button>
            {this.state.parentKey === '0' ? <button onClick={() => this.showSubCategorys(category)}>顯示子項目 </button> : null}

          </Space>
        ),
      },
    ];
  }

  showCategorys = () => {
    this.setState({
      parentKey: '0'
    }, () => {
      this.getCategorys()
    })
  }

  showSubCategorys = (category) => {
    console.log(category)

    this.setState({
      parentKey: category.key,
      parentName: category.name
    }, () => {
      this.getCategorys()
    })
  }

  getCategorys = () => {
    const list = this.state.dataSource.filter(d => { return d.parentKey === this.state.parentKey })
    this.setState({ categorys: list })
  }

  //進行添加修改的函數 
  showAdd = () => {
    this.setState({ isModalVisible: 1 });
  };

  showChange = (category) => {
    console.log(category)
    // 保存分類對象
    this.category = category
    // 更新狀態
    this.setState({ isModalVisible: 2, currentKey: category.key });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: 0 });
  };

  addList = () => {
    const form = this.addForm.addFormRef.current;
    const curForm = form.validateFields();
    curForm.then((values) => {
      const { dataSource } = this.state
      const list = { parentKey: values.select, key: (dataSource.length + 1).toString(), name: values.name, }
      const newData = [list, ...dataSource]

      this.setState({ isModalVisible: 0, dataSource: newData, });
      this.getCategorys()
      form.resetFields();
      // console.log(values)
      // console.log(list)
      // console.log(this.state.dataSource)
    
    }).catch(errorInfo => {
      console.log(errorInfo)
    })

  };

  changeList = () => {
    const form = this.changeForm.changeFormRef.current;
    const curForm = form.validateFields();
    curForm.then((values) => {
      const NewCategorys = this.state.categorys.map(d => {
        if (d.key === this.state.currentKey) {
          d.name = values.name;
        }
        return d
      })
      this.setState({ isModalVisible: 0, categorys: NewCategorys });
      form.resetFields();
      console.log(values)
    }).catch(errorInfo => {
      console.log(errorInfo)
    })
  };

  // 生命週期
  UNSAFE_componentWillMount() {
    this.getColumns()
    this.getCategorys()

  }

  componentDidMount() {
    console.log(this.state.categorys)
  }

  render() {
    const { categorys, parentName, parentKey, isModalVisible ,dataSource} = this.state
    // 讀取指定分類
    const category = this.category || {}

    const title = parentKey === '0' ? '品類列表' : (
      <span>
        <LinkButton onClick={this.showCategorys} >品類列表</LinkButton>
        <ArrowRightOutlined style={{ margin: '10px' }} />
        <span>{parentName}</span>
      </span>
    )
    const extra = (
      <Button onClick={this.showAdd} type='primary'>
        + 添加
      </Button>
    )


    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          dataSource={categorys}
          columns={this.columns}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />
        <Modal title="添加任務事項" visible={isModalVisible === 1} onOk={this.addList} onCancel={this.handleCancel} destroyOnClose>
          <AddForm
            ref={ref => this.addForm = ref}
            dataSource={dataSource}
            parentKey={parentKey}
          />
        </Modal>
        <Modal title="修改任務事項" visible={isModalVisible === 2} onOk={this.changeList} onCancel={this.handleCancel} destroyOnClose>
          <ChangeForm
            ref={ref => this.changeForm = ref}
            // changeName={(name) => { this.setState({ name }) }}
            categoryName={category.name}
          />
        </Modal>
      </Card>
    )
  }
}
