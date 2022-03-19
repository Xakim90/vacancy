import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import { Register } from '../pages/Register';
import DynamicForm from './DynamicForm';

const { Header, Content, Footer, Sider } = Layout;
const onSubmit = data => {
    if (data) {
        console.log(data);
    } else {
        console.error("ERROR");
        // setAlert(true)
    }
};

const arr = [
    {
        name: "Select",
        type: "select",
        label: "Tanlang",
        required: true,
        options: [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
        ]
    },
    {
        name: "Radio",
        type: "radio",
        label: "Tanlang",
        required: true,
        options: [
            { value: 1, label: "Chocolate" },
            { value: 2, label: "Chocolate" },
            { value: 3, label: "Strawberry" },
        ]
    },
]

const routes = [
    {
        name: "Home",
        url: "/home",
        icon: <UserOutlined />,
        component: ""
    },
    {
        name: "Profile",
        url: "/profile",
        icon: <VideoCameraOutlined />,
        component: <Profile />
    },
    {
        name: "Works",
        url: "/works",
        icon: <UploadOutlined />,
        component: ""
    },
    {
        name: "Register",
        url: "/register",
        icon: <UserOutlined />,
        component: <Register />
    },
];
routes.push({
    name: "Form",
    url: "/form",
    component: <DynamicForm onSubmit={onSubmit} fields={arr} />
})

const AntLayout = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {
                        routes.map((item, i) => {
                            return (
                                <Menu.Item key={i + item.name} key={item + i} icon={item.icon} >
                                    <Link to={item.url}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            {
                                routes.map((route, i) => (
                                    <Route path={route.url} key={route + i} element={route.component} />
                                ))
                            }

                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Toshkent viloyati Bo'stonliq tuman Prokuraturasi tashabbusi bilan ishlab chiqilgan!</Footer>
            </Layout>
        </Layout>
    )
}

export default AntLayout;
