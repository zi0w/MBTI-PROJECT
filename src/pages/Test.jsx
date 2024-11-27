import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResult";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const user = useSelector((state) => state.auth.userNickname);
  const userId = useSelector((state) => state.auth.userId);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    // db.josn에 필요한 결과 값 보내기
    const resultData = {
      nickname: user,
      timestamp: new Date().toISOString(),
      mbti: mbtiResult,
      mbtiDescriptions: mbtiDescriptions[mbtiResult],
      userId,
      visibility: true,
    };
    try {
      await createTestResult(resultData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/testResult");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#A5FF5E] ">
      <div className="bg-white border border-black p-8 mt-10 max-w-lg w-full h-full overflow-y-auto mb-10 flex flex-col items-center">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="border border-black rounded-full px-7 py-2 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
