import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../member/member.style";
import Footer from '../../components/Footer/Footer';

import Header from "../../components/Header/Header"
import MainBackground from "../../assets/image/MainBackP.svg"
import WhiteBack from "../../assets/image/whiteback.svg"
import HnwMessage1 from "../../assets/image/howabouthnw.svg"
import HnwMessage2 from "../../assets/image/appsocai.svg"
import HnwMessage3 from "../../assets/image/needmessage.svg"
import HnwMessage4 from "../../assets/image/socall.svg"
import swiftUi from "../../assets/image/swiftui.svg"
import ReactLogo from "../../assets/image/react.svg"
import style from "../../assets/image/style.svg"
import Alamofire from "../../assets/image/swfit.svg"
import springboot from "../../assets/image/springboot.svg"
import mysql from "../../assets/image/mysql.svg"
import ts from "../../assets/image/ts.svg"
import router from "../../assets/image/router.svg"
import Tuist from "../../assets/image/Tuist.svg"
import github from "../../assets/image/github.svg"
import Figma from "../../assets/image/figma.svg"
import Notion from "../../assets/image/notion.svg"
import Phone from "../../assets/image/memberbackphone.svg"
import tmfdk from "../../assets/image/tmfdk.svg"
import alfo from "../../assets/image/alfo.svg"
import cogml from "../../assets/image/cogml.svg"
import rkdgus from "../../assets/image/rkdgus.svg"
import dltmfdk from "../../assets/image/dltmfdk.svg"
import chlalfo from "../../assets/image/chlalfo.svg"
import qocogml from "../../assets/image/qocogml.svg"
import dlrkdgus from "../../assets/image/dlrkdgus.svg"

const member: React.FC = () => {
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
  const animatedElementRef12 = useRef<HTMLDivElement>(null); 
  const animatedElementRef13 = useRef<HTMLDivElement>(null); 
  const animatedElementRef14 = useRef<HTMLDivElement>(null); 
  const animatedElementRef15 = useRef<HTMLDivElement>(null); 
  const animatedElementRef16 = useRef<HTMLDivElement>(null); 
  const animatedElementRef17 = useRef<HTMLDivElement>(null); 
  const animatedElementRef18 = useRef<HTMLDivElement>(null); 
  const animatedElementRef19 = useRef<HTMLDivElement>(null); 
  const animatedElementRef20 = useRef<HTMLDivElement>(null); 
  const animatedElementRef21 = useRef<HTMLDivElement>(null); 
  const animatedElementRef22 = useRef<HTMLDivElement>(null); 
  const animatedElementRef23 = useRef<HTMLDivElement>(null); 
  const animatedElementRef24 = useRef<HTMLDivElement>(null); 
  const animatedElementRef25 = useRef<HTMLDivElement>(null); 

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
      const { top: top2 } = animatedElementRef2.current!.getBoundingClientRect();
      const { top: top3 } = animatedElementRef3.current!.getBoundingClientRect();
      const { top: top4 } = animatedElementRef4.current!.getBoundingClientRect();
      const { top: top5 } = animatedElementRef5.current!.getBoundingClientRect();
      const { top: top6 } = animatedElementRef6.current!.getBoundingClientRect();
      const { top: top7 } = animatedElementRef7.current!.getBoundingClientRect();
      const { top: top8 } = animatedElementRef8.current!.getBoundingClientRect();
      const { top: top9 } = animatedElementRef9.current!.getBoundingClientRect(); 
      const { top: top10 } = animatedElementRef10.current!.getBoundingClientRect(); 
      const { top: top11 } = animatedElementRef11.current!.getBoundingClientRect(); 
      const { top: top12 } = animatedElementRef12.current!.getBoundingClientRect();
      const { top: top13 } = animatedElementRef13.current!.getBoundingClientRect();
      const { top: top14 } = animatedElementRef14.current!.getBoundingClientRect();
      const { top: top15 } = animatedElementRef15.current!.getBoundingClientRect();
      const { top: top16 } = animatedElementRef16.current!.getBoundingClientRect();
      const { top: top17 } = animatedElementRef17.current!.getBoundingClientRect();
      const { top: top18 } = animatedElementRef18.current!.getBoundingClientRect();
      const { top: top19 } = animatedElementRef19.current!.getBoundingClientRect();
      const { top: top20 } = animatedElementRef20.current!.getBoundingClientRect();
      const { top: top21 } = animatedElementRef21.current!.getBoundingClientRect();
      const { top: top22 } = animatedElementRef22.current!.getBoundingClientRect();
      const { top: top23 } = animatedElementRef23.current!.getBoundingClientRect();
      const { top: top24 } = animatedElementRef24.current!.getBoundingClientRect();
      const { top: top25 } = animatedElementRef25.current!.getBoundingClientRect();
     
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
      const isInViewPort12 = top12 >= 0 && top12 <= window.innerHeight;
      const isInViewPort13 = top13 >= 0 && top13 <= window.innerHeight;
      const isInViewPort14 = top14 >= 0 && top14 <= window.innerHeight;
      const isInViewPort15 = top15 >= 0 && top15 <= window.innerHeight;
      const isInViewPort16 = top16 >= 0 && top16 <= window.innerHeight;
      const isInViewPort17 = top17 >= 0 && top17 <= window.innerHeight;
      const isInViewPort18 = top18 >= 0 && top18 <= window.innerHeight;
      const isInViewPort19 = top19 >= 0 && top19 <= window.innerHeight;
      const isInViewPort20 = top20 >= 0 && top20 <= window.innerHeight;
      const isInViewPort21 = top21 >= 0 && top21 <= window.innerHeight;
      const isInViewPort22 = top22 >= 0 && top22 <= window.innerHeight;
      const isInViewPort23 = top23 >= 0 && top23 <= window.innerHeight;
      const isInViewPort24 = top24 >= 0 && top24 <= window.innerHeight;
      const isInViewPort25= top25 >= 0 && top25 <= window.innerHeight;
     
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
      if (isInViewPort12) visibleCount = 12;
      if (isInViewPort13) visibleCount = 13;
      if (isInViewPort14) visibleCount = 14;
      if (isInViewPort15) visibleCount = 15;
      if (isInViewPort16) visibleCount = 16;
      if (isInViewPort17) visibleCount = 17;
      if (isInViewPort18) visibleCount = 18;
      if (isInViewPort19) visibleCount = 19;
      if (isInViewPort20) visibleCount = 20
      if (isInViewPort21) visibleCount = 21;
      if (isInViewPort22) visibleCount = 22;
      if (isInViewPort23) visibleCount = 23;
      if (isInViewPort24) visibleCount = 24;
      if (isInViewPort25) visibleCount = 25;
  
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
      <S.ConsumeWrap>
        <S.Consume
        ref={animatedElementRef5}
        style={{
          opacity: visibleElements >= 5 ? 1 : 0,
          transform: `translateY(${visibleElements >= 5 ? "0" : "50px"})`,
         transition: "opacity 0.5s, transform 3s", 
        }}
        > Until everyone can <S.ConsumeEx>consume well</S.ConsumeEx> </S.Consume>
      </S.ConsumeWrap>
      <S.ExplainCosumeWrap>
        <S.ExplainCosume
        ref={animatedElementRef6}
        style={{
          opacity: visibleElements >= 6 ? 1 : 0,
          transform: `translateY(${visibleElements >= 6 ? "0" : "50px"})`,
         transition: "opacity 0.5s, transform 2.4s", 
        }}
        >데브온은 '모두가 착한 소비를 할 수 있을때까지' <br/> 라는 비전을 가진 팀입니다. 
          <br/>많은 사람들이 사회적기업이 무엇인지 알지만 <br/> 소비로 이어지지 않는다는 점을
          <br/>저희는 발견했습니다.
        </S.ExplainCosume>
      </S.ExplainCosumeWrap>

      <S.ExplainCosumeWrap>
        <S.ExplainCosume1
        ref={animatedElementRef7}
        style={{
          opacity: visibleElements >= 7 ? 1 : 0,
          transform: `translateY(${visibleElements >= 7 ? "0" : "50px"})`,
         transition: "opacity 0.5s, transform 2.4s", 
        }}>착한 소비의 핵심은 <br/> 기업과 유저의 양방향 공급이라는 점에 있습니다.<br/>
        사회적기업과 사람을 이어주는 콘텐츠, <br/> 소비자가 즐겁게 착한소비를 할 수 있도록.
        </S.ExplainCosume1>
      </S.ExplainCosumeWrap>

      <S.ExplainCosumeWrap>
        <S.ExplainCosume2
        ref={animatedElementRef8}
        style={{
          opacity: visibleElements >= 8 ? 1 : 0,
          transform: `translateY(${visibleElements >= 8 ? "0" : "50px"})`,
         transition: "opacity 0.5s, transform 3.2s", 
        }}>모두가 착한 소비를 할 수 있을때까지
        </S.ExplainCosume2>
      </S.ExplainCosumeWrap>
      <S.WhiteBackground src={WhiteBack}/>
      <S.AllLogo>
        <S.swiftUi
        ref={animatedElementRef9}
        style={{
          opacity: visibleElements >= 9 ? 1 : 0,
          transform: `translateY(${visibleElements >= 9 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.3s", 
        }}>
          <S.swiftUi1 src={swiftUi}/>
        </S.swiftUi>
        <S.ReactLogo
        ref={animatedElementRef10}
        style={{
          opacity: visibleElements >= 10 ? 1 : 0,
          transform: `translateY(${visibleElements >= 10 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 3s", 
        }}>
          <S.ReactLogo1 src={ReactLogo}/>
        </S.ReactLogo>
        <S.style
        ref={animatedElementRef11}
        style={{
          opacity: visibleElements >= 11 ? 1 : 0,
          transform: `translateY(${visibleElements >= 11 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.3s", 
        }}>
          <S.style1 src={style}/>
        </S.style>
        <S.Alamofire
        ref={animatedElementRef12}
        style={{
          opacity: visibleElements >= 12 ? 1 : 0,
          transform: `translateY(${visibleElements >= 12 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 1.5s", 
        }}>
          <S.Alamofire1 src={Alamofire}/>
        </S.Alamofire>
        <S.springboot
        ref={animatedElementRef13}
        style={{
          opacity: visibleElements >= 13? 1 : 0,
          transform: `translateY(${visibleElements >= 13 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.7s", 
        }}>
          <S.springboot1 src={springboot}/>
        </S.springboot>
        <S.mysql
        ref={animatedElementRef14}
        style={{
          opacity: visibleElements >= 14 ? 1 : 0,
          transform: `translateY(${visibleElements >= 14 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 3.1s", 
        }}>
          <S.mysql1 src={mysql}/>
        </S.mysql>
        <S.ts
        ref={animatedElementRef15}
        style={{
          opacity: visibleElements >= 15 ? 1 : 0,
          transform: `translateY(${visibleElements >= 15 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.3s", 
        }}>
          <S.ts1 src={ts}/>
        </S.ts>
        <S.router
        ref={animatedElementRef16}
        style={{
          opacity: visibleElements >= 16 ? 1 : 0,
          transform: `translateY(${visibleElements >= 16 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 1.9s", 
        }}>
          <S.router1 src={router}/>
        </S.router>
        <S.Tuist
        ref={animatedElementRef17}
        style={{
          opacity: visibleElements >= 17 ? 1 : 0,
          transform: `translateY(${visibleElements >= 17 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.7s", 
        }}>
          <S.Tuist1 src={Tuist}/>
        </S.Tuist>
        <S.github
        ref={animatedElementRef18}
        style={{
          opacity: visibleElements >= 18 ? 1 : 0,
          transform: `translateY(${visibleElements >= 18 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 1.7s", 
        }}>
          <S.github1 src={github}/>
        </S.github>
        <S.Figma
        ref={animatedElementRef19}
        style={{
          opacity: visibleElements >= 19 ? 1 : 0,
          transform: `translateY(${visibleElements >= 19 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 3s", 
        }}>
          <S.Figma1 src={Figma}/>
        </S.Figma>
        <S.Notion
        ref={animatedElementRef20}
        style={{
          opacity: visibleElements >= 20 ? 1 : 0,
          transform: `translateY(${visibleElements >= 20 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.3s", 
        }}>
          <S.Notion1 src={Notion}/>
        </S.Notion>
      </S.AllLogo>
      <S.useStackWrap>
        <S.useStack
        ref={animatedElementRef21}
        style={{
          opacity: visibleElements >= 21 ? 1 : 0,
          transform: `translateY(${visibleElements >= 21 ? "0" : "50px"})`,
        transition: "opacity 0.5s, transform 2.5s", 
        }}
        >STACK</S.useStack>
      </S.useStackWrap>
      <S.WhiteBackground src={WhiteBack}/>
      <S.Member>Member</S.Member>
      <S.MemberPhoneWrap>
        <S.MemberPhone src={Phone}/>
      </S.MemberPhoneWrap>
      <S.membermemoji1>
        <S.membermemoji src={tmfdk}/>
      </S.membermemoji1>
      <S.membermemoji2>
        <S.membermemoji src={alfo}/>
      </S.membermemoji2>
      <S.membermemoji3>
        <S.membermemoji src={cogml}/>
      </S.membermemoji3>
      <S.membermemoji4>
        <S.membermemoji src={rkdgus}/>
      </S.membermemoji4>
      <S.memberMessage1
      ref={animatedElementRef22}
      style={{
        opacity: visibleElements >= 22 ? 1 : 0,
        transform: `translateY(${visibleElements >= 22 ? "0" : "50px"})`,
      transition: "opacity 0.5s, transform 2.5s", 
      }}>
        <S.memberMessage src={dltmfdk}/>
      </S.memberMessage1>
      <S.memberMessage2
      ref={animatedElementRef23}
      style={{
        opacity: visibleElements >= 23 ? 1 : 0,
        transform: `translateY(${visibleElements >= 23 ? "0" : "50px"})`,
      transition: "opacity 0.5s, transform 2.5s", 
      }}>
        <S.memberMessage src={chlalfo}/>
      </S.memberMessage2>
      <S.memberMessage3
      ref={animatedElementRef24}
      style={{
        opacity: visibleElements >= 24 ? 1 : 0,
        transform: `translateY(${visibleElements >= 24 ? "0" : "50px"})`,
      transition: "opacity 0.5s, transform 2.5s", 
      }}>
        <S.memberMessage src={qocogml}/>
      </S.memberMessage3>
      <S.memberMessage4
      ref={animatedElementRef25}
      style={{
        opacity: visibleElements >= 25 ? 1 : 0,
        transform: `translateY(${visibleElements >= 25 ? "0" : "50px"})`,
      transition: "opacity 0.5s, transform 2.5s", 
      }}>
        <S.memberMessage src={dlrkdgus}/>
      </S.memberMessage4>
      <Footer/>
    </>
  )
}

export default member