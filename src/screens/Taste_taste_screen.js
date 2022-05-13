//*기본화면에서 취향 클릭 시 나타나는 화면

import React from "react";
import { Link } from "react-router-dom";

const Taste_taste_screen = (props) => {
  const list_of_tastes = props.tastes.map((taste) => (
    <li key={taste.key}>{taste.name}</li>
  ));

  return (
    <div>
      취향_취향_화면
      <ul style={styles.ul}>{list_of_tastes}</ul>
      <Link to="/taste/choose_taste_to_edit">연필버튼</Link>
    </div>
  );
};

export default Taste_taste_screen;

const styles = {
  //ul list에서 점과 디폴트 패딩을 없애줌
  ul: { listStyle: "none", paddingLeft: "0px" },
};
