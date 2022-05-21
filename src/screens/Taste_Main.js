import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import NicknameModal from "../components/NicknameModal";

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
    <div style={styles.screen}>
      <div style={styles.gradientContainer}>
        <div style={styles.header}>
          <button
            style={styles.headerButton}
            onClick={() => console.log("클릭")}
          >
            <MdArrowBackIosNew color="white" size="35" />
          </button>
          <button style={styles.headerButton}>
            <HiDotsHorizontal color="white" size="35" />
          </button>
        </div>
        <div style={styles.main}>
          <div style={styles.mainTextsContainer}>
            <div style={styles.mainFirst} class="mainFirst">
              <div style={styles.nameText}>이지은</div>
              <div>
                <button
                  style={styles.nicknameButton}
                  onClick={() => setNicknameModal(true)}
                >
                  {nickname}
                </button>
              </div>

              <NicknameModal
                visible={nicknameModal}
                onCancel={cancelChangeNickname}
                onChange={setNickname}
              />
            </div>
            <div className="mainSecond">
              <div>
                <button
                  style={styles.relationButton}
                  onClick={() => setRelationModal(true)}
                >
                  {relationStatus}
                </button>
              </div>
              <RelationModal
                visible={relationModal}
                onCancel={cancelChangeRelation}
                onChange={setRelationStatus}
              />
            </div>
          </div>
        </div>

        <div style={styles.middleBar}>
          <div style={styles.middleBarTextContainer}>
            <Link style={styles.middleBarText} to="/basicinfo">
              기본정보
            </Link>
            <Link style={styles.middleBarText} to="/taste">
              취향
            </Link>
            <Link style={styles.middleBarText} to="/history">
              히스토리
            </Link>
          </div>
        </div>
      </div>

      <div style={styles.information}>
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
      </div>
    </div>
  );
};

export default Taste_Main;

const styles = {
  screen: {
    //flex 컨테이너로 만들어주고, main axis를 세로 축으로
    display: "flex",
    flexDirection: "column",
    //screen이 전체 flex 컨테이너이기 때문에, viewport를 기준으로 100% 설정
    width: "100vw",
    height: "100vh",
  },
  gradientContainer: {
    height: "40%",
    width: "100%",
    background: "linear-gradient(to left top, #6a5acd 45%, #00bfff)",
  },
  header: {
    //헤더는 전체의 10%만큼, 그라데이션의 25%만큼 차지
    height: "25%",

    //
    width: "82%",
    paddingLeft: "9%",
    display: "flex",
    justifyContent: "space-between",
  },
  headerButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  main: {
    //main은 전체의 20%만큼, 그라데이션의 50%만큼 차치
    height: "50%",
    width: "100%",

    //main을 flexbox로 만들어 주어야, main안의 요소들이(이름 호칭 관계 묶음, 행성 이미지) 가로로 배열됨
    display: "flex",
    justifyContent: "space-between",
  },
  mainFirst: {
    display: "flex",

    //todo 이거 아래 속성들 적용이 안됨..왜지??
    //width: "28%",
    //justifyContent: "space-between",
  },

  //mainTextsContainer와 planetContainer은 부모인 main의 width를 35%, 65%씩, 100% height
  mainTextsContainer: {
    width: "35%",
    height: "100%",

    //
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
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
  nameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2.1875em",
  },
  nicknameButton: {
    //todo 아래 속성값들 반응형으로 바꾸어야 함.
    borderRadius: 98,
    width: 72,
    height: 47,
    fontSize: 17,

    color: "white",
    fontWeight: "bold",

    //borderColor 속성만 주면, 뒷 배경색과 색이 합쳐져서 렌더링 된다.
    border: "solid 1px",
    borderColor: "white",

    //버튼 색을 투명하게 해서 뒷 배경색으로 보이게.
    backgroundColor: "transparent",
  },
  relationButton: {
    opacity: 0.25,
    borderRadius: "20px",
    border: "solid 1px #fff",
    backgroundColor: "#fff",

    //TODO 반응형으로
    width: 117,
    height: 47,

    //todo 수정필요
    fontSize: "14px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 0.86,
    letterSpacing: "normal",
    textAlign: "center",
    color: "black",
  },

  middleBar: {
    //middleBar는 전체의 10%만큼,  그라데이션의 25%차지
    height: "25%",
    width: "100%",

    //
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    //
    display: "flex",
    justifyContent: "center",
  },
  middleBarTextContainer: {
    //middleBar(뷰포트 가로 전체)의 80%
    width: "80%",
    //middleBar의 높이 100%(높이도 설정해주지 않으면, content 크기만큼만 가져감)
    height: "100%",
    //
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  middleBarText: {
    textDecoration: "none",
    color: "#627cec",
    fontWeight: "bold",
    fontSize: "1.5em",
  },

  information: {
    //information은 전체의 60%만큼 차지
    height: "60%",
    width: "100%",

    //! 왜 안먹히니..
    borderTopWidth: "10px",
    borderTopColor: "black",
  },

  mainFirst: {
    //이름과 호칭을 가로로 배열하기 위해
    display: "flex",
  },

  //todo Link 태그의 text에 인라인 방식으로 적용한 스타일들 styled component로 변경해야함.
};
