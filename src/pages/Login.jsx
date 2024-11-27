import AuthForm from "../components/auth/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLogin, updateUserInfo } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      if (response.success) {
        toast.success("로그인 성공!");
        localStorage.setItem("accessToken", response.accessToken);
        // 로그인 상태 변경
        dispatch(changeLogin());

        // 유저 정보 가져오기
        const userProfile = await getUserProfile(response.accessToken);
        localStorage.setItem("userNickname", userProfile.nickname);
        dispatch(updateUserInfo(userProfile.nickname));
      }
    } catch (error) {
      toast.error("로그인에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#A5FF5E] h-lvh overflow-hidden flex justify-center">
      <div className="border border-black bg-white mt-20 w-1/3 h-72 py-4 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-5">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-10 text-sm underline underline-offset-3">
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
