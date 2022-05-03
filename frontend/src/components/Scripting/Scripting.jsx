import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scripting = () => {
  const [scriptingJson, setScriptingJson] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/subjects");
  };

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
    (async () => {
      try {
        const { data } = await axios.get(
          "https://raw.githubusercontent.com/Sandy134/Eduhub/main/Scripting%20Languages/Scripting.json"
        );
        console.log(data);
        setScriptingJson(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="fw-bolder d-flex justify-content-center">
        Scripting Languages
      </h1>
      <div className="row input-group mt-5 mb-2">
        <div className="d-flex justify-content-end">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="row">
        {scriptingJson &&
          Object.keys(scriptingJson).map((key) => (
            <div onClick={clickHandler} className="col-md-4 mb-5">
              <div className="card text-center" style={{ height: "30rem" }}>
                <div className="icon-box">
                  <img
                    src={scriptingJson[key].image}
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="mt-5">
                  <h4 className="headline2">{key}</h4>
                  <p className="p1">{scriptingJson[key].description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Scripting;
