import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "It is possible to fly without motors, but not without knowledge and skill. Below is my some precious skills",
  progressData: [
    {
      id: 1,
      name: "Flutter",
      percentage: 90,
    },
    {
      id: 2,
      name: "Python",
      percentage: 80,
    },
    {
      id: 3,
      name: "Java",
      percentage: 80,
    },
    {
      id: 4,
      name: "MySQL / NO-SQL",
      percentage: 70,
    },
    {
      id: 5,
      name: "React-Native",
      percentage: 60,
    },
    {
      id: 6,
      name: "React",
      percentage: 70,
    },
    
    
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
