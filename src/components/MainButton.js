//* 호칭을 선택할 떄 사용할 하나의 커스텀 버튼
//! 이거 현재 안씀
import React from "react";

const MainButton = (props) => {
  return (
    <div>
      <button onClick={() => props.onChange(props.children)}>
        {props.children}
      </button>
    </div>
  );
};

export default MainButton;
