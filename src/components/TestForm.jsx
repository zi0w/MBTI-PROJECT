import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  // 질문 개수에 맞는 배열 생성
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  // 배열의 인덱스에 맞는 옵션이 눌릴 때마다 setAnswers
  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg flex flex-col"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                // 조건부 클래스 추가
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  // handlechange로 넘어간 answer랑 현재 옵션이 일치하면 bg-gray-100
                  answers[index]?.answer === q.type.split("/")[i]
                    ? "bg-gray-100"
                    : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  // 옵션 입장: 내가 현재 선택된 애가 맞는지 확인 후 체크 표시 활성화/비활성화
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => handleChange(index, q.type.split("/")[i])}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="border border-black rounded-full py-1.5 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
