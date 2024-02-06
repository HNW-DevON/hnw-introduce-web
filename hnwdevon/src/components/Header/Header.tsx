import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "../Header/Header.style";
import goodBuyLogo from "../../assets/image/AppLogo.svg"

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <S.MainHeader>
            <S.Logo src={goodBuyLogo} alt="error" className="Logo" onClick={() => navigate("/")}/>
            <S.Context>
                <p onClick={() => navigate("/")}>메인</p>
                <p onClick={() => navigate("/introduce")}>서비스</p>
                <p onClick={() => navigate("/member")}>팀</p>
            </S.Context>
        </S.MainHeader>
  )
}

export default Header