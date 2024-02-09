import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/Header/Header"
import * as S from "../main/main.style";

const main = () => {
  return (
    <>
        <Header/>
        <S.MainBackground>
        <S.TitleWrap>
            <S.Maintitle>당신의 올바른 소비를 위해</S.Maintitle>
        </S.TitleWrap>
        <S.TitleWrap>
            <S.Maintitle2>착한소비</S.Maintitle2>
        </S.TitleWrap>
        <S.downloadButtonWrap>
            <S.downloadButton>앱 다운로드</S.downloadButton>
        </S.downloadButtonWrap>
        </S.MainBackground>
        
    </>
  )
}

export default main