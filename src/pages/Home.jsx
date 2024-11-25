import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
    navigate("/login");
  };
  return (
    <div className="flex flex-col h-lvh items-center">
      <h1 className="text-7xl mt-20">MBTI Lab</h1>
      <h2 className="text-4xl mt-7">무료 성격 테스트</h2>
      <p className="text-xl mt-5">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <button
        onClick={handleLoginRedirect}
        className="border border-black rounded px-4 py-1.5 mt-10 bg-black text-white font-semibold"
      >
        내 성격 알아보러 가기
      </button>
    </div>
  );
};

export default Home;
