import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../introduce/introduce.style";

import Header from "../../components/Header/Header"
import WhiteBack from "../../assets/image/whiteback.svg"
import HomeImg from"../../assets/image/home.svg"
import Barcode from "../../assets/image/barcode.svg"
import BarcodeScan from "../../assets/image/barcodeScan.svg"
import Quest from "../../assets/image/quest.svg"
import AlmostWhiteBackground from "../../assets/image/AlmostWhiteBackground.svg"
import Find from "../../assets/image/finddd.svg"
import Point120 from "../../assets/image/point120.svg"
import MangoP from "../../assets/image/mangop.svg"
import StrawP from "../../assets/image/strawp.svg"
import CoCoP from "../../assets/image/cocop.svg"
import BadBuy from "../../assets/image/BadBuy.svg"

const introduce: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/';

  const animatedElementRef1 = useRef<HTMLDivElement>(null);

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
     
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
     
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
  
      setVisibleElements(visibleCount);
    };

    window.addEventListener("scroll", OfferScroll);

    return () => {
      window.removeEventListener("scroll", OfferScroll);
    };
  }, []);
  return (
    <>
    <Header/>
    <S.WhiteBackground src={WhiteBack}/>
    <S.WithGoodbuyWrap
    ref={animatedElementRef1}
    style={{
      opacity: visibleElements >= 1 ? 1 : 0,
      transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
     transition: "opacity 0.5s, transform 2.3s", 
    }}>
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
    <S.QuestImg src={Quest}/>
    <S.MoreQuest> 다양한 퀘스트들을 한 눈에 보고 수행해봐요 </S.MoreQuest>
    <S.WhiteBackground src={AlmostWhiteBackground}/>
    <S.FindIntro>탐색</S.FindIntro>
    <S.FindImg1 src={Find}/>
    <S.FindExWrap>
      <S.FindEx>개인의 성향에 맞춘 <br/>
      인공지능 추천 시스템으로 <br/> 퀘스트를 탐색해요!
      </S.FindEx>
    </S.FindExWrap>
    <S.WhiteBackground src={WhiteBack}/>
    <S.PointIntro>포인트</S.PointIntro>
    <S.Point120 src={Point120} alt="error" />
    <S.MangoP src={MangoP} alt="error" />
    <S.StrawP src={StrawP} alt="error" />
    <S.CoCoP src={CoCoP} alt="error" />
    <S.BadBuy src={BadBuy}/>
    <S.PointBuy>포인트를 이용한 구매로 <br/> 현명한 소비를 즐겨보는건 어떨까요?</S.PointBuy>
    </>
  )
}

export default introduce