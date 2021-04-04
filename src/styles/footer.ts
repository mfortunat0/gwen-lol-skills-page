import styled from "styled-components";

export const Main = styled.footer`
  background-color: #111111;
  padding: 10vh 0 10vh 0;
  margin-top: 8vh;
`;

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25vw 0 25vw;
`;

export const Options = styled.a`
  color: #7e7e7e;
  cursor: pointer;
  font-family: "MarkforEbiquityW05-Bold";
  font-size: 12px;
  font-weight: 800;
  font-size: 12px;
  text-decoration: unset;
  transition: color 0.3s ease-in-out;
  :hover {
    color: #f9f9f9;
  }
`;

export const ContainerLogoRiot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vh;
`;

export const Media = styled.img`
  filter: brightness(0.5);
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  :hover {
    filter: brightness(1);
  }
`;

export const ContainerMedias = styled.div`
  display: flex;
  padding: 0 43vw 0 43vw;
  justify-content: space-between;
  margin-top: 10vh;
`;

export const TextCopyright = styled.p`
  color: #7e7e7e;
  font-size: 12px;
  width: 100%;
  padding: 0 29vw 0 29vw;
  font-family: "MarkforEbiquityW05-Bold";
  margin-top: 5vh;
  text-align: center;
`;

export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 10vh;
  justify-content: space-between;
  padding: 0 30vw 0 30vw;
`;

export const Links = styled.a`
  color: #7e7e7e;
  font-size: 12px;
  font-weight: 500;
  font-family: "MarkforEbiquityW05-Bold";
  text-decoration: underline;
  cursor: pointer;
`;

export const LogoClassification = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
