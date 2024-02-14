import React, { useEffect, useRef, useState  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../Footer/Footer.style";

import FooterBack from "../../assets/image/FooterBack.svg"
import AppLogo from "../../assets/image/AppLogo.svg"

const Footer = () => {
  return (
    <>
    <S.footerContainer>
        <S.FooterBack src={FooterBack}/>
        <S.DevOn> DevOn </S.DevOn>
        <S.AppLogoFooter src={AppLogo}/>
        <S.Email>이메일 | teamdev00n@gmail.com</S.Email>
        <S.School>DevOn .Daegu Software Meister High School since 2023</S.School>
        <S.Contact> Contact </S.Contact>
        <S.MailButton href="mailto:teamdev00n@gmail.com">
        →
        </S.MailButton>
    </S.footerContainer>
    </>
  )
}

export default Footer