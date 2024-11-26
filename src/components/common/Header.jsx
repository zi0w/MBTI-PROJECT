import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLogout } from "../../redux/slices/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  // items-center font-bold border border-black
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-black text-white flex justify-center py-1.5 font-light">
        <p>한눈에 보는 mbti, MBTI LAB</p>
      </div>
      <div className="w-full flex justify-between items-center px-10 py-4 bg-[#A5FF5E]">
        <Link to="/">
          <button className="font-bold text-2xl">Home</button>
        </Link>
        {/* 인증 상태에 따라 조건부 렌더링 */}
        {isLogin ? (
          <div className="flex gap-10 items-center">
            <Link
              to="/profile"
              className="border border-black rounded-full px-5 py-0.5 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white hover:font-bold"
            >
              프로필
            </Link>
            <Link
              to="/test"
              className="border border-black rounded-full px-5 py-0.5 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white hover:font-bold"
            >
              테스트
            </Link>
            <Link
              to="/testResult"
              className="border border-black rounded-full px-4 py-0.5 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white hover:font-bold"
            >
              결과보기
            </Link>
            <button
              onClick={() => dispatch(changeLogout())}
              className="border border-black rounded-full px-4 py-0.5 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white hover:font-bold"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="border border-black rounded-full px-4 py-0.5 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white hover:font-bold">
              로그인
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
