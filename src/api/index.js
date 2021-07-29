// 包含所有接口請求函數的模塊

import ajax from './ajax'

// 登入
export const reqLogin = (username, password) => { return ajax('/Login', { username: 'admin', password: '123456' }, 'POST') }

// 新增帳號
export const reqAddUser = (user) => { return ajax('/manage/user/add', user, 'POST') }
