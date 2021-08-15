import React from "react";
import { motion } from "framer-motion";
import todoListImage from "../assets/todolist.png";
import carRegImage from "../assets/carregistration.png";
import mealsAppImage from "../assets/mealsapp.png";
import caloriesTrackerImage from "../assets/caloriestracker.png";
const projectsData = [
  {
    id: 1,
    name: "TODOLIST APP",
    img: todoListImage,
    link: "https://github.com/YusmenKadir/ReactJS-TodoList-App",
  },

  {
    id: 2,
    name: "CAR REGISTRATION APP",
    img: carRegImage,
    link: "https://github.com/YusmenKadir",
  },

  {
    id: 3,
    name: "CALORIES TRACKER APP",
    img: caloriesTrackerImage,
    link: "https://github.com/YusmenKadir/ReactJS-Calories-Tracker-App",
  },
  {
    id: 4,
    name: "MEALS APP",
    img: mealsAppImage,
    link: "https://github.com/YusmenKadir/ReactJS-Meals-App",
  },
];

const Projects = () => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <div className="projects">
      <div className="projects-heading">
        <h2>MY WORK...</h2>
        <div className="bottom-line"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={item.id}
            onClick={() => handleClick(item.link)}
          >
            <img src={item.img} alt="#" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
