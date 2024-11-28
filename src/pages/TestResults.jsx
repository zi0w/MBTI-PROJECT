import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";
import TestResultItem from "../components/TestResultItem";
import { useSelector } from "react-redux";

const TestResults = () => {
  const userId = useSelector((state) => state.auth.userId);
  const { data } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const sortedData = data?.slice().sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  // 공개 글 + 내 글만 볼 수 있게 맵
  // 내 글인지 아닌지 먼저 판별(무조건 맵) -> 아닌 건(visibility 판별)
  return (
    <div className="flex flex-col gap-10 items-center mt-10 bg-[#A5FF5E]">
      <h1 className="text-3xl font-semibold">모든 테스트 결과</h1>
      {sortedData?.map((result) =>
        result.visibility === true || result.userId === userId ? (
          <TestResultItem key={result.id} result={result} />
        ) : null
      )}
    </div>
  );
};

export default TestResults;
