import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserRegister from "../pages/UserRegister";
import UserEdit from "../pages/UserEdit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/userRegister" element={<UserRegister />} />
      <Route path="/userEdit/:id" element={<UserEdit />} />
    </Routes>
  );
};

export default AppRoutes;
