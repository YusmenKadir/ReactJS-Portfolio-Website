import React from "react";
import { Link } from "react-router-dom";
import image from "../../src/assets/me.png";
import { motion } from "framer-motion";
import {
  BsFillCameraVideoFill,
  BsFillEyeFill,
  BsCamera,
  BsLaptop,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="home-intro-heading">
            <h1>Hi, I am Yusmen</h1>
            <h1>UX designer & React.js developer!</h1>
            <Link to="/Projects">
              <button>View my Work</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: -50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="home-intro-image">
            <img src={image} alt="#" className="my-img" />
          </div>
        </motion.div>
      </div>

      <div className="home-specialization">
        <h2>I SPECIALIZE IN</h2>
        <div className="bottom-line"></div>
        <p>
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
      </div>

      <div className="home-specialization-grid">
        <motion.button whileHover={{ scale: 1.1 }}>
          <div>
            <BsCamera size={40} />
            <h3>Photography</h3>
            <p>
              I create high-quality images with my professional Photography
              equipment and edit them with Adobe Photoshop. Photography is my
              best skill.
            </p>
          </div>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <div>
            <BsFillCameraVideoFill size={40} />
            <h3>Video Editing</h3>
            <p>
              In my spare time I also edit videos. I use Adobe Premiere Pro and
              the results are always fantastic! Check out my Covid-19 tutorial
              video in the projects section to get an idea of my video editing
              skills!
            </p>
          </div>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <div>
            <BsLaptop size={40} />
            <h3>Logo Design</h3>
            <p>
              I create high-quality logos for different brands and businesses. I
              start from scratch providing the clients with lot's of options. I
              use Adobe Photoshop as a tool and clients are always happy!
            </p>
          </div>
        </motion.button>

        <motion.button whileHover={{ scale: 1.1 }}>
          <div>
            <BsFillEyeFill size={40} />
            <h3>UI / UX</h3>
            <p>
              As UX/UI is my passion I aim creating user-friendly masterpiece
              layouts for websites and mobile applications and my clients
              absolutely love them!
            </p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
export default Home;
