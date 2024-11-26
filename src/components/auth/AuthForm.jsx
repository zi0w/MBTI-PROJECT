import { useState } from "react";

// mode로 회원가입, 로그인 구분 -> 조건부 렌더링
// onSubmit 통해 회원가입, 로그인에 formData 넘겨주기
const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
      <div className="flex gap-5 items-center mt-3">
        <label className="w-24 text-right">ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력해주세요."
          required
          className="border border-black placeholder:text-xs px-2"
        />
      </div>
      <div className="flex gap-5">
        <label className="w-24 text-right">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요."
          required
          className="border border-black placeholder:text-xs px-2"
        />
      </div>
      {mode === "signup" && (
        <div className="flex gap-5">
          <label className="w-24 text-right">Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
            required
            className="border border-black placeholder:text-xs px-2"
          />
        </div>
      )}
      <button
        type="submit"
        className="border border-black w-28 py-0.5 rounded-full mt-2 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
