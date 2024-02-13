import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from "../introduce/introduce.style";

import Header from "../../components/Header/Header"
import WhiteBack from "../../assets/image/whiteback.svg"
import HomeImg from"../../assets/image/home.svg"
import Barcode from "../../assets/image/barcode.svg"
import BarcodeScan from "../../assets/image/barcodeScan.svg"

const introduce = () => {
  return (
    <>
    <Header/>
    <S.WhiteBackground src={WhiteBack}/>
    <S.WithGoodbuyWrap>
      <S.WithGoodbuy>착한소비와 함께라면 <br/>더욱 쉽게 사회적기업에 <br/>다가갈 수 있어요!</S.WithGoodbuy>
    </S.WithGoodbuyWrap>
    <S.WhiteBackground src={WhiteBack}/>
    <S.IntroHome>홈</S.IntroHome>
    <S.HomeImg src={HomeImg}/>
    <S.ExplainHome>
      오늘의 착한소비와 <br/>
      카테고리, 퀘스트를 한눈에
    </S.ExplainHome>
    <S.MoreExplainHome>
      카테고리별로 찾기 어려운 사회적기업들을 <br/>쉽게 찾을 수 있어요!
      <br/> 퀘스트를 클릭해서 <br/> 새로운 퀘스트를 수행해보는 건 어떨까요?
    </S.MoreExplainHome>
    <S.WhiteBackground src={WhiteBack}/>
    <S.CheckIntro>인증</S.CheckIntro>
    <S.CheckAmI>제가 사회적기업 제품을 소비했다고요?</S.CheckAmI>
    <S.BarcodeImgWrap>
      <S.BarcodeImg src={Barcode}/>
    </S.BarcodeImgWrap>
    <S.BarcodeScanImgWrap>
      <S.BarcodeScanImg src={BarcodeScan}/>
    </S.BarcodeScanImgWrap>
    <S.ScanEx>간단한 바코드 스캔으로  <br/>  자신이 구매한 물건이 
      <br/> 사회적기업의 제품인지 알 수 있어요
    </S.ScanEx>
    <S.WhiteBackground src={WhiteBack}/>
    <S.QuestIntro>퀘스트</S.QuestIntro>
    </>
  )
}

export default introduce