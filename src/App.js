import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

//스크린 임포트
import ChooseTasteToEdit from "./screens/ChooseTasteToEdit";
import Taste_Main from "./screens/Taste_Main";
import DirectTasteInput from "./screens/DirectTasteInput";
import InputTasteContent from "./screens/InputTasteContent";

function App() {
  //! 취향 종류들을 관리하는 useState(이건 전역적으로 관리해주어야 함, 나중에 꼭 contenxt api로 전역적으로 바꾸어야 하나??)
  //todo date: getDate()로 바꾸어 주어야함, 리액트 네이티브 코드 다시 보면서,,
  //todo setTastes함수가 총 4단계에 걸쳐서 취향직접입력 하위 컴포넌트로 전달된다.
  //object인 array. 이미지 주소 require 안쓰고 넣어줘야 에러 안뜸.
  
  const [tastes, setTastes] = useState([
    { name: "음식", key: "1", content: null, date: "", image: "", },
    { name: "취미", key: "2", content: null, date: "", image: "", },
    { name: "음악", key: "3", content: null, date: "", image: "", },
    { name: "문화생활", key: "4", content: null, date: "", image: "", },
    { name: "장소", key: "5", content: null, date: "", image: "", },
    { name: "선물", key: "6", content: null, date: "", image: "", },
  ]);

  return (
    <Router>
      <Switch>
        <Route path="/taste/choose_taste_to_edit">
          <ChooseTasteToEdit tastes={tastes} setTastes={setTastes} />
        </Route>

        <Route path="/taste/direct_input">
          <DirectTasteInput tastes={tastes} setTastes={setTastes} />
        </Route>

        <Route path="/taste/:taste_name">
          <InputTasteContent
            tastes={tastes}
            setTastes={setTastes}
          ></InputTasteContent>
        </Route>

        <Route path="/">
          <Taste_Main tastes={tastes} setTastes={setTastes}></Taste_Main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
