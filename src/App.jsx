import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/layout/Index";
import Home from "./pages/Home";
import Group from "./pages/Group";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/group" element={<Group />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
