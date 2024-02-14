import styled from "styled-components";

export const footerContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterBack = styled.img`
    margin: 0px;
    object-fit: cover;
    width: 100%;
    display: block;

    width: 100vw;
`

export const DevOn = styled.div`
    color: white;
    font-weight: 900;
    font-size: 1.7rem;
    position: absolute;
    top: 0;
    margin-top: 8%;
    margin-left: 10%;

    text-align: center;
`

export const AppLogoFooter = styled.img`
    position: absolute;
    width: 15%;
    margin-top: 20%;
    margin-left: 10%;
`

export const Email = styled.div`
    color: white;
    font-weight: 600;
    font-size: 1rem;
    position: absolute;
    top: 0;
    margin-top: 38%;
    margin-left: 10%;

    text-align: center;
`

export const School = styled.div`
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    position: absolute;
    top: 0;
    margin-top: 65%;
    margin-left: 9%;

    text-align: center;
`

export const SchoolWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const Contact = styled.div`
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    margin-top: 56%;
    margin-left: 10%;

    text-align: center;
`

export const MailButton = styled.a`
    font-weight: 900;
    font-size: 2rem;
    position: absolute;
    top: 0;
    margin-top: 47%;
    margin-left: 73%;
    text-align: center;
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    text-decoration: none; 
    color: #003B7C;
    text-align: center;
    vertical-align: middle;
    line-height: 70px;


    &:hover {
        background-color: #F4F5F9; 
    }
`