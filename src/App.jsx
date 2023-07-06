import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/users/registro";
import Login from "./components/users/login";
import Render from "./render";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users/registro" element={<Registro />} />
        <Route path="/users/dashboard" element={<Render />} />
      </Routes>
    </BrowserRouter>
  );
}
