import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const userProfile = localStorage.getItem("user");
  const userObject = JSON.parse(userProfile);
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/quiz");
        setQuizzes(data.quizzes);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log(quizzes);

  return (
    <div className="container">
      <div
        className="main-body"
        style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;` }}
      >
        <div className="row gutters-sm">
          <div className="col-md-8 mx-auto">
            <div className="card card-sa">
              <div className="card-body card-body-sa">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{userObject?.username}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-sa mb-3">
              <div className="card-body card-body-sa">
                <h4 style={{ alignItems: "center" }}>User Details</h4>
                <br />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Username</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userObject?.username}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userObject?.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-sa mb-3">
              <div className="card-body card-body-sa">
                <h4 style={{ alignItems: "center" }}>
                  Your Previous Test Scores
                </h4>
                <br />
                {quizzes &&
                  quizzes
                    .filter((quiz) => quiz.user == userObject._id)
                    .map((quiz) => (
                      <h6>
                        {quiz.subject} : {quiz.totalMarks} / 10
                      </h6>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
