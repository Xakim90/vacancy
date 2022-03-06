import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import { Register } from './Register';


const { Header, Content, Footer, Sider } = Layout;

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
]

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
