import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center font-bold px-10 py-7 border border-black">
      <Link to="/">
        <button>Home</button>
      </Link>
      {/* 인증 상태에 따라 조건부 렌더링 */}
      <Link to="/login">
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Header;
