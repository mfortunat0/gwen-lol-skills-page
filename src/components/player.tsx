import {
  VideoPlayer,
  ContainerSkillIcon,
  Text,
  SkillIcon,
  ContainerVideoPlayer,
  Bar,
} from "../styles/player";

import { useState } from "react";
import Data from "../data/data";

interface IData {
  skill: string;
  name: string;
  description: string;
}

export default function Player() {
  const [activeSkill, setActiveSkill] = useState<IData>(Data[0]);

  const verifyActiveSkill = (skill: string) => activeSkill.skill === skill;

  return (
    <>
      <ContainerVideoPlayer>
        <VideoPlayer
          controls
          autoPlay
          muted
          src={`/assets/skill${activeSkill.skill}.mp4`}
        />
      </ContainerVideoPlayer>
      <ContainerSkillIcon>
        <SkillIcon
          active={verifyActiveSkill("Passive")}
          src="/assets/skillPassive.png"
          onClick={() => setActiveSkill(Data[0])}
        />
        <SkillIcon
          active={verifyActiveSkill("Q")}
          src="/assets/skillQ.png"
          onClick={() => setActiveSkill(Data[1])}
        />
        <SkillIcon
          active={verifyActiveSkill("W")}
          src="/assets/skillW.png"
          onClick={() => setActiveSkill(Data[2])}
        />
        <SkillIcon
          active={verifyActiveSkill("E")}
          src="/assets/skillE.png"
          onClick={() => setActiveSkill(Data[3])}
        />
        <SkillIcon
          active={verifyActiveSkill("R")}
          src="/assets/skillR.png"
          onClick={() => setActiveSkill(Data[4])}
        />
      </ContainerSkillIcon>
      <Bar>
        <hr />
      </Bar>
      <Text>
        <b>
          {activeSkill.skill} – {activeSkill.name}
        </b>
      </Text>
      <Text>{activeSkill.description}</Text>
    </>
  );
}
