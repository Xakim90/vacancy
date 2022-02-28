import * as React from "react";
// import './App.less';
import Carts from "./components/Carts";

function App() {
  return (
    <div className="grid grid-cols-3 mt-4">
      <div className="col-span-4"></div>
      <div className="col-span-4">
        <Carts />
      </div>
      <div className="col-span-4"></div>
    </div>
  );
}

export default App;
