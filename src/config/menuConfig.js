import {
    AppstoreOutlined,
    HomeOutlined,
    UserOutlined,
    SafetyOutlined,
    UnorderedListOutlined,
    ToolOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    PieChartOutlined,
    LineChartOutlined,
} from '@ant-design/icons';

const menuList = [
    {
        title: '首頁',
        key: '/home',
        icon: <HomeOutlined />,
    },
    {
        title: '商品',
        key: '/products',
        icon: <AppstoreOutlined />,
        children: [
            {
                title: '品類管理',
                key: '/category',
                icon: <UnorderedListOutlined />

            },
            {
                title: '商品管理',
                key: '/product',
                icon: <ToolOutlined />
            }
        ]
    },
    {
        title: '用戶管理',
        key: '/user',
        icon: <UserOutlined />,
    },
    {
        title: '角色管理',
        key: '/role',
        icon: <SafetyOutlined />,
    },
    {
        title: '圖形圖表',
        key: '/charts',
        icon: <AreaChartOutlined />,
        children: [
            {
                title: '柱狀圖表',
                key: '/charts/bar',
                icon: <BarChartOutlined />

            },
            {
                title: '圓餅圖',
                key: '/charts/pie',
                icon: <PieChartOutlined />
            },
            {
                title: '折線圖',
                key: '/charts/line',
                icon: <LineChartOutlined />

            },
        ]
    },
]

export default menuList