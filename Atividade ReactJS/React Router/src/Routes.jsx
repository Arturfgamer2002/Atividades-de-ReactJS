import { Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import Profile from "./page/profile";
import Error from "./page/error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:slug" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;