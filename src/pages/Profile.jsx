import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const user = useSelector((state) => state.auth.userNickname);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 닉네임 변경 로직
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("nickname", inputValue);

      const response = await updateProfile(formData, token);

      // 업데이트 성공시 로컬스토리지에도 닉네임 저장
      if (response.success) {
        dispatch(updateUserInfo(response.nickname));
        toast.success("프로필이 성공적으로 업데이트 되었습니다!");
        localStorage.setItem("userNickname", response.nickname);
        setInputValue("");
      } else {
        toast.error("프로필 업데이트에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      toast.error("프로필 업데이트에 실패했습니다.");
    }
  };

  return (
    <div className="bg-[#A5FF5E] h-lvh flex justify-center">
      <div className="border border-black bg-white w-1/3 mt-20 h-56 flex flex-col items-center py-4">
        <h1 className="text-2xl font-semibold">프로필 수정</h1>
        <h2 className="mt-2">{user}님 환영합니다!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mt-7 flex gap-5">
            <label>닉네임</label>
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="변경할 닉네임을 입력해주세요."
              className="w-80 border border-black px-2 placeholder:text-s"
            />
          </div>
          <button
            type="submit"
            className="mt-8 text-sm border border-black px-5 py-1 rounded-full bg-black text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:bg-black-900 transition-all duration-300 ease-in-out"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
