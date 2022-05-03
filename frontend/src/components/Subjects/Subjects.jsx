import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const userProfile = localStorage.getItem("user");
  const userObject = JSON.parse(userProfile);
  const testHandler = () => {
    navigate("/test");
  };

  const [giveComment, setGiveComment] = useState("");
  const [comments, setComments] = useState([]);

  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/comments");
        // console.log(data);
        setComments(data.comments);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const submitComment = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/comments", {
        question: giveComment,
        user: userObject._id,
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            loading="lazy"
            width="500"
            height="500"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
            alt="C logo"
          />
        </div>
        <div className="col shadow p-3 mb-5 bg-body rounded">
          <h1 className="fw-bolder">Programming in C</h1>
          <h3 className="fw-bold">Overview</h3>
          <p className="fs-5">
            Developed more than 50 years ago, C is the oldest programming
            language. Even more impressive is that it still runs the modern
            world. Computer systems and hardware are programmed using C, and so
            are modern devices such as cell phones. Its also one of the top
            programming languages for Internet of Things devices such as
            smartwatches.
          </p>
          <h3 className="fw-bold">Pros</h3>
          <ul>
            <li className="fs-5">
              Great for learning the fundamentals of programming
            </li>
            <li className="fs-5">Gives more control over memory management</li>
            <li className="fs-5">
              Testing, debugging, and maintenance are easy
            </li>
          </ul>
          <h3 className="fw-bold">Cons</h3>
          <ul>
            <li className="fs-5">
              A very strict coding language and thus not easy to learn
            </li>
            <li className="fs-5">
              Not applicable in websites and smartphone apps development
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h1 className="fw-bolder mt-5 mb-5 d-flex justify-content-center">
          Videos
        </h1>
        <div className="col-md-9 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/tVzDWlU1GB0"
              title="YouTube video"
              style={{ maxWidth: "100%", height: "100%" }}
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <p className="mt-5 fw-bold fs-2">More Links:</p>
          <ul>
            <li className="fs-5">
              <p>
                Install C Compiler:{" "}
                <a href="https://youtu.be/TPOIhugyqgs" target="_blank">
                  https://youtu.be/TPOIhugyqgs
                </a>
              </p>
            </li>
            <li className="fs-5">
              <p>
                Basic Structure of C Programming:{" "}
                <a
                  className="fs-5"
                  href="https://youtu.be/-QxFAxx9u-s"
                  target="_blank"
                >
                  https://youtu.be/-QxFAxx9u-s
                </a>
              </p>
            </li>
            <li className="fs-5">
              <p>
                Comment in C Programs:{" "}
                <a
                  className="fs-5"
                  href="https://youtu.be/_d6isaCwL4g"
                  target="_blank"
                >
                  https://youtu.be/_d6isaCwL4g
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-5 text-center shadow-lg p-3 mb-5 bg-body rounded ">
          <p className=" fw-bold fs-2 d-flex justify-content-center">
            You feel good about this course? Test your self!
          </p>
          <button
            onClick={testHandler}
            className="btn btn-outline-primary btn-lg mt-1"
          >
            Take a Test
          </button>
        </div>
      </div>
      <div>
        <p className="mt-5 fw-bold fs-2">Post your doubts:</p>
        <form className="form-group" />
        <textarea
          value={giveComment}
          onChange={(e) => setGiveComment(e.target.value)}
          className="form-control"
          id="doubts"
          rows="3"
        ></textarea>
        <div className="text-center">
          <button
            onClick={submitComment}
            className="btn btn-outline-primary btn-lg mt-2"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <p className=" fw-bold fs-2">Doubts:</p>
        <div className="row">
          <div className="col-md-12">
            {comments.map((comment) => (
              <p className="fs-5">
                <span className="fw-bold">Q: {comment.question}</span>
                <br />
                <span className="">
                  <b>A: </b>
                  {comment.answer}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
