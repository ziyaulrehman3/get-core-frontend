import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Assets/Login";
import Panel from "./Assets/Panel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Panel" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
}
