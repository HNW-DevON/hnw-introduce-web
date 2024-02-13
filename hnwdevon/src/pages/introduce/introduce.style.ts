import styled from "styled-components";
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