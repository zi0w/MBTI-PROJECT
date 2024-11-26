import AuthForm from "../components/auth/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const response = await register(formData);
      if (response.success) {
        toast.success("회원가입 성공!");
        navigate("/login");
      }
    } catch (error) {
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#A5FF5E] h-lvh overflow-hidden flex justify-center">
      <div className="border border-black bg-white mt-20 w-1/3 h-2/5 py-4 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-5">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="mt-10 text-sm underline underline-offset-3">
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
