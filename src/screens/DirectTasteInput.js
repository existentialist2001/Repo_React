//*취향종류선택페이지에서 직접 입력 누를 시 렌더링되는 페이지
//! 반응형 완료

import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";

const DirectTasteInput = (props) => {
  const [inputedTaste, setInputedTaste] = useState("");

  let history = useHistory();

  const onComplete = () => {
    //조건문을 이용해서 아무것도 입력되지 않았을때 경우를 조건적으로 처리
    //특정한 값이 입력되었다면(공백이 아니라면)
    if (inputedTaste !== "") {
      props.setTastes((currentLists) => [
        ...currentLists,
        {
          name: inputedTaste,
          key: (currentLists.length + 1).toString(),
          content: null,
          date: "",
          image: "",
          tag:""
        },
      ]);
    }
    //todo 공백이 존재하는 경우, 공백을 없애주는 로직작성 -> 이후 공백 제거한 것을 이용하여 라우팅(일단 공백없다는 전제하에 개발)
    //todo 취향에 아무것도 입력되지 않았을 경우를 처리하는 로직은 나중에
  };

  const onChange = (event) => {
    const value = event.target.value;
    setInputedTaste(value);
  };

  const goBack = () => {
    //뒤로가기 누를 시 직전에 작성했던 종류 이름 초기화해주지 않으면 다시 들어왔을 때 남아있다.
    setInputedTaste("");
    history.goBack();
  };

  return (
    <ScreenContainer>
       <HeaderContainer><HeaderContentBox><button onClick={() => goBack()}><img src={require("../images/back_black.png")}/></button>직접 입력</HeaderContentBox></HeaderContainer>
       <MainContainer>
      <input
        type="text"
        placeholder="(예)독서"
        value={inputedTaste}
        onChange={onChange}
        
      />
      </MainContainer>
      <FooterContainer>
      <Link to={`/taste/${inputedTaste}`} onClick={onComplete}>
        <img src={require("../images/next_step.png")}/>
      </Link>
      </FooterContainer>
    </ScreenContainer>
  );
};

const ScreenContainer =styled.div`
width:100vw;
height:100vh;


//이런 방식으로 전체 기본설정이 가능
* {
  box-sizing:border-box;
  margin:0px;
  padding:0px;
}
`

const HeaderContainer =styled.div`
width:100%;
height:10%;

display:flex;
justify-content:center;
align-items:center;

`
const HeaderContentBox = styled.div`
height: 100%;
width: 80%;

display:flex;
align-items:center;

//text styling
font-family: Roboto;
font-size: 1.125rem;
font-weight: bold;
color: #707070;

button {
//button tag의 기본값 설정
border:none;
background-color:transparent;

img {
  width:1.875rem;
  height:1.875rem;
  padding-right:0.313rem;
}

}

`
const MainContainer =styled.div`
width:100%;
height:70%;
display:flex;

justify-content:center;
align-items:center;

input {
  padding-left:4%;
  border: solid 2px #c9c9c9;
  width: 80%;
  height: 10%
}
//placeholder 선택자.
input::placeholder{
  font-weight: bold;
  text-align: left;
  color: #c9c9c9;
  font-family: Roboto;
  font-size: 1.25rem;
}

input:focus {
    outline: none ;
    border-color: #627cec;
}
`

const FooterContainer =styled.div`
width:100%;
height:20%;

display:flex;
justify-content:center;
align-items:center;
`


export default DirectTasteInput;
