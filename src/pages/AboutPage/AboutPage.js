import React from "react";
import "./AboutPage.css";
import img2 from "../../assets/images/aboutimg.jpg";

const AboutPage = () => {
  return (
    <section className="about-section sec" name="about">
      <div className="about-page">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-right">
            <img
              src={img2}
              width="340px"
              alt=""
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="about-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="about-desc">
              <span>Greetings, fellow internet traveler! </span>
              <br />
              <span>
                Hello! I'm Faiz Khan, a BCA student currently in my 5th
                semester, and I've recently completed an internship at
                GeeksForGeeks, focusing on the MERN stack. I'm passionate about
                frontend development and eager to contribute my skills to
                innovative projects. Let's connect and explore potential
                opportunities together – who knows, we might just be the perfect
                match for some exciting coding adventures!
              </span>
              <br />
              <br />
              <span>
                In my journey as a BCA student, I've developed a strong
                foundation in programming languages such as Java, Python, and
                C/C++. During my internship at GeeksForGeeks, I had hands-on
                experience with React, Node.js, and MongoDB, honing my skills in
                creating responsive and dynamic web applications.
              </span>
            </p>
            <p className="about-desc">
              <span>
                Beyond coding, I enjoy staying current with industry trends and
                exploring new technologies. Whether it's diving into the
                intricacies of web development or staying caffeinated for
                late-night coding sessions, I'm always ready to embrace the
                challenges that come my way. I'm excited about the prospect of
                contributing my enthusiasm and skills to a dynamic team as I
                embark on this journey into the world of frontend development.
                {/* If
                you're looking for someone who is passionate, driven, and always willing to learn, then look no further.  */}
              </span>
              <br />
              <br />
              <span>
                Let's connect and discuss how my background and passion align
                with your team's goals, and how we can create some coding magic
                together!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
