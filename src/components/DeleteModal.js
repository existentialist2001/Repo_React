//삭제하기 버튼을 눌렀을때 보이는 모달
//! 반응형 완료

import React from 'react';
import styled from 'styled-components';


const DeleteModal = (props) => {

    

    return(
        <>
        {props.open? (
            <ScreenContainer>
                    <ContentContainer>
                        <TextBox><span>이소망님을</span>영구적으로 삭제하시겠습니까?</TextBox>
                        <BtnsBox>
                        <CancelBtn onClick={()=>props.onCancel(false)}>취소</CancelBtn>
                        <DeleteBtn onClick={()=>{}}>삭제</DeleteBtn>
                        </BtnsBox>
                        </ContentContainer>
                </ScreenContainer>
        ):null}
        </>
    )


    
}

const ScreenContainer =styled.div`

* {
    box-sizing: border-box;
    padding:0;
    margin:0;

    button {
        border:none;
    }
}

width:100vw;
height:100vh;

position:fixed;
top:0;
left:0;

display:flex;
justify-content:center;
align-items:center;

background-color: rgba(0, 0, 0, 0.5);
//연필버튼보다 위에 쌓이도록
z-index: 1;
`

const ContentContainer =styled.div`
width:80%;
height:25%;
background-color:#fff;

border:2px solid white;
border-radius: 0.875rem;
`

const TextBox =styled.div`
height:50%;
width:100%;

display:flex;
flex-direction: column;
// <br/>태그 자체가 한 줄(공백)으로 그려진다.
justify-content: center;
align-items: center;

//text
font-family: Roboto;
font-size: 1.125rem;
font-weight: bold;
color: #292929;
`

const BtnsBox = styled.div`
width:100%;
height:45%;


display:flex;
justify-content: center;
align-items: flex-start;
`

const DeleteBtn = styled.button`
width:40%;
height:57%;

background-color: #627cec;
border:1px solid #627cec;
border-radius: 1.938rem; 

//text
font-family: Roboto;
font-size: 1rem;
font-weight: 500;
color: #fff;
`

const CancelBtn = styled.button`
width:40%;
height:57%;

background-color:#ededed;
border:1px solid #ededed;
border-radius: 1.938rem; 

margin-right: 5%;

//text
font-family: Roboto;
font-size: 1rem;
font-weight: 500;
color: #292929;
`

export default DeleteModal;
