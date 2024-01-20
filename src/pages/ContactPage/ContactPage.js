import React, { useEffect, useState, useRef } from "react";
import "./ContactPage.css";
import contactImg4 from "../../assets/images/contactimg.gif";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";
import Loader from "../../components/Loader/Loader";

const ContactPage = () => {
  const [msg, setMsg] = useState("Send");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSentMsg, setShowSentMsg] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const form = useRef();

  const handleWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.onresize = () => handleWindowSize();
    showConfetti &&
      setTimeout(() => {
        setShowConfetti(false);
      }, 8000); //set 8 sec for confetti to drop
  }, [showConfetti]);

  useEffect(() => {
    showSentMsg &&
      setTimeout(() => {
        if (msg === "Error") setMsg("Send");
        setShowSentMsg(false);
      }, 3000);
  }, [showSentMsg]);

  const sendEmail = (e) => {
    setShowConfetti(true);
    setShowLoader(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9qxt44v",
        "template_lhrd7aw",
        form.current,
        "NajknXWwXPqWBfY7Q"
      )
      .then(
        (result) => {
          setShowLoader(false);
          setShowConfetti(true);
          setMsg("Sent");
          setShowSentMsg(true);
        },
        (error) => {
          setShowLoader(false);
          setMsg("Error");
          setShowSentMsg(true);
        }
      );
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width - 20}
          height={windowSize.height - 20}
        />
      )}
      <section className="contact-section">
        <div className="contact-page">
          <div className="contact-page-inner">
            <h1>Get in Touch!</h1>
            <div className="contact-page-left">
              <h2>I'm always up for a chat.</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-email-form">
                  <div className="contact-email-entities">
                    <input
                      type="string"
                      placeholder="Name"
                      name="name"
                      // value="hello" //just setting default values
                      required
                    />
                  </div>
                  <div className="contact-email-entities">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      //  value="faiz@gmail.com" //just setting default values
                      required
                    />
                  </div>
                  <div className="contact-email-entities">
                    <textarea
                      type="string"
                      placeholder="Message"
                      rows="3"
                      name="message"
                      //  value="hello" //just setting default values
                      required
                    ></textarea>
                  </div>
                  <div className="contact-email-entities flex-center email-btn-box">
                    {msg === "Sent" ? (
                      <button
                        className="email-submit-btn-sent"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span>{msg}</span>
                      </button>
                    ) : (
                      <button
                        className="email-submit-btn"
                        type="submit"
                        value="Send"
                      >
                        <span>{showLoader ? <Loader /> : msg}</span>
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-page-right">
              <img src={contactImg4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
