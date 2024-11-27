import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";
import TestResultItem from "../components/TestResultItem";

const TestResults = () => {
  const { data } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  return (
    <div className="flex flex-col gap-10 items-center mt-10 bg-[#A5FF5E]">
      <h1 className="text-3xl font-semibold">모든 테스트 결과</h1>
      {data?.map((result) => (
        <TestResultItem key={result.id} result={result} />
      ))}
    </div>
  );
};

export default TestResults;
