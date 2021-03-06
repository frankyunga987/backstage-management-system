import React, { Component } from 'react'
import { Button, Card, Form, Input, Cascader, } from 'antd'

import { ArrowLeftOutlined } from '@ant-design/icons';
import { dataSource } from '../../config/category';
import PicturesWall from './PicturesWall';
import RichTextEditor from './RichTextEditor';


const { TextArea } = Input


export default class AddUpdateProduct extends Component {
    AddUpdateProductRef = React.createRef();
    pwRef = React.createRef();
    rteRef = React.createRef();

    state = {
        options: [],
        dataSource: dataSource,
        categorys: [],
        parentId: '0',
    }

    initOption = (categorys) => {
        const options = categorys.map(c => ({
            value: c.key,
            label: c.name,
            isLeaf: false,
        }))
        this.setState({ options: options })
    }

    getCategory = () => {
        const categorys = this.state.dataSource.filter(d => { return d.parentKey === '0' })

        this.initOption(categorys)
        console.log(this.state.options)

    }

    loadData = (selectedOptions) => {
        console.log(selectedOptions)
        const targetOption = selectedOptions[0];
        // targetOption.loading = true;
        this.setState({ parentKey: targetOption.value }, () => {
            console.log(this.state.parentKey)
            const subCategorys = this.state.dataSource.filter(d => { return d.parentKey === this.state.parentKey })
            // targetOption.loading = false;

            if (subCategorys && subCategorys.length > 0) {
                const childOptions = subCategorys.map(c => ({
                    value: c.key,
                    label: c.name,
                    isLeaf: true,
                }))

                targetOption.children = childOptions


            } else {
                targetOption.isLeaf = true
            }
            this.setState({ options: [...this.state.options] })
        })

    };

    handleAddOk = () => {
        const form = this.AddUpdateProductRef.current;
        const curForm = form.validateFields();
        const imgs = this.pwRef.current.getImgs()
        console.log(imgs)
        const detail = this.rteRef.current.getDetail()
        console.log(detail)

        curForm.then((values) => {
            form.resetFields();
            console.log(values)

            // console.log(this.state.dataSource)

        }).catch(errorInfo => {
            console.log(errorInfo)
        })

    }
    // ???????????????
    validatePrice = (rule, value) => {
        return new Promise((resolve, reject) => {
            if (!value) {
                reject('??????????????????')
            } else if (value < 0) {
                reject('????????????0')
            } else {
                resolve()
            }
        })
    }



    componentWillMount() {
        this.getCategory()

        const product = this.props.location.state

        this.isUpdate = !!product
        this.product = product || {}
    }

    componentDidMount() {
        console.log(this.state.options)

    }

    render() {
        const { isUpdate, product } = this

        const title = (
            <span>
                <Button type={'link'} onClick={() => this.props.history.goBack()}>
                    <ArrowLeftOutlined style={{ color: 'green', margin: '0 10px', fontSize: 25 }} />
                </Button>
                <span style={{ fontSize: 25 }}>  {isUpdate ? '????????????' : '????????????'}</span>
            </span>
        )

        const { options } = this.state


        return (
            <Card title={title} className='product-detail'>
                <Form
                    layout={'vertical'}
                    ref={this.AddUpdateProductRef}
                    name='product-form'
                >
                    <Form.Item
                        initialValue={product.name}
                        label='????????????:'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: '????????????????????????????????????',
                            }
                        ]}
                    >
                        <Input style={{ width: 400 }} placeholder='?????????????????????'></Input>

                    </Form.Item>
                    <Form.Item
                        initialValue={product.desc}
                        label='????????????:'
                        name='desc'
                        rules={[
                            {
                                required: true,
                                message: '????????????????????????????????????',
                            }
                        ]}
                    >
                        <TextArea style={{ width: 400 }} placeholder='?????????????????????' autosize={{ minRow: 2, maxRow: 6 }}></TextArea>
                    </Form.Item>
                    <Form.Item
                        initialValue={product.price}
                        label='????????????:'
                        name='price'
                        rules={[
                            {
                                validator: this.validatePrice,
                                // required: true,
                                // message: '?????????????????????????????????',
                            }
                        ]}
                    >
                        <Input style={{ width: 400 }} type='number' placeholder='?????????????????????' addonAfter='???' ></Input>

                    </Form.Item>

                    <Form.Item label='????????????:' name='select'>
                        <Cascader
                            style={{ width: 400 }}
                            options={options}
                            loadData={this.loadData}
                        >
                        </Cascader>
                    </Form.Item>
                    <Form.Item label='????????????:' name='img'>
                        <PicturesWall ref={this.pwRef} imgs={product.imgs} />
                    </Form.Item>
                    <Form.Item label='????????????:' name='detail'>
                        <RichTextEditor ref={this.rteRef} detail={product.detail} />
                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' onClick={this.handleAddOk}>??????</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
