const TestResultItem = ({ result }) => {
  return (
    <div className="w-1/3 bg-white border border-black px-5 py-5 divide-y divide-black mb-5">
      <div className="flex justify-between">
        <h2>{result.nickname}</h2>
        <p>{result.timestamp.slice(0, 10)}</p>
      </div>
      <div className="mt-5">
        <h2 className="mt-3 text-2xl font-bold">{result.mbti}</h2>
        <p className="mt-3">{result.mbtiDescriptions}</p>
      </div>
    </div>
  );
};

export default TestResultItem;
