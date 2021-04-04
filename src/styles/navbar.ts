import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 75px;
  background-color: #111;
  padding: 0 2vw 0 0;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const LogoRiot = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  left: -35px;
  background: url("/assets/logo.png") 0 -2400px no-repeat;
  transition: background-position 0.25s steps(15, end);
  transform: scale(0.33);
  cursor: pointer;
  :hover {
    background: url("/assets/logo.png") 0 0px no-repeat;
  }
`;

export const Bar = styled.div`
  height: 30px;
  width: 2px;
  background-color: #3c3c3c;
  position: relative;
  left: -70px;
`;

export const LogoIcon = styled.img`
  position: relative;
  left: -80px;
  filter: brightness(0.5);
`;

export const LogoLol = styled.img`
  position: relative;
  left: -30px;
`;

export const ContainerRiot = styled.a`
  display: flex;
  align-items: center;
  height: 75px;
  width: 15%;
  :hover ${LogoIcon} {
    filter: brightness(1);
  }
`;

const TextCss = `
display: flex;
align-items: center;
color: #f9f9f9;
font-family: "MarkforEbiquityW05-Bold";
font-weight: bold;
font-size: 12px;
cursor: pointer;
`;

export const Text = styled.p`
  ${TextCss}
  border: 2px solid transparent;
  transition: border 0.3s ease-in-out;
  :hover {
    border-bottom: 2px solid #00c6e0;
  }
`;

export const TextWithIcon = styled.p`
  ${TextCss}
`;

export const TextWithoutBorder = styled.p`
  ${TextCss}
`;

export const ContainerText = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  position: relative;
  left: -40px;
  padding-right: 3vw;
  height: 100%;
`;

export const Button = styled.button`
  background-color: #00c6e0;
  padding: 13px 25px 13px 25px;
  color: #f9f9f9;
  font-family: "MarkforEbiquityW05-Bold";
  font-weight: bold;
  border: unset;
  outline: unset;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  transition: filter 0.3s;
  :hover {
    filter: brightness(0.9);
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4%;
  cursor: pointer;
`;

export const Icon = styled.img`
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
`;

export const ContainerTextIcon = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border: 2px solid transparent;
  transition: border 0.3s ease-in-out;
  :hover {
    border-bottom: 2px solid #00c6e0;
  }
  :hover ${Icon} {
    filter: brightness(1);
  }
`;
