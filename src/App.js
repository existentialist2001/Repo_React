import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

//모달 임포트
import NicknameModal from "./components/NicknameModal";
import RelationModal from "./components/RelationModal";

//스크린 임포트
import Taste_basicinfo_screen from "./screens/Taste_basicinfo_screen";
import Taste_taste_screen from "./screens/Taste_taste_screen";
import Taste_history_screen from "./screens/Taste_history_screen";
import ChooseTasteToEdit from "./screens/ChooseTasteToEdit";

function App() {
  //! 호칭을 관리할 state와 함수
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

  //! 관계상태
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

  //! 취향 종류들을 관리하는 useState
  //todo date: getDate()로 바꾸어 주어야함, 리액트 네이티브 코드 다시 보면서,,
  //todo setTastes함수가 총 4단계에 걸쳐서 취향직접입력 하위 컴포넌트로 전달된다, 근데 이거 전역으로 관리해야 하는 것이므로 나중에 context api로 바꾸기(지금은 일일히 하위 prop으로 전달하는 중이다)
  //object인 array. 이미지 주소 require 안쓰고 넣어줘야 에러 안뜸.
  const [tastes, setTastes] = useState([
    { name: "음식", key: "1", content: null, date: "", image: "" },
    { name: "취미", key: "2", content: null, date: "", image: "" },
    { name: "음악", key: "3", content: null, date: "", image: "" },
    { name: "문화생활", key: "4", content: null, date: "", image: "" },
    { name: "장소", key: "5", content: null, date: "", image: "" },
    { name: "선물", key: "6", content: null, date: "", image: "" },
  ]);

  return (
    <Router>
      <div className="screen">
        <div className="header"></div>

        <div className="main">
          <div className="mainTextsContainer">
            <div className="mainFirst">
              <div>주송준</div>
              <div>
                <button onClick={() => setNicknameModal(true)}>
                  {nickname}
                </button>
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

        <Switch>
          <Route path="/basicinfo" render={() => <Taste_basicinfo_screen />} />
          <Route path="/taste">
            <Taste_taste_screen tastes={tastes} setTastes={setTastes} />
          </Route>
          <Route path="/history" render={() => <Taste_history_screen />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
