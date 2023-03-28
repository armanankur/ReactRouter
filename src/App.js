import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Login from "./Component/Login";
import Register from "./Component/Register";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
