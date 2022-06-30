import React, { useState } from "react";

import MainButton from "./MainButton";

import styled from "styled-components";


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
        <ScreenContainer>
          <TransparentContainer></TransparentContainer>
          <ContentContainer>
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
          </ContentContainer>
          </ScreenContainer>
      ) : null}
    </>
  );
};

const ScreenContainer =styled.div`
/*
position:fixed를 하면 기존 문서 흐름에서 벗어나고,
하지만 right 0만 작성해주면 전체 height가 적용되지 않는다.
개발자 도구로 확인해보면 height가 -295라고 되어있다.(왜 이렇게 작동하는지 이유는 모름)
그래서 top 0을 하여 뷰포트 기준으로 배치한다는 것을 명시해주었다.

right도 마찬가지,
따라서 항상 left 0, top 0 이런 식으로 뷰포트를 기준으로 요소를 배치함을 명시해주자,,

*/
width:100vw;
height:100vh;

position:fixed;
top:0;
left:0;


* {
  box-sizing:border-box;
  margin:0px;
  padding:0px;

  ul{
  list-style:none;
  padding-left:0px;
  }


}
`
const TransparentContainer =styled.div`
width:100%;
height:60%;
//투명하도록
background-color: rgba(0, 0, 0, 0.5);
`

const ContentContainer =styled.div`
width:100%;
height:40%;
background-color:yellow;
`

export default NicknameModal;
