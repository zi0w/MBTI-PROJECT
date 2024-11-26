import { useEffect, useState } from "react";
import { updateProfile } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../redux/slices/authSlice";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const user = useSelector((state) => state.auth.user);
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
        alert("프로필이 성공적으로 업데이트 되었습니다!");
        localStorage.setItem("userNickname", response.nickname);
        setInputValue("");
      } else {
        alert("프로필 업데이트에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <h2>{user.nickname}님 환영합니다!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="변경할 닉네임을 입력해주세요."
            />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
