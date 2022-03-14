import * as React from "react";
// import './App.less';
import AntLayout from "./components/AntResponsiveLayout";
import Login from "./components/SubMenu"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import CustomButton from "./components/CustomButton";
import AntButtton from "./components/AntButton";
import Carts from "./components/Carts";


function App() {
  return (
    <AntLayout />
    // <Login />
    // <Carts
    //   img="https://media.istockphoto.com/photos/this-vacation-is-just-what-we-needed-picture-id639579050?b=1&k=20&m=639579050&s=170667a&w=0&h=eXDg8mhdvjn5jBxd5g3c1tt6D_ts9sVjtpF-FUBTq34="
    //   userImg={"https://www.cnn.com/interactive/2021/specials/year-in-pictures/media/march/s_98C35996342B31E5F5874A0F3193663A4147FC56AF00E1390CB251B11CE43A9C_1637264846340_Winters_Nat_Geo_Angelina_Jolie_0267_v5.jpg"}  
    //   desc="Salom Vacancy saytiga xush kelibsiz"
    //   title={"Vacancy!!!"}
    // />
  );
}

export default App;
