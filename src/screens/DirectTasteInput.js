//*취향종류선택페이지에서 직접 입력 누를 시 렌더링되는 페이지
import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

const DirectTasteInput = (props) => {
  const [inputedTaste, setInputedTaste] = useState("");

  let history = useHistory();

  const onComplete = () => {
    //조건문을 이용해서 아무것도 입력되지 않았을때 경우를 조건적으로 처리
    //특정한 값이 입력되었다면(공백이 아니라면)
    if (inputedTaste !== "") {
      props.setTastes((currentLists) => [
        ...currentLists,
        {
          name: inputedTaste,
          key: (currentLists.length + 1).toString(),
          content: null,
          date: "",
          image: "",
        },
      ]);
    }
    //todo 공백이 존재하는 경우, 공백을 없애주는 로직작성 -> 이후 공백 제거한 것을 이용하여 라우팅(일단 공백없다는 전제하에 개발)
    //todo 취향에 아무것도 입력되지 않았을 경우를 처리하는 로직은 나중에
  };

  const onChange = (event) => {
    const value = event.target.value;
    setInputedTaste(value);
  };

  const goBack = () => {
    //뒤로가기 누를 시 직전에 작성했던 종류 이름 초기화해주지 않으면 다시 들어왔을 때 남아있다.
    setInputedTaste("");
    history.goBack();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="취향"
        value={inputedTaste}
        onChange={onChange}
      />
      <Link to={`/taste/${inputedTaste}`} onClick={onComplete}>
        완료
      </Link>
      <button onClick={() => goBack()}>Back</button>
    </div>
  );
};

export default DirectTasteInput;
