import React, { Component } from 'react'
import './Home.less'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                此項目模擬後台管理,實現了商品中品類管理和商品管理內的功能,並在頂部欄上實現氣象api功能,實時更新數據,其他部分做了靜態頁面的展示.
            </div>
        )
    }
}
