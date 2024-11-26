import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleLoginRedirect = () => {
    alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center bg-[#A5FF5E] h-screen">
      <h1 className="text-7xl mt-20 font-bold">MBTI LAB</h1>
      <h2 className="text-3xl mt-7 font-semibold">무료 성격 테스트</h2>
      <p className="text-xl mt-3 font-light">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="flex flex-row gap-16">
        <div className="flex flex-col w-72 border border-black mt-16 px-5 py-5 gap-5 bg-white">
          <h5 className="font-bold">성격 유형 검사</h5>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="flex flex-col w-72 border border-black mt-16 px-5 py-5 gap-5 bg-white">
          <h5 className="font-bold">성격 유형 이해</h5>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col w-72 border border-black mt-16 px-5 py-5 gap-5 bg-white">
          <h5 className="font-bold">팀 평가</h5>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>

      {/* 로그인 상태에 따른 버튼 조건부 렌더링  */}
      {isLogin ? (
        <Link to="/test">
          <button className="border border-black rounded-full px-7 py-2 mt-20 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out">
            내 성격 알아보러 가기
          </button>
        </Link>
      ) : (
        <button
          onClick={handleLoginRedirect}
          className="border border-black rounded-full px-7 py-2 mt-20 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
        >
          내 성격 알아보러 가기
        </button>
      )}
    </div>
  );
};

export default Home;
