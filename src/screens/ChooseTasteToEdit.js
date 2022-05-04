//*취향화면에서 편집(연필버튼) 클릭 시 렌더링되는 페이지

import React from "react";
import {
  useHistory,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";

//취향 직접 입력 페이지를 라우팅하기 위해 임포트
import DirectTasteInput from "./DirectTasteInput";
//취향을 선택했을 때 구체적 입력페이지로 라우팅하기 위해 임포트
import InputTasteContent from "./InputTasteContent";

const ChooseTasteToEdit = (props) => {
  //!뒤로가기를 구현하기 위한 hooks
  let history = useHistory();

  let { url, path } = useRouteMatch();

  //!App.js에서부터 받아온 취향종류배열을 렌더링하기 위한 작업
  const tastes = props.tastes;
  //엘리먼트 리스트 생성
  //*이렇게 되면, 사용자가 취향 종류를 추가하여 취향종류배열이 추가되었을경우에도 자동으로 반영된다.
  const list_of_tastes = tastes.map((taste) => (
    <li key={taste.key}>
      <Link to={`${url}/${taste.name}`}>{taste.name}</Link>
    </li>
  ));

  return (
    <div>
      page:choose taste to edit
      <button onClick={() => history.goBack()}>Back</button>
      <ul>{list_of_tastes}</ul>
      <Link to={`${url}/direct_input`}>직접입력</Link>
      <Switch>
        <Route path={`${path}/direct_input`}>
          <DirectTasteInput setTastes={props.setTastes} tastes={props.tastes} />
        </Route>

        <Route path={`${path}/:taste_name`}>
          <InputTasteContent
            tastes={props.tastes}
            setTastes={props.setTastes}
          ></InputTasteContent>
        </Route>
      </Switch>
    </div>
  );
};

export default ChooseTasteToEdit;
