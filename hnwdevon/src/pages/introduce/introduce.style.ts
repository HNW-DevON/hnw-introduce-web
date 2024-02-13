import styled from "styled-components";
import React from 'react';
import { keyframes } from 'styled-components';


export const  WithGoodbuy = styled.div`
    color: black;
    font-weight: 900;
    font-size: 1.7rem;
    position: absolute;
    top: 0;
    margin-top: 63%;

    text-align: center;
`

export const WithGoodbuyWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
`

export const WhiteBackground = styled.img`
    margin: 0px;
    object-fit: cover;
    width: 100%;
    display: block;
`

export const IntroHome = styled.div`
    color: #097CFA;
    font-weight: 900;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    margin-top: 250%;
    margin-left: 13%;

    text-align: center;
`

export const HomeImg = styled.img`
    width: 90%;
    position: absolute;
    top: 0;
    margin-left: 8%;
    margin-top: 290%;
`

export const ExplainHome = styled.div`
    color: black;
    font-weight: 900;
    font-size: 1.6rem;
    position: absolute;
    top: 0;
    margin-top: 260%;
    margin-left: 13%;
`

export const MoreExplainHome = styled.div`
    color: black;
    font-weight: 600;
    font-size: 1rem;
    position: absolute;
    top: 0;
    margin-top: 400%;
    margin-left: 13%;
    line-height: 1.4;
`

export const CheckIntro = styled.div`
    color: #097CFA;
    font-weight: 900;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    margin-top: 470%;
    margin-left: 13%;

    text-align: center;
`

export const CheckAmI = styled.div`
    color: black;
    font-weight: 700;
    font-size: 1.3rem;
    position: absolute;
    top: 0;
    margin-top: 484%;
    margin-left: 13%;
`;

export const BarcodeImg = styled.img`
    width: 30%;
    position: absolute;
    top: 0;
    margin-left: 8%;
    margin-top: 530%;
`

export const BarcodeImgWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 93vw;
`
const shakeUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BarcodeScanImg = styled.img`
    width: 50%;
    position: absolute;
    top: 0;
    margin-top: 517%;
    animation: ${shakeUpDown} 2s ease-in-out infinite;
`

export const BarcodeScanImgWrap = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`

export const ScanEx = styled.div`
    color: black;
    font-weight: 900;
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    margin-top: 600%;
    margin-left: 13%;
    text-align: center;
`

export const QuestIntro = styled.div`
    color: #097CFA;
    font-weight: 900;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    margin-top: 687%;
    margin-left: 13%;

    text-align: center;
`

const moveRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const QuestImg = styled.img`
    width: 140%;
    margin-top: 700%;
    position: absolute;
    top: 0;
    margin-left: 13%;
    bottom: 0;
    left: 0;
    animation: ${moveRight} 6s ease infinite; 
`;

export const MoreQuest = styled.div`
    color: black;
    font-weight: 600;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    margin-top: 850%;
    margin-left: 13%;
    line-height: 1.4;
`

export const FindIntro = styled.div`
    color: #097CFA;
    font-weight: 900;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    margin-top: 900%;
    margin-left: 13%;

    text-align: center;
`

export const FindImg1 = styled.img`
    width: 70%;
    margin-top: 920%;
    position: absolute;
    top: 0;
    margin-left: 15%;
    bottom: 0;
    left: 0;
    animation: ${shakeUpDown} 2s ease-in-out infinite;
`

export const FindEx= styled.div`
    color: black;
    font-weight: 900;
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    margin-top: 1050%;
    text-align: center;
`

export const FindExWrap = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const PointIntro = styled.div`
    color: #097CFA;
    font-weight: 900;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    margin-top: 1120%;
    margin-left: 13%;

    text-align: center;
`

export const Point120 = styled.img`
    width: 30%;

    position: absolute;
    top: 0;
    margin-top: 1140%;
    margin-left: 13%;
`

export const MangoP = styled.img`
    position: absolute;
    top: 0;
    margin-top: 1170%;
    margin-left: 13%;
`
export const StrawP = styled.img`
    position: absolute;
    top: 0;
    margin-top: 1188%;
    margin-left: 13%;
`
export const CoCoP = styled.img`
    position: absolute;
    top: 0;
    margin-top: 1206%;
    margin-left: 13%;
`

export const BadBuy = styled.img`
    position: absolute;
    top: 0;
    margin-top: 1224%;
    margin-left: 13%;
`

export const PointBuy = styled.div`
    color: black;
    font-weight: 600;
    font-size: 1.3rem;
    position: absolute;
    top: 0;
    margin-top: 1253%;
    margin-left: 13%;
    line-height: 1.4;
`