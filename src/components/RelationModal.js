import React, { useState } from "react";

import MainButton from "./MainButton";

const RelationModal = (props) => {
  //사용자가 선택한 관계상태를 저장하기 위한 state
  const [selectedRelation, setSelectedRelation] = useState("");

  const completeHandler = () => {
    //todo 나중에 주석해제하고 이 코드로 바꾸어야 함props.onChange(selectedRelation);
    props.onChange(selectedRelation);
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
          <div>
            <button onClick={completeHandler}>완료</button>
            <button onClick={delHandler}>취소</button>
          </div>
          <div>
            <MainButton onChange={setSelectedRelation}>절친한 사이</MainButton>
            <MainButton onChange={setSelectedRelation}>친한 사이</MainButton>
            <MainButton onChange={setSelectedRelation}>친해지는 중</MainButton>
          </div>
          <div>
            <MainButton onChange={setSelectedRelation}>알아가는 중</MainButton>
            <MainButton onChange={setSelectedRelation}>함께 사는 중</MainButton>
            <MainButton onChange={setSelectedRelation}>사랑하는 중</MainButton>
          </div>
          <div>
            <MainButton onChange={setSelectedRelation}>아는 사이</MainButton>
            <MainButton onChange={setSelectedRelation}>가족</MainButton>
            <MainButton onChange={setSelectedRelation}>소꿉 친구</MainButton>
            <MainButton onChange={setSelectedRelation}>절친</MainButton>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RelationModal;
