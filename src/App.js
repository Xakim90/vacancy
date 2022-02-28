import * as React from "react";
import { Button } from 'antd';
import PrimaryButton from "./components/PrimaryButton";
import AntButtton from "./components/AntButton";
import './App.less';
import CustomButton from "./components/CustomButton";
import AntLayout from "./components/AntResponsiveLayout";


function App() {
  return (
    <AntLayout />
      // <div className="flex flex-wrap w-full p-8 space-x-2">
        
      //   <CustomButton height="30px" text="asdasd"/>
      // </div>
  );
}

export default App;
