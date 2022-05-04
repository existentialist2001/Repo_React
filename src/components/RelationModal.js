import React, { useState } from "react";

const RelationModal = (props) => {
  //사용자가 선택한 관계상태를 저장하기 위한 state
  const [selectedRelation, setSelectedRelation] = useState("");

  const completeHandler = () => {
    //todo 나중에 주석해제하고 이 코드로 바꾸어야 함props.onChange(selectedRelation);
    props.onChange("관계 선택");
    props.onCancel();
  };

  const delHandler = () => {
    props.onCancel();
    //그리고 논리상 관계상태를 임시 저장하는 state도 초기화 해주어야함
    //임시 저장하는 state를 바꾸기 때문에 기존의 관계상태 값이 바뀌는 것은 아니다.
    setSelectedRelation("");
  };

  return (
    <>
      {props.visible ? (
        <div>
          <div>관계선택 모달</div>
          <button onClick={completeHandler}>완료</button>
          <button onClick={delHandler}>취소</button>
        </div>
      ) : null}
    </>
  );
};

export default RelationModal;
