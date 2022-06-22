import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Model Development",
    content: "",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Front end",
    content: "",
    icon: "icon-rocket",
  },
  {
    id: 3,
    name: "Back end",
    content: "",
    icon: "icon-directions",
  },
  
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
