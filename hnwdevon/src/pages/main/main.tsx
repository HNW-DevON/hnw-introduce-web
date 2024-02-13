import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/Header/Header"
import * as S from "../main/main.style";

import FistBackground from "../../assets/image/background1.svg"
import HisMessage1 from "../../assets/image/histroymessage1.svg"
import HisMessage2 from "../../assets/image/histroymessage2.svg"
import HisMessage3 from "../../assets/image/histroymessage3.svg"
import WhiteBack from "../../assets/image/whiteback.svg"
import Pesonal from "../../assets/image/Pesonal.svg"
import Economy from "../../assets/image/economy.svg"
import Blueline from "../../assets/image/blueline.svg"
import Background3 from "../../assets/image/Background3.svg"

const Main: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/';

  const animatedElementRef1 = useRef<HTMLDivElement>(null);
  const animatedElementRef2 = useRef<HTMLDivElement>(null);
  const animatedElementRef3 = useRef<HTMLDivElement>(null);
  const animatedElementRef4 = useRef<HTMLDivElement>(null);
  const animatedElementRef5 = useRef<HTMLDivElement>(null);
  const animatedElementRef6 = useRef<HTMLDivElement>(null);
  const animatedElementRef7 = useRef<HTMLDivElement>(null);

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
      const { top: top2 } = animatedElementRef2.current!.getBoundingClientRect();
      const { top: top3 } = animatedElementRef3.current!.getBoundingClientRect();
      // const { top: top4 } = animatedElementRef4.current!.getBoundingClientRect();
      // const { top: top5 } = animatedElementRef5.current!.getBoundingClientRect();
      // const { top: top6 } = animatedElementRef6.current!.getBoundingClientRect();
      // const { top: top7 } = animatedElementRef7.current!.getBoundingClientRect();
  
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      // const isInViewPort4 = top4 >= 0 && top4 <= window.innerHeight;
      // const isInViewPort5 = top5 >= 0 && top5 <= window.innerHeight;
      // const isInViewPort6 = top6 >= 0 && top6 <= window.innerHeight;
      // const isInViewPort7 = top7 >= 0 && top7 <= window.innerHeight;
  
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;
      // if (isInViewPort4) visibleCount = 4;
      // if (isInViewPort5) visibleCount = 5;
      // if (isInViewPort6) visibleCount = 6;
      // if (isInViewPort7) visibleCount = 7;
  
      setVisibleElements(visibleCount);
    };

    window.addEventListener("scroll", OfferScroll);

    return () => {
      window.removeEventListener("scroll", OfferScroll);
    };
  }, []);

  return (
    <>
      <S.MainBackgroundimg src={FistBackground}/>
      <Header/>
      <>
        <S.TitleWrap>
          <S.Maintitle
            ref={animatedElementRef1}
            style={{
              opacity: visibleElements >= 1 ? 1 : 0,
              transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 1.4s",
            }}
          >
            당신의 올바른 소비를 위해
          </S.Maintitle>
        </S.TitleWrap>
        <S.TitleWrap>
          <S.Maintitle2
            ref={animatedElementRef2}
            style={{
              opacity: visibleElements >= 2 ? 1 : 0,
              transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 3s",
            }}
          >
            착한소비
          </S.Maintitle2>
        </S.TitleWrap>
        <S.downloadButtonWrap
          ref={animatedElementRef3}
          style={{
            opacity: visibleElements >= 3 ? 1 : 0,
            transform: `translateY(${visibleElements >= 3 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 3.3s",
          }}
        >
          <S.downloadButton>앱 다운로드</S.downloadButton>
        </S.downloadButtonWrap>
      </>
      <S.SeBack src={WhiteBack}/>
      <> 
        <S.AboutHistroyTitleWrap>
          <S.AboutHistroyTitle
            ref={animatedElementRef4}
            style={{
              opacity: visibleElements >= 4 ? 1 : 0,
              transform: `translateY(${visibleElements >= 4 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 1.8s",
            }}
          >
            착한소비는
          </S.AboutHistroyTitle>
        </S.AboutHistroyTitleWrap>
        <S.message1 src={HisMessage1}></S.message1>
        <S.message2 src={HisMessage2}></S.message2>
        <S.message3 src={HisMessage3}></S.message3>
        <S.HistoryStartWrap>
          <S.HistoryStart>라는 의문점을 가지고 시작되었어요</S.HistoryStart>
        </S.HistoryStartWrap>
      </>
      <S.SecondBackImg src={Background3}/>
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
        <S.MainLastEsg>
          <S.MainLastEsgSpan> ESG </S.MainLastEsgSpan>실천을 지향해요!
        </S.MainLastEsg>
      </S.MainLastWrap>
    </>
  )
}

export default Main;
