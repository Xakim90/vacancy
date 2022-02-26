import * as React from "react";
import { Button } from 'antd';
import './App.less';

function App() {
  return (
      <div className="flex flex-wrap w-full p-8 space-x-2">
        <button className="glow-on-hover" type="button">CLICK ME!</button>
        <Button type="primary">Button</Button>
      </div>
  );
}

export default App;
