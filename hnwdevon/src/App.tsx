import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../hnwdevon/src/pages/main/main";
import Introduce from "../../hnwdevon/src/pages/introduce/introduce";
import Member from "../../hnwdevon/src/pages/member/member"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/introduce" element={<Introduce/>} />
          <Route path="/member" element={<Member/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
