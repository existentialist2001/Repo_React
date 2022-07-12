//*기본화면에서 취향 클릭 시 나타나는 화면
//! 반응형 완료

import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Taste_taste_screen = (props) => {
  //image를 렌더링하기 위한 로직
  /*
  매번 이렇게 반복문과 검사를 해주어야 하므로 비효율적이지만,
  문자열 값인 변수를 넣으면 작동하지않는 require의 특성때문에,
  현재로써는 이게 최선인 것 같다.
  */
  const imageSources = [
    require("../images/food.png"),
    require("../images/hobby.png"),
    require("../images/music.png"),
    require("../images/culture.png"),
    require("../images/place.png"),
    require("../images/present.png"),
    require("../images/custom.png"),
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

  //props로 받아온 딕셔너리 배열로 리스트 엘리먼트 생성.
  const list_of_tastes = props.tastes.map((taste) => (
        <ListItemsContainer><li key={taste.key}><ListImageContainer><img src={taste.image}/></ListImageContainer><ListTextsContainer><span>{taste.name}</span><span>{taste.content}</span></ListTextsContainer></li></ListItemsContainer>
    
  ));
  
  return (
      <ScreenContainer>
      <ul>{list_of_tastes}</ul>
      
      <Link to="/taste/choose_taste_to_edit"><img src={require("../images/edit.png")}/></Link>
      </ScreenContainer>
  );
};

export default Taste_taste_screen;


const ScreenContainer=styled.div`



width:100%;
height:100%;
//ul list에서 점 없애줌.
//ul의 기본 마진과 패딩이 존재해서, 없애줌.
ul { list-style: none; padding-left: 0px; margin:0px; 
  /*ListItemsContainer의 부모 요소가 ul이여서, 의도한대로 크기를 적용하기 위해서는 ul에도 크기를 주어야한다. */
  width:100%; height:100% };


a {
  //연필버튼 고정
  position:fixed;
  

  right:2.5%;
  bottom:1.18%;
 
}
`
const ListItemsContainer=styled.div`
width:100%;
height:20%;
/* 
MVP에는 border에 대한 속성이
opacity: 0.4;
border: solid 0.5px #627cec 로 되어있었는데,

border이 아닌 border-bottom에만 속성을 적용하고,
#627cec를 rgb값으로 바꾸고,
opacity를 rgba값으로 함께 주어서
border-bottom의 색과 투명도를 함께 적용하였다.
*/
border-bottom: solid 0.5px rgba(98,124,236,0.3);
li {
/*ListImageContainer, ListTextsContainer의 부모 요소이므로, 크기 설정과 flex box로 지정 */
display:flex;
width:100%;
height:100%;
}
`
const ListImageContainer=styled.div`
width:35%;
height:100%;

display:flex;
justify-content: center;
align-items: center;

img {
  width:55%;
  height:55%;
}
`

const ListTextsContainer=styled.div`
width:65%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

span:nth-child(1) {
  font-size:0.938rem;
  font-weight: bold;
  color: #292929;
  font-family: Roboto;
}

span:nth-child(2) {
  font-size:0.938rem;
  font-weight: normal;
  color: #939393;
  font-family: Roboto;

}
`

