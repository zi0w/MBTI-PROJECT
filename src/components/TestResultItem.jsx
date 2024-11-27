import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

const TestResultItem = ({ result }) => {
  const userId = useSelector((state) => state.auth.userId);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(result.id);
  };

  const visibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const handleVisibility = () => {
    console.log(result.visibility);
    visibilityMutation.mutate({
      id: result.id,
      visibility: !result.visibility,
    });
  };

  return (
    <div className="w-1/3 bg-white border border-black px-5 py-5 mb-5">
      <div className="flex justify-between border-black border-b pb-3">
        <h2>{result.nickname}</h2>
        <p>{result.timestamp.slice(0, 10)}</p>
      </div>
      <div className="mt-5">
        <h2 className="mt-3 text-2xl font-bold">{result.mbti}</h2>
        <p className="mt-3">{result.mbtiDescriptions}</p>
      </div>
      {userId === result.userId && (
        <div className="flex gap-5 mt-5 justify-end px-1">
          <button
            onClick={handleVisibility}
            className="border border-black rounded-full px-3 py-0.5 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="border border-black rounded-full px-3 py-0.5 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
