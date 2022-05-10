import React, { useState } from "react";

import MainButton from "./MainButton";

const NicknameModal = (props) => {
  //사용자로부터 전달받은 호칭을 저장하는 state
  const [selectedNickname, setSelectedNickname] = useState("");

  //완료 버튼
  const completeHandler = () => {
    //todo 만약에 완료 버튼 눌렀을 시 조건문으로 검사해 아무 것도 선택되지 않았다면, 기본값(호칭)으로 설정하거나 필수적으로 선택해야한다는 문구 띄우는 로직 작성하기
    props.onChange(selectedNickname);
    //닉네임을 바꾸었으면 모달을 끈다.
    props.onCancel();
  };

  //취소 버튼
  const delHandler = () => {
    props.onCancel();
    //그리고 논리적으로 호칭을 임시 저장하는 state도 초기화 해주어야함
    setSelectedNickname("");
  };

  return (
    <>
      {props.visible ? (
        <div>
          <div>
            <button onClick={completeHandler}>완료</button>
            <button onClick={delHandler}>취소</button>
          </div>
          <div>
            <MainButton onChange={setSelectedNickname}>호칭 없음</MainButton>
            <MainButton onChange={setSelectedNickname}>님</MainButton>
            <MainButton onChange={setSelectedNickname}>씨</MainButton>
            <MainButton onChange={setSelectedNickname}>쓰</MainButton>
          </div>
          <div>
            <MainButton onChange={setSelectedNickname}>언니</MainButton>
            <MainButton onChange={setSelectedNickname}>오빠</MainButton>
            <MainButton onChange={setSelectedNickname}>형</MainButton>
            <MainButton onChange={setSelectedNickname}>누나</MainButton>
          </div>
          <div>
            <MainButton onChange={setSelectedNickname}>선배</MainButton>
            <MainButton onChange={setSelectedNickname}>후배</MainButton>
            <MainButton onChange={setSelectedNickname}>선생님</MainButton>
            <MainButton onChange={setSelectedNickname}>교수님</MainButton>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NicknameModal;
