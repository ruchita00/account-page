import React from "react";

import FirstBox from "./components/1stBox/FirstBox";
import "./App.css";
// import FirstBox from "./components/1stBox/FirstBox";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="__main">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2">{/* <SecondBox /> */}</div>
      {/* <div className="div3">div3</div> */}

      {/* <div className="div6">div4</div> */}
      {/* <div className="div7">div4</div> */}

      {/* <SideBar /> */}
      <FirstBox />
      {/* <SecondBox /> */}
    </div>
  );
}

export default App;
