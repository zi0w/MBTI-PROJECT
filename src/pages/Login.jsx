import { useEffect } from "react";
import AuthForm from "../components/auth/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLogin } from "../redux/slices/authSlice";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      if (response.success) {
        alert("로그인 성공!");
        localStorage.setItem("accessToken", response.accessToken);
        dispatch(changeLogin());
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
