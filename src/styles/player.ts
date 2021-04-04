import styled from "styled-components";

interface ISkillIcon {
  active: boolean;
}

export const VideoPlayer = styled.video`
  width: 55%;
  border: unset;
  outline: unset;
  border-radius: 0px;
`;

export const ContainerVideoPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const SkillIcon = styled.img<ISkillIcon>`
  width: 7rem;
  height: 4rem;
  cursor: pointer;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  transition: opacity 0.3s ease-in-out;
  :hover {
    opacity: 1;
  }
`;

export const ContainerSkillIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25vw 0 25vw;
  margin-top: 5vh;
`;

export const Text = styled.p`
  padding: 0 22vw 0 22vw;
  margin-top: 3vh;
  line-height: 1.66667;
  letter-spacing: 0.04em;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;

export const Bar = styled.div`
  margin-top: 5vh;
  padding: 0 22vw 0 22vw;
`;
