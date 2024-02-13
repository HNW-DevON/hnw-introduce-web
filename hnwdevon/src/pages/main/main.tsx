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
  const animatedElementRef8 = useRef<HTMLDivElement>(null);
  const animatedElementRef9 = useRef<HTMLDivElement>(null);
  const animatedElementRef10 = useRef<HTMLDivElement>(null);
  const animatedElementRef11 = useRef<HTMLDivElement>(null);


  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const MainScroll = () => {
      const top1 = animatedElementRef1.current?.getBoundingClientRect().top || 0;
      const top2 = animatedElementRef2.current?.getBoundingClientRect().top || 0;
      const top3 = animatedElementRef3.current?.getBoundingClientRect().top || 0;
      const top4 = animatedElementRef4.current?.getBoundingClientRect().top || 0;
      const top5 = animatedElementRef5.current?.getBoundingClientRect().top || 0;
      const top6 = animatedElementRef6.current?.getBoundingClientRect().top || 0;
      const top7 = animatedElementRef7.current?.getBoundingClientRect().top || 0;
      const top8 = animatedElementRef8.current?.getBoundingClientRect().top || 0;
      const top9 = animatedElementRef9.current?.getBoundingClientRect().top || 0;
      const top10 = animatedElementRef10.current?.getBoundingClientRect().top || 0;
      const top11 = animatedElementRef11.current?.getBoundingClientRect().top || 0;
  
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      const isInViewPort4 = top4 >= 0 && top4 <= window.innerHeight;
      const isInViewPort5 = top5 >= 0 && top5 <= window.innerHeight;
      const isInViewPort6 = top6 >= 0 && top6 <= window.innerHeight;
      const isInViewPort7 = top7 >= 0 && top7 <= window.innerHeight;
      const isInViewPort8 = top8 >= 0 && top8 <= window.innerHeight;
      const isInViewPort9 = top9 >= 0 && top9 <= window.innerHeight;
      const isInViewPort10 = top10 >= 0 && top10 <= window.innerHeight;
      const isInViewPort11 = top11 >= 0 && top11 <= window.innerHeight;
  
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;
      if (isInViewPort4) visibleCount = 4;
      if (isInViewPort5) visibleCount = 5;
      if (isInViewPort6) visibleCount = 6;
      if (isInViewPort7) visibleCount = 7;
      if (isInViewPort8) visibleCount = 8;
      if (isInViewPort9) visibleCount = 9;
      if (isInViewPort10) visibleCount = 10;
      if (isInViewPort11) visibleCount = 11;
    
      setVisibleElements(visibleCount);
    };

    window.addEventListener("scroll", MainScroll);

    return () => {
      window.removeEventListener("scroll", MainScroll);
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
              transition: "opacity 0.5s, transform 3s",
            }}
          >
            착한소비는
          </S.AboutHistroyTitle>
        </S.AboutHistroyTitleWrap>

        <S.message1
          ref={animatedElementRef5}
          style={{
            opacity: visibleElements >= 5 ? 1 : 0,
            transform: `translateY(${visibleElements >= 5 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 1.4s",
          }}
        >
          <S.message1st src={HisMessage1} alt="error" />
        </S.message1>
        <S.message2
          ref={animatedElementRef6}
          style={{
            opacity: visibleElements >= 6 ? 1 : 0,
            transform: `translateY(${visibleElements >= 6 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 3s",
          }}
        >
          <S.message2st src={HisMessage2} alt="error" />
        </S.message2>
        <S.message3
          ref={animatedElementRef7}
          style={{
            opacity: visibleElements >= 7 ? 1 : 0,
            transform: `translateY(${visibleElements >= 7 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 2.1s",
          }}
        >
          <S.message3st src={HisMessage3} alt="error" />
        </S.message3>

        <S.HistoryStartWrap>
          <S.HistoryStart
          ref={animatedElementRef8}
          style={{
            opacity: visibleElements >= 8 ? 1 : 0,
            transform: `translateY(${visibleElements >= 8 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 2.4s",
          }}
          >라는 의문점을 가지고 시작되었어요</S.HistoryStart>
        </S.HistoryStartWrap>
      </>
      <S.SecondBackImg src={Background3}/>
      <S.PesonalImg src={Pesonal}/>
      <S.EconomyImg src={Economy}/>
      <S.BlueLine1 src={Blueline}/>
      <S.BlueLine2 src={Blueline}/>
      <S.MainLastWrap>
        <S.MainLastTitle
        ref={animatedElementRef9}
        style={{
          opacity: visibleElements >= 9 ? 1 : 0,
          transform: `translateY(${visibleElements >= 9 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 1.9",
        }}
        >착한소비는</S.MainLastTitle>
        <S.MainLastSub
        ref={animatedElementRef10}
        style={{
          opacity: visibleElements >= 10 ? 1 : 0,
          transform: `translateY(${visibleElements >= 10 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2s",
        }}>
          <S.MainLastSubSpan>개인</S.MainLastSubSpan>과 
          <S.MainLastSubSpan>기업</S.MainLastSubSpan> 모두의
        </S.MainLastSub>
        <S.MainLastEsg
        ref={animatedElementRef11}
        style={{
          opacity: visibleElements >= 11 ? 1 : 0,
          transform: `translateY(${visibleElements >= 11 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 1.5s",
        }}>
          <S.MainLastEsgSpan> ESG </S.MainLastEsgSpan>실천을 지향해요!
        </S.MainLastEsg>
      </S.MainLastWrap>
    </>
  )
}

export default Main;
