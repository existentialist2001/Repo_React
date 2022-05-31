import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import NicknameModal from "../components/NicknameModal";

import styled from "styled-components";

//모달 임포트
import MainButton from "../components/NicknameModal";
import RelationModal from "../components/RelationModal";

//중첩 라우팅을 위한 스크린 임포트
import Taste_basicinfo_screen from "./Taste_basicinfo_screen";
import Taste_history_screen from "./Taste_history_screen";
import Taste_taste_screen from "./Taste_taste_screen";

//아이콘
import { MdArrowBackIosNew } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

//todo 이 화면에서 취향 클릭했을 때 구체적 내용 입력 페이지로 들어가도록 라우팅하기.

const Taste_Main = (props) => {
  //! 호칭과 관계상태는 메인 화면에서만 사용하기 때문에 최상단에 state가 위치할 필요 없음.
  //! 관계상태와 관계상태 모달
  const [relationModal, setRelationModal] = useState(false);
  const [relationStatus, setRelationStatus] = useState("관계 선택");

  //릴레이션 모달 취소 버튼 함수
  const cancelChangeRelation = () => {
    setRelationModal(false);
  };

  //! 호칭과 호칭모달
  const [nicknameModal, setNicknameModal] = useState(false);
  const [nickname, setNickname] = useState("호칭");

  //호칭변경 모달에서 취소를 눌렀을때 작동되는 함수
  const cancelChangeNickname = () => {
    setNicknameModal(false);
  };

  return (
    <ScreenContainer>
      <GradientContainer>
        <HeaderContainer>
          <BackButton onClick={() => console.log("clicked")}>
            <MdArrowBackIosNew color="white" size="35" />
          </BackButton>

          <ThreeDotButton>
            <HiDotsHorizontal color="white" size="35" />
          </ThreeDotButton>
        </HeaderContainer>

        <MainContainer>
          <MainSectionContainer>
            <MainNamesContainer>
              <NameText>이지은</NameText>
              <div>
                <NickNameButton onClick={()=>setNicknameModal(true)}>{nickname}</NickNameButton>
              </div>

              <NicknameModal
                visible={nicknameModal}
                onCancel={cancelChangeNickname}
                onChange={setNickname}
              />
            </MainNamesContainer>
            <MainRelationContainer>
              <RelationButton onClick={() => setRelationModal(true)}>
              {relationStatus}
              </RelationButton>

              <RelationModal
                visible={relationModal}
                onCancel={cancelChangeRelation}
                onChange={setRelationStatus}
              />
            </MainRelationContainer>
          </MainSectionContainer>
        </MainContainer>

        <MiddleBarContainer>
          <MiddleBarLinkContainer>
            <Link className="MiddleBarLinkTexts" to="/basicinfo">
              기본정보
            </Link>
            <Link className="MiddleBarLinkTexts" to="/taste">
              취향
            </Link>
            <Link className="MiddleBarLinkTexts" to="/history">
              히스토리
            </Link>
          </MiddleBarLinkContainer>
        </MiddleBarContainer>
      </GradientContainer>

      <InformationContainer>
        <Route path="/basicinfo">
          <Taste_basicinfo_screen />
        </Route>
        <Route path="/taste">
          <Taste_taste_screen
            tastes={props.tastes}
            setTastes={props.setTastes}
          ></Taste_taste_screen>
        </Route>
        <Route path="/history">
          <Taste_history_screen />
        </Route>
      </InformationContainer>
    </ScreenContainer>
  );
};

export default Taste_Main;

const ScreenContainer = styled.div`
  //flex 컨테이너로 만들어주고, main axis를 세로 축으로
  display: flex;
  flex-direction: column;
  //screen이 전체 flex 컨테이너이기 때문에, viewport를 기준으로 100% 설정
  width: 100vw;
  height: 100vh;
`;

const GradientContainer = styled.div`
  height: 40%;
  width: 100%;
  background: linear-gradient(to left top, #6a5acd 45%, #00bfff);
`;

const HeaderContainer = styled.div`
  //헤더는 전체의 10%만큼, 그라데이션의 25%만큼 차지
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  //main은 전체의 20%만큼, 그라데이션의 50%만큼 차치
  height: 50%;
  width: 100%;

  //main을 flexbox로 만들어 주어야, main안의 요소들이(이름 호칭 관계 묶음, 행성 이미지) 가로로 배열됨
  display: flex;
  justify-content: space-between;
`;

//mainTextsContainer와 planetContainer은 부모인 main의 width를 35%, 65%씩, 100% height
const MainSectionContainer = styled.div`
  width: 50%;
  height: 100%;

  //
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MainNamesContainer = styled.div`
  display: flex;
  justify-content:space-evenly;

  /*height를 주어서 container box의 height 크기를 설정하지 않으면, container box의 height가 자식요소의 크기에의해 상대적으로 결정되므로 
  레이아웃과 크기 설정에 지장 */
  height: 50%;

  align-items: center;

  /*box-sizing을 border-box로 하면, width 100%를 border, padding, content가 나눠 갖는다, 따라서 padding값을 어떤 값으로 적용하더라도
  전체 box 크기는 변하지 않는다, 고정된 전체 box 크기 안에서 padding과 content 크기가 조정된다 */
  box-sizing:border-box;
  width: 100%;
  padding-left:6%;
`;
const MainRelationContainer =styled.div`
width:100%;
height:50%;
display:flex;
justify-content: center;

`

const MiddleBarContainer = styled.div`
  //middleBar는 전체의 10%만큼,  그라데이션의 25%차지
  height: 25%;
  width: 100%;

  //
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  //
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  background-color: transparent;
  border-color: transparent;
`;

const ThreeDotButton = styled.button`
  background-color: transparent;
  border-color: transparent;
`;

const NameText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 27px;
`;

const NickNameButton = styled.button`
  //todo 아래 속성값들 반응형으로 바꾸어야 함.
  border-radius: 98px;
  width: 53px;
  height: 33px;
  font-size: 14px;
  color: white;
  font-weight: bold;

  //borderColor 속성만 주면, 뒷 배경색과 색이 합쳐져서 렌더링 된다.
  border: solid 1px;
  border-color: white;

  //버튼 색을 투명하게 해서 뒷 배경색으로 보이게.
  background-color: transparent;
`;

const RelationButton = styled.button`
  
  //opacity로 주면 하위 요소들까지 적용되어서, rgba로 색과 투명도를 동시에 주었다.
  background-color:rgba(255,255,255, 0.3);
  color:#fff;
  text-align:center;
  font-weight:bold;
  font-family: Roboto;
  
  //TODO 반응형으로
  font-size:14px;
  width: 117px;
  height: 42px;
  border-radius: 20px;
  
  //button이 기본값으로 border가 있기 때문에 없애준다,,
  border-width:0;
  


`;


const InformationContainer = styled.div`
  //information은 전체의 60%만큼 차지
  height: 60%;
  width: 100%;

  //! 왜 안먹히니..
  border-top-width: 10px;
  border-top-color: black;
`;

const MiddleBarLinkContainer = styled.div`
  //middleBar(뷰포트 가로 전체)의 80%
  width: 80%;
  //middleBar의 높이 100%(높이도 설정해주지 않으면, content 크기만큼만 가져감)
  height: 100%;
  //
  display: flex;
  //justify-content: space-between;
  align-items: center;

  .MiddleBarLinkTexts {
    text-decoration: none;
    color: #627cec;
    font-weight: bold;
    font-size: 1.4em;

    //! 복기필요 
    box-sizing:border-box;
    width:33%;
    //height:100%;
    text-align: center;
  }
  .MiddleBarLinkTexts:active{
    box-sizing:border-box;
    border-bottom:1px solid black;
  }

`;
const styles = {
  planetContainer: {
    width: "65%",
    height: "100%",
  },
  planetImg: {
    //todo svg파일로 바꾼 후(안그러면 깨진다) width, height, layout해서 적용하면 된다.
    width: "80%",
    height: "130%",
  },
  //<div style={styles.planetContainer}><img style={styles.planetImg} src={require("../images/planet.png")}/></div>

  //todo Link 태그의 text에 인라인 방식으로 적용한 스타일들 styled component로 변경해야함.
};
