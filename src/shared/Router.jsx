import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/SignUp";
import Test from "../pages/Test";
import TestResults from "../pages/TestResults";
import Header from "../components/common/Header";
import { useSelector } from "react-redux";

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const ProtectedRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? element : <Navigate to="/login" />;
};

// 라우터 단에서 리다이렉팅
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/signup" element={<PublicRoute element={<Signup />} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/test" element={<ProtectedRoute element={<Test />} />} />
        <Route
          path="/testResult"
          element={<ProtectedRoute element={<TestResults />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
