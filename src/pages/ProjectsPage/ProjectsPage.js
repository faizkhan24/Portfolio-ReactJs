import React from "react";
import Helper from "../../utils/Helper";
import { food_pc, portfolio_pc } from "../../utils/images";
import "./ProjectsPage.css";
import data from "../../utils/projectsData.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Link } from "react-scroll";

const ProjectsPage = () => {
  return (
    <>
      <section className="projects-section" name="projects">
        <div className="projects-page">
          <h1>Projects</h1>
          <div className="project-box">
            <div
              className="project-image-container1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={food_pc} alt="" className="projects-page-img" />
            </div>
            <div className="centerdiv">
              <div
                className="project-description-container"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h2>FriendlyMeal</h2>
                <p>
                  Technologies used : <span className="techStack">React</span>,{" "}
                  <span className="techStack">Redux Toolkit</span>,{" "}
                  <span className="techStack">React-router</span>,{" "}
                  <span className="techStack">Css</span>,{" "}
                  <span className="techStack">ExpressJS</span>,{" "}
                  <span className="techStack">MongoDB</span>
                </p>
                <ul>
                  <li>
                    Developed a responsive food delivery app using the MERN
                    stack (MongoDB, Express.js, React, Node.js).
                  </li>
                  <li>
                    Implemented advanced search functionality with debouncing
                    and caching of API hits for a streamlined search experience.
                  </li>
                  <li>
                    Created CRUD functionality for product and data management.
                  </li>
                </ul>
                <div className="projectone-links">
                  <a
                    href="https://food-delivery-app-9kai.vercel.app//"
                    target="_blank"
                  >
                    <button className="live-projects-links proj-slide-btn">
                      <span className="live-projects-links-span">Live</span>
                      <span>
                        <LiveTvIcon />
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/faizkhan24/Food-Delivery-App"
                    target="_blank"
                  >
                    <button className="live-projects-links proj-slide-btn">
                      <span className="live-projects-links-span">Github</span>
                      <span>
                        <GitHubIcon />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-box">
            <div className="centerdiv">
              <div
                className="project-description-container"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2>Portfolio</h2>
                <p>
                  Technologies used : <span className="techStack">React</span>,{" "}
                  <span className="techStack">EmailJs</span>,{" "}
                  <span className="techStack">Css</span>
                </p>
                <ul>
                  <li>
                    Developed a visually appealing portfolio website with smooth
                    animations on scroll
                  </li>
                  <li>
                    Included a user-friendly contact form to easily get in touch
                    with me directly from the website.
                  </li>
                </ul>
                <div className="projecttwo-links">
                  <Link to="home" smooth={true} duration={250}>
                    <button className="live-projects-links proj-slide-btn">
                      <span className="live-projects-links-span">Live</span>
                      <span>
                        <LiveTvIcon />
                      </span>
                    </button>
                  </Link>
                  <a
                    href="https://github.com/faizkhan24/Portfolio-ReactJs"
                    target="_blank"
                  >
                    <button className="live-projects-links proj-slide-btn">
                      <span className="live-projects-links-span">Github</span>
                      <span>
                        <GitHubIcon />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="project-image-container2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={portfolio_pc} alt="" className="projects-page-img" />
            </div>
          </div>
        </div>
      </section>
      <div name="contact"></div>
    </>
  );
};

export default ProjectsPage;
