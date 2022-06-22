import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2019 - Present",
    degree: "Bachelors Degree",
    content:
      "I pursuing B.E. in Information Technology from Xavier Institute of Engineering, Mumbai with average CGPA of 9.15",
  },
  {
    id: 2,
    year: "2019 - 2017",
    degree: "HSC",
    content:
      "I scored 78% in 12th boards and scored 94 %ile in MHT-CET",
  },
  {
    id: 3,
    year: "2017 - 2001",
    degree: "SSC",
    content:
      "I scoered 92.80% in SSC from my school Bal Vikas Vidya Mandir, Jogeshwari Mumbai",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
