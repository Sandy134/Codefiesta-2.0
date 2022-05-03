import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import mainImg from "../../assets/12.jpg";
import domain from "../../assets/1.jpg";
import { selectUser } from "../../redux/userSlice";
import Typewriter from "typewriter-effect";

const Home = ({ setDomainSelected, domainSelected }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <section id="home" className="home">
        <div className="banner_wrapper wrapper wrapper1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-1 order-2">
                <h1 className="headline">
                  We're changing the world with Technology...
                </h1>
                <br />
                <br />
                <i className="headline1">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("System.out.println();")
                        .callFunction(() => {
                          console.log("String typed out!");
                        })
                        .pauseFor(1000)

                        .callFunction(() => {
                          console.log("All strings were deleted");
                        })
                        .start();
                    }}
                  />
                </i>
              </div>
              <div className="col-md-6 order-md-2 order-1 mb-md-0 mb-5">
                <div className="top-right-sec">
                  <img src={mainImg} style={{ borderRadius: "5%" }} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <h1 className="headline">DOMAINS</h1>
        </div>
        <div className="container">
          <div className="row">
            <div
              onClick={() => {
                setDomainSelected("Web Development");
                navigate("/domainsubjects");
              }}
              className="col-md-4 mb-5"
              style={{ cursor: "pointer" }}
            >
              <div
                className="card card1 text-center"
                style={{ height: "30rem" }}
              >
                <div className="icon-box">
                  <img
                    src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                    alt="img"
                    style={{ width: "300px" }}
                  />
                </div>
                <div>
                  <h4 className="headline2">Web Development</h4>
                  <p className="p1">
                    Get to learn and be interview ready with this course that
                    has no pre-requisites and is designed to make you an full
                    stack web developer.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setDomainSelected("Scripting Languages");
                navigate("/scripting");
              }}
              className="col-md-4 mb-5"
              style={{ cursor: "pointer" }}
            >
              <div
                className="card card1 text-center"
                style={{ height: "30rem" }}
              >
                <div className="icon-box">
                  <img src={domain} alt="img" />
                </div>
                <div>
                  <h4 className="headline2">Scripting Languages</h4>
                  <p className="p1">
                    Kick-off your scripting languages journey with the complete
                    tutorials covering all the fundamentals and advanced
                    concepts with a hands on approach.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setDomainSelected("Programming Languages");
                navigate("/domainsubjects");
              }}
              className="col-md-4 mb-5"
              style={{ cursor: "pointer" }}
            >
              <div
                className="card card1 text-center"
                style={{ height: "30rem" }}
              >
                <div className="icon-box">
                  <img
                    src="https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg"
                    alt="img"
                    style={{ width: "300px" }}
                  />
                </div>
                <div>
                  <h4 className="headline2">Programming Languages</h4>
                  <p className="p1">
                    Without a doubt coding is the most in demand skill in the
                    current market. So get your hands ready on these!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home">
        <div className="d-flex justify-content-center">
          <h1 className="headline">FEATURES</h1>
        </div>

        <div className="row fs-4">
          <div className="col text-center">
            <i className="fas fa-laptop-code fs-1 text-primary"></i>
            <p>Knowledge is power.</p>
          </div>
          <div className="col text-center">
            <i className="fas fa-tools fs-1 text-primary"></i>
            <p>Fix the cause, not the problem.</p>
          </div>
        </div>
        <div className="row fs-4">
          <div className="col text-center">
            <i className="fas fa-globe fs-1 text-primary"></i>
            <p>
              Learning to code is useful no matter <br />
              what your career ambitions are!
            </p>
          </div>
          <div className="col text-center">
            <i className="fas fa-university fs-1 text-primary"></i>
            <p>
              The computer was born to solve problems <br />
              that did not exist before. -Bill Gates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
