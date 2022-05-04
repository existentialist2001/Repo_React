import React, { useState } from "react";

const NicknameModal = (props) => {
  //사용자로부터 전달받은 호칭을 저장하는 state
  const [selectedNickname, setSelectedNickname] = useState("");

  //완료 버튼
  const completeHandler = () => {
    //props.onChange(selectedNickname);
    //todo 테스트로 밑에걸로 바꾸어 놓음->나중에 윗 주석친 코드로 바꾸기
    props.onChange("호칭");
    //닉네임을 바꾸었으면 모달을 끈다.
    props.onCancel();
  };

  //취소 버튼
  const delHandler = () => {
    props.onCancel();
    //그리고 논리상 호칭을 임시 저장하는 state도 초기화 해주어야함
    setSelectedNickname("");
  };

  return (
    <>
      {props.visible ? (
        <div>
          <div>닉네임모달창</div>
          <button onClick={completeHandler}>완료</button>
          <button onClick={delHandler}>취소</button>
        </div>
      ) : null}
    </>
  );
};

export default NicknameModal;
