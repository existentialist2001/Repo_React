//점 세개 버튼 누르면 열리는 모달
//! 반응형 완료

import React, {useState} from 'react';

import styled from 'styled-components';

import {MdMail} from "react-icons/md";
import {FaTrash} from "react-icons/fa";

const ThreeDotModal =(props) =>{
    //조건부 스타일
    const [inviteBtnStyle, setInviteBtnStyle]=useState("#b3b3b3");
    const [deleteBtnStyle, setDeleteBtnStyle]=useState("#b3b3b3");


    const deleteHandler = () =>{
        //색변경
        
        /*
        근데, 삭제버튼은 이렇게 조건부 스타일링 해봤자 바로 다음 모달이 떠서 스타일이 변하는 것이 시각적으로 안보여서 굳이 이렇게 할 필요가 없음.
        일단 주석처리
        */

        // if (deleteBtnStyle ==="#b3b3b3"){
        //     setDeleteBtnStyle("#292929");
        // }
        // if (deleteBtnStyle ==="#292929"){
        //     setDeleteBtnStyle("#b3b3b3");
        // }

        //삭제 모달 켜주고
        props.onDelete(true);
        //자신은 닫고
        props.onCancel(false);

    }

    const inviteHandler = () => {
        //색변경
        if (inviteBtnStyle ==="#b3b3b3"){
            setInviteBtnStyle("#292929");
        }
        if (inviteBtnStyle ==="#292929"){
            setInviteBtnStyle("#b3b3b3");
        }
    }

    return (
        <>
        {props.open ? (
            <ScreenContainer>
                <InviteBtn textColor={inviteBtnStyle} onClick={inviteHandler}><MdMail color={inviteBtnStyle} size="30"/>초대하기</InviteBtn>
                <DeleteBtn textColor={deleteBtnStyle} onClick={deleteHandler}><FaTrash color={deleteBtnStyle} size="25"/>삭제하기</DeleteBtn>
            </ScreenContainer>
        ): null}
        </>
    )

}

const ScreenContainer=styled.div`

* {
    box-sizing: border-box;
    padding:0px;
    margin:0px;

    button {
        background-color: transparent;
        border:none;
    }
}

width:100vw;
height:100vh;

position:fixed;
top:0;
right:0;
background-color: rgba(0, 0, 0, 0.5);
//연필버튼보다 위에 쌓이도록
z-index: 1;


display:flex;
flex-direction: column;
align-items: flex-end;

padding-top:20%;
padding-right:10%;
`
const InviteBtn =styled.button`
width:30%;
height:5%;
margin-bottom:2%;

display:flex;
align-items: center;
justify-content: space-evenly;


//text
font-family: Roboto;
font-size: 0.875rem;
font-weight: bold;
//color: ${(props)=>(props.textColor ? "#535353" :"#292929")};
color: ${(props) =>(props.textColor)};

border:2px solid white;
border-radius:1.25rem;
`
const DeleteBtn = styled.button`
width:30%;
height:5%;
margin-bottom:2%;

display:flex;
align-items: center;
justify-content: space-evenly;


//text
font-family: Roboto;
font-size: 0.875rem;
font-weight: bold;
//color: ${(props)=>(props.textColor ? "#535353" :"#292929")};
color: ${(props) =>(props.textColor)};

border:2px solid white;
border-radius:1.25rem;

`


export default ThreeDotModal