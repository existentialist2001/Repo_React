//*취향화면에서 편집(연필버튼) 클릭 시 렌더링되는 페이지
//! 반응형 완료

import React from "react";
import { useHistory, Link } from "react-router-dom";

import styled from 'styled-components';

const ChooseTasteToEdit = (props) => {
  //!뒤로가기를 구현하기 위한 hooks
  let history = useHistory();

  //!App.js에서부터 받아온 취향종류배열을 렌더링하기 위한 작업
  const tastes = props.tastes;

  const imageSources = [
    require("../images/food2.png"),
    require("../images/hobby2.png"),
    require("../images/music2.png"),
    require("../images/culture2.png"),
    require("../images/place2.png"),
    require("../images/present2.png"),
    require("../images/custom2.png"),
  ];
  //받아온 호칭 배열에 이미지 주소 넣기

  //! 이거 밖에 i 선언안해주면 i찾을 수 없다고 에러남, 왜지??
  let i=0;
  for(i=0;i<props.tastes.length;i++){
    if (i<6){
      props.tastes[i].image=imageSources[i];
    }
    else{
      props.tastes[i].image=imageSources[6];
    }
  }

    //엘리먼트 리스트 생성
  //*이렇게 되면, 사용자가 취향 종류를 추가하여 취향종류배열이 추가되었을경우에도 자동으로 반영된다.
  const list_of_tastes = tastes.map((taste) => (
    <ListItemContainer>
    <li key={taste.key}>
      <Link to={`/taste/${taste.name}`}><img src={taste.image}/><span>{taste.name}</span></Link>
    </li>
    </ListItemContainer>
  ));
  

  return (
    <ScreenContainer>
      <HeaderContainer>
      <HeaderContentBox><button onClick={() => history.goBack()}><img src={require("../images/back_black.png")}/></button>취향</HeaderContentBox>
      </HeaderContainer>

      <MainContainer><ul>{list_of_tastes}</ul>
      <DirectInputBtn><Link to="/taste/direct_input">직접 입력</Link></DirectInputBtn>
</MainContainer>
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
  
  a {
    text-decoration: none;
  }
  ul{
  list-style:none;
  padding-left:0px;
  }

}
`

const HeaderContainer = styled.div`
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
const MainContainer = styled.div`
width:100%;
height:90%;
padding-left: 10%;
padding-right:10%;

ul {
  display:flex;
  flex-wrap: wrap;
  //not working..
  overflow-y:auto;
}

`

const ListItemContainer = styled.div`
width:48%;
height:33.3%;

li {
  width:100%;
  height:100%;
  flex-grow:1;
  /*
  position absolute를 위해 a 태그에 position relative를 설정했지만,
  a태그는 height 100%가 적용되지 않음
  position relative는 꼭 바로 상위의 부모요소에 설정해주지 않아도 되기 때문에,
  li에 적용
  */
  position:relative;
  a {
    width:100%;
    height:100%;
    
    img {
      width:100%;
      height:100%;
    }
    span {
      position:absolute;
      bottom:15%;
      right:15%;

      //text
      font-family: Roboto;
      font-size: 0.875rem;
      font-weight: bold;
      color: #fff;
      
    }
  }
}
`

const DirectInputBtn = styled.div`
//text
font-family: Roboto;
font-size: 1.188rem;
font-weight: bold;
text-align: center;

width: 40%;
height: 8.5%;
border-radius: 1.938rem;
box-shadow: 0 0 10px 0 rgba(111, 81, 249, 0.34);
background-color: #fff;

display:flex;
align-items: center;
justify-content: center;

position:fixed;
bottom:5%;
left:30%;


a {
  color: #627cec;
}



`
export default ChooseTasteToEdit;
