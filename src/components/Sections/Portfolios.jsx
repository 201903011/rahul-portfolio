import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Machine Learning",
  },
  {
    id: 3,
    name: "App Development",
  },
  {
    id: 4,
    name: "Web Development",
  },
  {
    id: 5,
    name: "Core Application",
  },
  {
    id: 5,
    name: "IOT",
  },
];

const allData = [
  {
    id: 1,
    name: "Abstractive text Summarization ",
    category: ["machine learning","web development"],
    image: "images/portfolio/1.png",
    slug: "abs-text-summ",
  },
  {
    id: 2,
    name: "One point Student verification",
    category: ["machine learning","app development"],
    image: "images/portfolio/2.png",
    slug: "sih-one-point",
  },
  {
    id: 3,
    name: "Catalog App",
    category: ["app development"],
    image: "images/portfolio/3.png",
    slug: "catalog-flutter",
  },
  {
    id: 4,
    name: "Distance Api for IOT Projects",
    category: ["app development","iot"],
    image: "images/portfolio/4.png",
    slug: "iot-distance",
  },
  {
    id: 5,
    name: "React-Native Front End App",
    category: ["app development"],
    image: "images/portfolio/5.png",
    slug: "react-native-front",
  },
  {
    id: 6,
    name: "Campaign Creator",
    category: ["web development"],
    image: "images/portfolio/6.png",
    slug: "campaign-web",
  },
  {
    id: 7,
    name: "Classroom Management",
    category: ["core application"],
    image: "images/portfolio/7.png",
    slug: "classroom-python",
  },
  {
    id: 8,
    name: "Career Guidance",
    category: ["core application"],
    image: "images/portfolio/8.png",
    slug: "career-java",
  },
  {
    id: 9,
    name: "Portfolio Devlopment",
    category: ["web development"],
    image: "images/portfolio/9.png",
    slug: "portfolio-dev",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
