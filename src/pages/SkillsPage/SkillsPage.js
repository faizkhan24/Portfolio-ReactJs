import React from "react";
import "./SkillsPage.css";
import {
  html_icon,
  css_icon,
  js_icon,
  react_icon,
  redux_icon,
  sass_icon,
  git_icon,
  tailwind_icon,
  bootstrap_icon,
} from "../../utils/images";

const SkillsPage = () => {
  return (
    <section className="skills-section sec" name="skills">
      <div className="skills-page">
        <h1>Skills</h1>
        <div className="skills-icons-set">
          <div
            className="skills-icons-set-known flex-row-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="skills-icon">
              <img src={html_icon} width="48px" alt="" />
              <span>HTML</span>
            </div>
            <div className="skills-icon">
              <img src={css_icon} width="48px" alt="" />
              <span>CSS</span>
            </div>
            <div className="skills-icon">
              <img src={js_icon} width="48px" alt="" />
              <span>Javascript</span>
            </div>
            <div className="skills-icon">
              <img src={react_icon} width="48px" alt="" />
              <span>React</span>
            </div>
            <div className="skills-icon">
              <img src={redux_icon} width="48px" alt="" />
              <span>Redux</span>
            </div>
          </div>
          <div
            className="skills-icons-set-familiar flex-row-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p>Also familiar with - </p>
            <div className="skills-icon fam">
              <img src={git_icon} width="48px" alt="" />
              <span>Git</span>
            </div>
            <div className="skills-icon fam">
              <img src={sass_icon} width="48px" alt="" />
              <span>SASS</span>
            </div>
            <div className="skills-icon fam">
              <img src={tailwind_icon} width="48px" alt="" />
              <span>Tailwind Css</span>
            </div>
            <div className="skills-icon fam">
              <img src={bootstrap_icon} width="43px" alt="" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
