import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Profile from '../components/Profile';
import { Register } from '../pages/Register';

export const routes = [
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