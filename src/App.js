import * as React from "react";
import logo from './logo.svg';
import './App.css';
import { VechaiProvider, Button } from "@vechaiui/react";

function App() {
  return (
    <VechaiProvider>
      <div className="flex flex-wrap w-full p-8 space-x-2">
        <Button>Button</Button>
        <Button variant="solid">Button</Button>
        <Button variant="light">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="solid" color="primary">Button</Button>
        &nbsp;
        <button className="glow-on-hover" type="button">CLICK ME!</button>
      </div>
    </VechaiProvider>
  );
}

export default App;
