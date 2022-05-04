//*기본화면에서 취향 클릭 시 나타나는 화면

import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import ChooseTasteToEdit from "./ChooseTasteToEdit";

const Taste_taste_screen = (props) => {
  //hook을 사용하여, 이전 현재 page의 url과 path를 가져온다.
  let { url, path } = useRouteMatch();

  const list_of_tastes = props.tastes.map((taste) => (
    <li key={taste.key}>{taste.name}</li>
  ));

  return (
    <div>
      취향_취향_화면
      <ul>{list_of_tastes}</ul>
      <Link to={`${url}/choose_taste_to_edit`}>연필버튼</Link>
      <Switch>
        <Route path={`${path}/choose_taste_to_edit`}>
          <ChooseTasteToEdit
            tastes={props.tastes}
            setTastes={props.setTastes}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Taste_taste_screen;
