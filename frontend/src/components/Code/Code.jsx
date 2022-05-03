import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const ides = {
    HTML: "https://trinket.io/embed/html/829842d23b",
    Java: "https://trinket.io/embed/java/45588cd032?start=result",
    Python: "https://trinket.io/embed/python/3d8d7ce66b?start=result",
    R: "https://trinket.io/embed/R/2cbc6b19d5?start=result",
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [lang, setLang] = useState(ides.HTML);

  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <div>
      <h1 className="fw-bolder d-flex justify-content-center mt-5">
        Online IDE
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <select
              className="form-select"
              aria-label="Default select example"
              value={lang}
              onChange={(e) => setLang(ides[e.target.value])}
            >
              <option selected>Select Programming Language</option>
              <option value="HTML">HTML</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="R">R</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div>
          <iframe
            src={lang}
            width="100%"
            height="600"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Code;
