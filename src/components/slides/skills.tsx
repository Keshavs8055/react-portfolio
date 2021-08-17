import { SkillCard } from "../Skill-card/skill_card";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiSass,
} from "react-icons/di";

import { SiFirebase, SiRedux } from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";
interface ISkillsSection {
  skillRef: React.RefObject<HTMLDivElement>;
}

export const SkillsSection: React.FC<ISkillsSection> = ({ skillRef }) => {
  return (
    <div
      className="section skills-section container-full px-1 d-flex flex-wrap align-items-center justify-content-center"
      ref={skillRef}
    >
      <ScrollAnimation
        animateIn="animate__tada"
        scrollableParentSelector=".main-container"
      >
        <h1 className="fw-lighter w-100 d-md-none text-center p-2">Skills</h1>
      </ScrollAnimation>
      <div className="skill-container w-100">
        <div className="w-100 row g-1 mx-0 my-1 skills-row py-1 justify-content-center align-items-stretch">
          <SkillCard title="HTML" Icon={<AiFillHtml5 size={35} />} />
        </div>
        <div className="w-100 row g-1  mx-0 my-1 skills-row py-1 justify-content-center align-items-stretch">
          <SkillCard title="CSS" Icon={<DiCss3 size={35} />} />
          <SkillCard title="SASS" Icon={<DiSass size={35} />} />
        </div>
        <div className="w-100 row g-1 mx-0 my-1 skills-row py-1 justify-content-center align-items-stretch">
          <SkillCard title="JavaScript" Icon={<DiJavascript1 size={35} />} />
          <SkillCard title="REACT" Icon={<DiReact size={35} />} />
          <SkillCard title="Node-JS" Icon={<DiNodejs size={35} />} />
        </div>
        <div className="w-100 row g-1 mx-0 my-1 skills-row py-1 justify-content-center align-items-center">
          <SkillCard title="Mongo-DB" Icon={<DiMongodb size={35} />} />
          <SkillCard title="Firebase" Icon={<SiFirebase size={35} />} />
        </div>
        <div className="w-100 row g-1 mx-0 my-1 skills-row py-1 justify-content-center align-items-center">
          <SkillCard title="React Redux" Icon={<SiRedux size={35} />} />
        </div>
      </div>
    </div>
  );
};