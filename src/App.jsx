import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Assets/Login";
import Panel from "./Assets/Panel";
import Home from "./Assets/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Panel" element={<Panel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
