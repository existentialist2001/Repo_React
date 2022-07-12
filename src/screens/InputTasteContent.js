//*특정 취향에 대한 구체적인 내용을 입력하는 페이지(컨테이너)
//! 반응형 완료

import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import styled from "styled-components";

//todo placeholder + 조건문 사용해서 이전에 입력했던, 저장된 내용 적혀있도록,,

const InputTasteContent = (props) => {
  const history = useHistory();
  let match = useRouteMatch();

//조건부 스타일링
const [textColor, setTextColor]=useState("#939393");
const [tagTextColor, setTagTextColor]=useState("#939393");

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
  const [inputedDate, setInputedDate] =useState("");
  const [inputedTag, setInputedTag] =useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setInputedContent(value);
  };

  const dateOnChange = (event) => {
    const value = event.target.value;
    setInputedDate(value);
  }

  const tagOnChange = (event) => {
    const value = event.target.value;
    setInputedTag(value);
  }

  //저장
  //! 주소 이동말고는 백엔드에서 해야할 작업
  const onComplete = () => {
    //취향관한 입력된 내용을 기존 배열에 추가
    let tasteList = props.tastes;
    //내용추가
    tasteList[foundIndex].content = inputedContent;
    //날짜추가
    tasteList[foundIndex].date =inputedDate;
    //태그추가
    tasteList[foundIndex].tag =inputedTag;

    //기존 배열 업데이트
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
        <HeaderContentBox><span class="backbtn"><button onClick={() => goBack()}><img src={require("../images/back_black.png")}/></button> {props.tastes[foundIndex].name}</span><SaveBtnBox><button onClick={onComplete}>저장</button></SaveBtnBox></HeaderContentBox>
      </HeaderContainer>
    <MainContainer>
      <MainBox_1>이소망님의<br/>{props.tastes[foundIndex].name} 취향은 어떤가요?</MainBox_1>
      <MainBox_2><input type="text" value={inputedContent} onChange={onChange} placeholder="내용을 입력해주세요" /></MainBox_2>
      <MainBox_3>
        <DateContainer textColor={textColor}>일시<input type="text" onChange={dateOnChange} onFocus={()=>(setTextColor("#627cec"))} onBlur={()=>(setTextColor("#939393"))} /></DateContainer>
        <TagContainer textColor={tagTextColor}>태그<input type="text" onChange={tagOnChange} onFocus={()=>(setTagTextColor("#627cec"))} onBlur={()=>(setTagTextColor("#939393"))} placeholder="직접입력"/></TagContainer>
      </MainBox_3>
    </MainContainer>
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
width: 90%;

display:flex;
align-items:center;
justify-content: space-between;

//text styling
font-family: Roboto;
font-size: 1.125rem;
font-weight: bold;
color: #707070;

.backbtn {
  button {
    img {
      width:1.875rem;
      height:1.875rem;
      padding-right:0.313rem;
    }
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
  font-size: 1.125rem;
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
font-size: 1.5rem;
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
  font-size: 0.875rem;
  color: #939393;
}
`

const MainBox_3=styled.div`
width:100%;
height:40%;
padding-left: 5%;
padding-right: 5%;

`

const DateContainer=styled.div`
width:100%;
height:15%;

display:flex;
justify-content: space-between;
align-items: center;

//text
font-size: 1rem;
font-family: Roboto;
//{props.textColor} 이렇게 바로 작성하는 것이 아니라 아래와 같이 작성
color: ${(props)=>(props.textColor)};
font-weight: bold;

input {
  width: 80%;
  height: 100%;
  border: solid 2px #c9c9c9;
  border-radius: 0.313rem;

  padding-left: 3%;
}
input:focus {
    outline: none ;
    border-color: #627cec;
}
`

const TagContainer=styled.div`
width:100%;
height:15%;
margin-top: 5%;
display:flex;
justify-content: flex-start;
align-items: center;

//text
font-size: 1rem;
font-family: Roboto;
color: ${(props)=>(props.textColor)};
font-weight: bold;

input {
  width: 20%;
  height: 77.7%;
  background-color: #c9c9c9;
  border: solid 1px #c9c9c9;
  border-radius: 1.25rem;

  text-align: center;
  
  margin-left:10%;

  ::placeholder {
    color: #fff;
    font-weight: 500;
    font-family: Roboto;
    font-size: 0.813rem;
  }
}

input:focus {
    outline: none ;
    border-color: #627cec;
    background-color: rgba(98, 124, 236, 0.18);

    ::placeholder {
      color: #627cec;
    }
}

`

export default InputTasteContent;
