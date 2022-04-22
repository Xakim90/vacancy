import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import { Register } from '../pages/Register';
import DynamicForm from './DynamicForm';
<<<<<<< HEAD
import Home from './Home';
=======
import { routes } from '../routes/routes'
import BreadCrumbs from './BreadCrumbs';
>>>>>>> 45de0e3ef0a2b8c129139e01d6e73ce7ab6aad4a

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

<<<<<<< HEAD
const routes = [
    {
        name: "Home",
        url: "/home",
        icon: <UserOutlined />,
        component: <Home />
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
=======
>>>>>>> 45de0e3ef0a2b8c129139e01d6e73ce7ab6aad4a
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
<<<<<<< HEAD
                                <Menu.Item key={item + i} icon={item.icon} >
=======
                                <Menu.Item key={i + item.name} icon={item.icon} >
>>>>>>> 45de0e3ef0a2b8c129139e01d6e73ce7ab6aad4a
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
                        <BreadCrumbs />
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
