import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/Header/Header"
import * as S from "../main/main.style";

import FistBackground from "../../assets/image/background1.svg"
import HisMessage1 from "../../assets/image/histroymessage1.svg"
import HisMessage2 from "../../assets/image/histroymessage2.svg"
import HisMessage3 from "../../assets/image/histroymessage3.svg"
import WhiteBack from "../../assets/image/whiteback.svg"
import SecondBackground from "../../assets/image/3back.svg"
import Pesonal from "../../assets/image/Pesonal.svg"
import Economy from "../../assets/image/economy.svg"
import Blueline from "../../assets/image/blueline.svg"

const main = () => {
  return (
    <>
        <S.MainBackgroundimg src={FistBackground}/>
        <Header/>
        <>
        <S.TitleWrap>
            <S.Maintitle>당신의 올바른 소비를 위해</S.Maintitle>
        </S.TitleWrap>
        <S.TitleWrap>
            <S.Maintitle2>착한소비</S.Maintitle2>
        </S.TitleWrap>
        <S.downloadButtonWrap>
            <S.downloadButton>앱 다운로드</S.downloadButton>
        </S.downloadButtonWrap>
        </>
        <S.SeBack src={WhiteBack}/>
        <> 
          <S.AboutHistroyTitleWrap>
            <S.AboutHistroyTitle>착한소비는</S.AboutHistroyTitle>
          </S.AboutHistroyTitleWrap>
          <S.message1 src={HisMessage1}></S.message1>
          <S.message2 src={HisMessage2}></S.message2>
          <S.message3 src={HisMessage3}></S.message3>
          <S.HistoryStartWrap>
            <S.HistoryStart>라는 의문점을 가지고 시작되었어요</S.HistoryStart>
          </S.HistoryStartWrap>
        </>
        <S.SecondBackImg src={SecondBackground}/>
        <S.PesonalImg src={Pesonal}/>
        <S.EconomyImg src={Economy}/>
        <S.BlueLine1 src={Blueline}/>
        <S.BlueLine2 src={Blueline}/>
        <S.MainLastWrap>
          <S.MainLastTitle>착한소비는</S.MainLastTitle>
          <S.MainLastSub>
            <S.MainLastSubSpan>개인</S.MainLastSubSpan>과 
            <S.MainLastSubSpan>기업</S.MainLastSubSpan> 모두의
          </S.MainLastSub>
          <S.MainLastEsg><S.MainLastEsgSpan>ESG </S.MainLastEsgSpan>실천을 지향해요!</S.MainLastEsg>
        </S.MainLastWrap>
    </>
  )
}

export default main