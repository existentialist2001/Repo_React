//*특정 취향에 대한 구체적인 내용을 입력하는 페이지(컨테이너)

import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

//todo placeholder + 조건문 사용해서 이전에 입력했던, 저장된 내용 적혀있도록,,

const InputTasteContent = (props) => {
  const history = useHistory();
  let match = useRouteMatch();

  //사용자가 선택하거나 입력한 취향 이름을 useRouteMatch hook을 통해 가져와서 변수에 저장
  let taste_name = match.params.taste_name;
  //변수에 저장한 취향이름을 통해 최상위 컴포넌트에서 가져온 취향 배열에서 해당되는 취향에 접근
  let foundIndex = 0;
  for (let i = 0; i < props.tastes.length; i++) {
    if (props.tastes[i].name === taste_name) {
      foundIndex = i;
      break;
    }
  }

  //입력
  const [inputedContent, setInputedContent] = useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setInputedContent(value);
  };

  //저장
  const onComplete = () => {
    //취향관한 입력된 내용을 기존 배열에 추가
    let tasteList = props.tastes;
    tasteList[foundIndex].content = inputedContent;
    props.setTastes(tasteList);

    // /taste 주소로 이동시켜주기
    history.push("/taste");
  };
  return (
    <div>
      {props.tastes[foundIndex].name}에 대한 구체적 내용 입력
      <input type="text" value={inputedContent} onChange={onChange} />
      <button onClick={onComplete}>save</button>
    </div>
  );
};

/* 
prop이나
useRouteMatch로 취향의 이름에 접근, 이를 이용하여
기존의 취향
*/
export default InputTasteContent;
