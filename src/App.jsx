import React from "react";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VeiwUser from "./VeiwUser";
import CreateUser from "./CreateUser";
import { UserProiveder } from "./Context"; 

function App() {
  return (
    <BrowserRouter>
      <UserProiveder>
        <div>
          <Routes>
            <Route path="/" element={<VeiwUser />} />
            <Route path="/createuser" element={<CreateUser />} />
          </Routes>
        </div>
      </UserProiveder>
    </BrowserRouter>
  );
}

export default App;
