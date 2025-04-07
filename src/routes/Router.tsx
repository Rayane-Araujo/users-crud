import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserRegister from "../pages/UserRegister";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/userRegister" element={<UserRegister />} />
    </Routes>
  );
};

export default AppRoutes;
