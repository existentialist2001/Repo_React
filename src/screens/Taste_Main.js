import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

//모달 임포트
import NicknameModal from "../components/NicknameModal";
import RelationModal from "../components/RelationModal";

//중첩 라우팅을 위한 스크린 임포트
import Taste_basicinfo_screen from "./Taste_basicinfo_screen";
import Taste_history_screen from "./Taste_history_screen";
import Taste_taste_screen from "./Taste_taste_screen";

//todo 이 화면에서 취향 클릭했을 때 구체적 내용 입력 페이지로 들어가도록 라우팅하기.

const Taste_Main = (props) => {
  console.log("taste_main");
  //! 호칭과 관계상태는 메인 화면에서만 사용하기 때문에 최상단에 state가 위치할 필요 없음.
  //! 관계상태와 관계상태 모달
  const [relationModal, setRelationModal] = useState(false);
  const [relationStatus, setRelationStatus] = useState("관계 선택");
  //릴레이션 모달 완료 버튼 함수
  const changeRelation = (relation) => {
    setRelationStatus(relation);
  };
  //릴레이션 모달 취소 버튼 함수
  const cancelChangeRelation = () => {
    setRelationModal(false);
  };

  //! 호칭과 호칭모달
  const [nicknameModal, setNicknameModal] = useState(false);
  const [nickname, setNickname] = useState("호칭");

  //호칭을 새로 선택한 후 완료를 눌렀을때 호칭을 최종적으로 변경해주는 함수
  const changeNickname = (name) => {
    setNickname(name);
  };

  //호칭변경 모달에서 취소를 눌렀을때 작동되는 함수
  const cancelChangeNickname = () => {
    setNicknameModal(false);
  };

  return (
    <div className="screen">
      <div className="header"></div>

      <div className="main">
        <div className="mainTextsContainer">
          <div className="mainFirst">
            <div>주송준</div>
            <div>
              <button onClick={() => setNicknameModal(true)}>{nickname}</button>
            </div>

            <NicknameModal
              visible={nicknameModal}
              onCancel={cancelChangeNickname}
              onChange={changeNickname}
            />
          </div>
          <div className="mainSecond">
            <div>
              <button onClick={() => setRelationModal(true)}>
                {relationStatus}
              </button>
            </div>
            <RelationModal
              visible={relationModal}
              onCancel={cancelChangeRelation}
              onChange={changeRelation}
            />
          </div>
        </div>
      </div>

      <div className="middletab">
        <Link to="/basicinfo">기본정보</Link>
        <Link to="/taste">취향</Link>
        <Link to="/history">히스토리</Link>
      </div>

      <div className="information"></div>
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
  );
};

export default Taste_Main;
