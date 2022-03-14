import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import { Register } from '../pages/Register';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const md = true;


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
                {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {
                        routes.map((item, i) => {
                            return (
                                <Menu.Item key={i + item.name} icon={item.icon} >
                                    <Link to={item.url}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu> */}
                <Menu theme='dark' mode="vertical">
                    {md ? (
                        routes.map((item, i) => {
                            return (
                                <SubMenu key={i + item.name} icon={item.icon} title={item.name}>
                                    <Menu.ItemGroup title={item.name}>
                                        <Menu.Item key={i} icon={item.icon}>
                                            <Link to={item.url}>{item.name}</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            )
                        })
                    ) : (
                        routes.map((item, i) => {
                            return (
                                <>
                                    <Menu.Item key={i + item.name} icon={item.icon} >
                                        <Link to={item.url}>{item.name}</Link>
                                    </Menu.Item>
                                </>
                            )
                        })
                    )
                    }
                    {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu> */}



                    {/* <SubMenu key="sub2" title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu> */}
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
