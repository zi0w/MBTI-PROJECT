import { useState } from "react";
import useForm from "../../hooks/useForm";
import { validateForm } from "../../utils/validation";

// mode로 회원가입, 로그인 구분 -> 조건부 렌더링
// onSubmit 통해 회원가입, 로그인에 formData 넘겨주기
const AuthForm = ({ mode, onSubmit }) => {
  const { formStates, formErrors, onChangeHandler } = useForm(
    {
      id: "",
      password: "",
      nickname: "",
    },
    validateForm
  );

  const { id, password, nickname } = formStates;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formStates);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex gap-5 items-center mt-3">
        <label className="w-24 text-right">ID:</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={onChangeHandler}
          placeholder="아이디를 입력해주세요."
          required
          className="border border-black placeholder:text-xs px-2"
          minLength={4}
          maxLength={10}
        />
      </div>
      {formErrors.id && (
        <span className="text-xs text-orange-700 mt-3 ml-20">
          {formErrors.id}
        </span>
      )}
      <div className="flex gap-5 mt-5">
        <label className="w-24 text-right">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요."
          required
          className="border border-black placeholder:text-xs px-2"
          minLength={4}
          maxLength={15}
        />
      </div>
      {formErrors.password && (
        <span className="text-xs text-orange-700 mt-3 ml-20">
          {formErrors.password}
        </span>
      )}
      {mode === "signup" && (
        <>
          <div className="flex gap-5 mt-5">
            <label className="w-24 text-right">Nickname:</label>
            <input
              type="text"
              name="nickname"
              value={nickname}
              onChange={onChangeHandler}
              placeholder="닉네임을 입력해주세요."
              required
              className="border border-black placeholder:text-xs px-2"
              minLength={2}
              maxLength={10}
            />
          </div>
          {formErrors.nickname && (
            <span className="text-xs text-orange-700 mt-3 ml-20">
              {formErrors.nickname}
            </span>
          )}
        </>
      )}
      <button
        type="submit"
        className="border border-black w-28 py-0.5 rounded-full mt-7 bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
