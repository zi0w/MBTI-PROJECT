import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLogout } from "../../redux/slices/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center font-bold px-10 py-7 border border-black">
      <Link to="/">
        <button>Home</button>
      </Link>
      {/* 인증 상태에 따라 조건부 렌더링 */}
      {isLogin ? (
        <div className="flex gap-10 items-center">
          <Link to="/profile">프로필</Link>
          <Link to="/test">테스트</Link>
          <Link to="/testResult">결과보기</Link>
          <button
            onClick={() => dispatch(changeLogout())}
            className="border border-black rounded px-3 py-1 bg-black text-white"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button>로그인</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
