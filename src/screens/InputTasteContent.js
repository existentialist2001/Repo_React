//*특정 취향에 대한 구체적인 내용을 입력하는 페이지(컨테이너)

import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import styled from "styled-components";

//todo placeholder + 조건문 사용해서 이전에 입력했던, 저장된 내용 적혀있도록,,

const InputTasteContent = (props) => {
  const history = useHistory();
  let match = useRouteMatch();

  //사용자가 선택하거나 입력한 취향 이름을 useRouteMatch hook을 통해 가져와서 변수에 저장
  let taste_name = match.params.taste_name;
  //변수에 저장한 취향이름을 통해 최상위 컴포넌트에서 가져온 취향 배열에서 해당되는 취향에 접근
  let foundIndex = 0;
  for (let i = 0; i < props.tastes.length; i++) {
    if (props.tastes[i].name === taste_name) {
      foundIndex = i;
      break;
    }
  }

  //입력
  const [inputedContent, setInputedContent] = useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setInputedContent(value);
  };

  //저장
  const onComplete = () => {
    //취향관한 입력된 내용을 기존 배열에 추가
    let tasteList = props.tastes;
    tasteList[foundIndex].content = inputedContent;
    props.setTastes(tasteList);

    // /taste 주소로 이동시켜주기
    history.push("/taste");
  };

  const goBack = () => {
   history.goBack();
  };
  return (
    <ScreenContainer>
      <HeaderContainer>
      <HeaderContentBox><span><button onClick={() => goBack()}><img src={require("../images/back_black.png")}/></button> {props.tastes[foundIndex].name}</span><SaveBtnBox><button onClick={onComplete}>저장</button></SaveBtnBox></HeaderContentBox>
      </HeaderContainer>
    <MainContainer><MainBox_1>이소망님의<br/>{props.tastes[foundIndex].name} 취향은 어떤가요?</MainBox_1><MainBox_2><input type="text" value={inputedContent} onChange={onChange} placeholder="내용을 입력해주세요" /></MainBox_2><MainBox_3></MainBox_3></MainContainer>
      </ScreenContainer>
  );
};
/* 
prop이나
useRouteMatch로 취향의 이름에 접근, 이를 이용하여
기존의 취향
*/

const ScreenContainer =styled.div`
width:100vw;
height:100vh;


//전체 기본설정
* {
  box-sizing:border-box;
  margin:0px;
  padding:0px;
}
//buton tag의 기본값 설정 
button {
border:none;
background-color:transparent;
}

`


const HeaderContainer=styled.div`
width:100%;
height:10%;

display:flex;
justify-content: center;
`
const HeaderContentBox = styled.div`
height: 100%;
width: 80%;

display:flex;
align-items:center;
justify-content: space-between;

//text styling
font-family: Roboto;
font-size: 18px;
font-weight: bold;
color: #707070;

button {
img {
  //todo 반응형으로 바꾸어야 함
  width:30px;
  height:30px;
  padding-right:5px;
}
}

span {
  display:flex;
  align-items: center;
}

`
const SaveBtnBox =styled.div`
button{
  //text styling
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #627cec;
}
`

const MainContainer=styled.div`
width:100%;
height:90%;
`

const MainBox_1=styled.div`
width:100%;
height:20%;

display:flex;
align-items: center;
padding-left:10%;

border-bottom:solid 0.5px #627cec;

//text styling
font-family: Montserrat;
font-size: 24px;
font-weight: bold;
color: #292929;
`

const MainBox_2=styled.div`
width:100%;
height:40%;
padding-left:10%;
padding-top:10%;
input {
  border:none;
}

input::placeholder{
  font-family: Roboto;
  font-size: 15px;
  color: #939393;
}
`

const MainBox_3=styled.div`
width:100%;
height:40%;
`

export default InputTasteContent;
