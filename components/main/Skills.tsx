import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

import { Backend_skill, Frontend_skill, Other_skill } from "@/constants";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-2 h-full relative pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <br />
      
      {/* Skills Boards */}
      <div className="flex flex-row justify-around w-full gap-4"> {/* Adjust the gap as needed */}
        {/* Frontend Skills Board */}
        <div className="skills-board purple-board">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Frontend</h3>
          <br></br>
          <div className="flex flex-col items-right gap-4">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={80} // Adjust the width as needed
                height={80} // Adjust the height as needed
                index={index}
                skill_name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* Backend Skills Board */}
        <div className="skills-board purple-board">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Backend</h3>
          <br></br>
          <div className="flex flex-col items-center gap-4">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={80} // Adjust the width as needed
                height={80} // Adjust the height as needed
                index={index}
                skill_name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* Others Skills Board */}
        <div className="skills-board purple-board">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Others</h3>
          <br></br>
          <div className="flex flex-col items-right gap-4">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={80} // Adjust the width as needed
                height={80} // Adjust the height as needed
                index={index}
                skill_name={image.skill_name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;