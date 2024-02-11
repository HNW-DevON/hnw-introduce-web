import styled from "styled-components";

export const MainHeader = styled.div`
    width: 100vw;
    height: 18vh;
    color: #1a1a1a;
    align-items: center;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
`;

export const Logo = styled.img`
  display: flex;
  width: 10vw;
  align-content: center;
`;

export const Context = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 1rem;
`;

export const HeaderFix = styled.div`
  position: relative;
  z-index: 1;
`
