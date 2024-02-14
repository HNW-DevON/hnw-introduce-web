import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../introduce/introduce.style";
import Footer from '../../components/Footer/Footer';

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
  const animatedElementRef2 = useRef<HTMLDivElement>(null);
  const animatedElementRef3 = useRef<HTMLDivElement>(null);
  const animatedElementRef4 = useRef<HTMLDivElement>(null);
  const animatedElementRef5 = useRef<HTMLDivElement>(null);
  const animatedElementRef6 = useRef<HTMLDivElement>(null);

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
      const { top: top2 } = animatedElementRef2.current!.getBoundingClientRect();
      const { top: top3 } = animatedElementRef3.current!.getBoundingClientRect();
      const { top: top4 } = animatedElementRef4.current!.getBoundingClientRect();
      const { top: top5 } = animatedElementRef5.current!.getBoundingClientRect();
      const { top: top6 } = animatedElementRef6.current!.getBoundingClientRect();
     
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      const isInViewPort4 = top4 >= 0 && top4 <= window.innerHeight;
      const isInViewPort5 = top5 >= 0 && top5 <= window.innerHeight;
      const isInViewPort6 = top6 >= 0 && top6 <= window.innerHeight;
     
     
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;
      if (isInViewPort4) visibleCount = 4;
      if (isInViewPort5) visibleCount = 5;
      if (isInViewPort6) visibleCount = 6;
  
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
     transition: "opacity 0.5s, transform 1.2s", 
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
    <S.Point120
    ref={animatedElementRef2}
    style={{
      opacity: visibleElements >= 2 ? 1 : 0,
      transform: `translateY(${visibleElements >= 2 ? "0" : "50px"})`,
     transition: "opacity 0.5s, transform 2.3s", 
    }}
    >
      <S.Point120st src={Point120} alt="error" />
    </S.Point120>
    <S.MangoP
    ref={animatedElementRef3}
    style={{
      opacity: visibleElements >= 3 ? 1 : 0,
      transform: `translateX(${visibleElements >= 3 ? "0" : "-50px"})`,
     transition: "opacity 0.5s, transform 2.7s", 
    }}>
      <S.MangoPst src={MangoP} alt="error" />
    </S.MangoP>
    <S.StrawP
    ref={animatedElementRef4}
    style={{
      opacity: visibleElements >= 4 ? 1 : 0,
      transform: `translateX(${visibleElements >= 4 ? "0" : "-50px"})`,
     transition: "opacity 0.5s, transform 2.7s", 
    }}>
      <S.StrawPst src={StrawP} alt="error" />
    </S.StrawP>
    <S.CoCoP
    ref={animatedElementRef5}
    style={{
      opacity: visibleElements >= 5 ? 1 : 0,
      transform: `translateX(${visibleElements >= 5 ? "0" : "-50px"})`,
     transition: "opacity 0.5s, transform 2.7s", 
    }}>
      <S.CoCoPst src={CoCoP} alt="error" />
    </S.CoCoP>
    <S.BadBuy
    ref={animatedElementRef6}
    style={{
      opacity: visibleElements >= 6 ? 1 : 0,
      transform: `translateX(${visibleElements >= 6 ? "0" : "50px"})`,
     transition: "opacity 0.5s, transform 2.7s", 
    }}>
      <S.BadBuyst src={BadBuy}/>
    </S.BadBuy>
    <S.PointBuy>포인트를 이용한 구매로 <br/> 현명한 소비를 즐겨보는건 어떨까요?</S.PointBuy>
    <Footer/>
    </>
  )
}

export default introduce