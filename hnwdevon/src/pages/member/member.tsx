import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../member/member.style";

import Header from "../../components/Header/Header"
import MainBackground from "../../assets/image/MainBackP.svg"
import WhiteBack from "../../assets/image/whiteback.svg"
import HnwMessage1 from "../../assets/image/howabouthnw.svg"
import HnwMessage2 from "../../assets/image/appsocai.svg"
import HnwMessage3 from "../../assets/image/needmessage.svg"
import HnwMessage4 from "../../assets/image/socall.svg"

const member: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/';

  const animatedElementRef1 = useRef<HTMLDivElement>(null);
  const animatedElementRef2 = useRef<HTMLDivElement>(null);
  const animatedElementRef3 = useRef<HTMLDivElement>(null);
  const animatedElementRef4 = useRef<HTMLDivElement>(null);

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
      const { top: top2 } = animatedElementRef2.current!.getBoundingClientRect();
      const { top: top3 } = animatedElementRef3.current!.getBoundingClientRect();
      const { top: top4 } = animatedElementRef4.current!.getBoundingClientRect();

     
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      const isInViewPort4 = top4 >= 0 && top4 <= window.innerHeight;
     
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;
      if (isInViewPort4) visibleCount = 4;
  
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
      <S.MainBackground src={MainBackground}/>
      <S.TeamTitleWrap>
        <S.TeamTitle> <S.TeamTitle2>DevOn,</S.TeamTitle2> <br/>
        더 나은 사회적 가치를 위하여 </S.TeamTitle>
      </S.TeamTitleWrap>
      <S.WhiteBackground src={WhiteBack}/>
      <S.TeamAboutWrap>
        <S.TeamAbout> DevOn은 </S.TeamAbout>
      </S.TeamAboutWrap>
      <S.HnwMessage1
      ref={animatedElementRef1}
      style={{
        opacity: visibleElements >= 1 ? 1 : 0,
        transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
       transition: "opacity 0.5s, transform 2.3s", 
      }}>
        <S.HnwMessage1st src={HnwMessage1}/>
      </S.HnwMessage1>
      <S.HnwMessage3
      ref={animatedElementRef2}
      style={{
        opacity: visibleElements >= 2 ? 1 : 0,
        transform: `translateY(${visibleElements >= 2 ? "0" : "50px"})`,
       transition: "opacity 0.5s, transform 2.9s", 
      }}>
        <S.HnwMessage3st src={HnwMessage3}/>
      </S.HnwMessage3>
      <S.HnwMessage2
      ref={animatedElementRef3}
      style={{
        opacity: visibleElements >= 3 ? 1 : 0,
        transform: `translateY(${visibleElements >= 3 ? "0" : "50px"})`,
       transition: "opacity 0.5s, transform 1.9s", 
      }}>
        <S.HnwMessage2st src={HnwMessage2}/>
      </S.HnwMessage2>
      <S.HnwMessage4
      ref={animatedElementRef4}
      style={{
        opacity: visibleElements >= 4 ? 1 : 0,
        transform: `translateY(${visibleElements >= 4 ? "0" : "50px"})`,
       transition: "opacity 0.5s, transform 2.4s", 
      }}>
        <S.HnwMessage4st src={HnwMessage4}/>
      </S.HnwMessage4>
      <S.HistroyStartWrap>
        <S.HistroyStart>라는 의견들이 모여 시작되었어요</S.HistroyStart>
      </S.HistroyStartWrap>
      <S.WhiteBackground src={WhiteBack}/>
    </>
  )
}

export default member