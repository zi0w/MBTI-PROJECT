import AuthForm from "../components/auth/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLogin, updateUserInfo } from "../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      if (response.success) {
        alert("로그인 성공!");
        localStorage.setItem("accessToken", response.accessToken);
        // 로그인 상태 변경
        dispatch(changeLogin());

        // 유저 정보 가져오기
        const userProfile = await getUserProfile(response.accessToken);
        localStorage.setItem("userNickname", response.nickname);
        dispatch(updateUserInfo(userProfile));
        console.log(userProfile);
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
