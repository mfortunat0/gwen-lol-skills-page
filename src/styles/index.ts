import styled from "styled-components";

interface IButton {
  primary: boolean;
}

export const Text = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  text-align: justify;
  margin-top: 20vh;
  padding: 0 22vw 0 22vw;
  line-height: 30px;
  letter-spacing: 0.04em;
`;

export const SubTitle = styled.h2`
  width: 100%;
  margin-top: 10vh;
  text-align: center;
  padding: 0 21vw 0 21vw;
  font-size: 2.1rem;
  font-style: italic;
  font-family: "BeaufortforLOL-Bold";
  font-weight: bold;
  letter-spacing: 0.04em;
`;

export const ContainerButtons = styled.div`
  margin-top: 25vh;
  display: flex;
  justify-content: center;
`;

export const Button = styled.a<IButton>`
  background-color: ${(props) => (props.primary ? "#00c8e1" : "#ffffff")};
  color: ${(props) => (props.primary ? "#ffffff" : "#00c8e1")};
  border: ${(props) => (props.primary ? "unset" : "1px solid #00c8e1")};
  padding: 10px 20px 10px 20px;
  font-size: 0.625rem;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  outline: none;
  text-decoration: unset;
  transition: clip-path 0.1s ease-in-out;
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
  :first-child {
    margin-right: 15px;
  }
  :hover {
    clip-path: polygon(10% 0, 100% 0, 100% 70%, 100% 100%, 0 100%, 0 0);
  }
`;

export const ContainerImageSkin = styled.div`
  display: flex;
  padding: 0 18vw 0 18vw;
  margin-top: 5vh;
`;

export const ImageSkin = styled.img`
  width: 100%;
`;

export const ContainerDescriptionSkin = styled.div`
  margin-top: 1vh;
  padding: 0 18vw 0 18vw;
`;

export const BarPrimary = styled.div`
  width: 100%;
  background-color: #00c8e1;
  height: 1px;
`;

export const DescriptionSkin = styled.p`
  margin-top: 3.5vh;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;
