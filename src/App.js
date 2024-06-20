import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import qr from "./Assets/qr-code.png";
import Card from "./Card/Card";
import QrCodeLink from "./Card/QrCodeLink";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(true);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="App">
      <div className="qr-code-container">
        <div className="qr-code-link-container">
        <img src={qr} alt="qr code" height={50} width={50} onClick={handleClick} />
        </div>
      </div>
      {selected ? <Card /> : <QrCodeLink />}
    </div>
  );
}

export default App;
