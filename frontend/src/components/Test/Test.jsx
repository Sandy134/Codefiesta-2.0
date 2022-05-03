import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizAnswers } from "./answers.js";

const Test = () => {
  const userProfile = localStorage.getItem("user");
  const userObject = JSON.parse(userProfile);
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

  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eigtht: "",
    ninth: "",
    tenth: "",
  });

  const [marks, setMarks] = useState(0);

  const submitQuizHandler = async () => {
    const {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eigtht,
      ninth,
      tenth,
    } = answers;
    if (
      !first ||
      !second ||
      !third ||
      !fourth ||
      !fifth ||
      !sixth ||
      !seventh ||
      !eigtht ||
      !ninth ||
      !tenth
    ) {
      alert("Please Tick All the answers");
      return;
    }

    const marksArray = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eigtht",
      "ninth",
      "tenth",
    ];
    let correctAnswered = 0;
    for (var i = 0; i <= 9; i++) {
      if (
        quizAnswers[i].answer.trim() ===
        answers[marksArray[i].replace('"', "")].trim()
      ) {
        correctAnswered++;
      }
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/quiz", {
        subject: "C",
        totalMarks: correctAnswered,
        user: userObject._id,
      });
      alert(`Total Marks Scored : ${correctAnswered}/10`);
      navigate("/subjects");
      console.log(data.quiz);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div class="container mt-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-12 col-lg-12 ">
            <div class="border border-primary">
              <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row justify-content-center align-items-center">
                  <h4>MCQ Quiz</h4>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q1.</h3>
                  <h5 class="mt-1 ml-2">C is a</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="general-purpose_computer_programming_language"
                    value="general-purpose computer programming language"
                    onChange={(e) =>
                      setAnswers({ ...answers, first: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="general-purpose_computer_programming_language"
                  >
                    general-purpose computer programming language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="procedural_computer_programming_language"
                    value="procedural computer programming language"
                    onChange={(e) =>
                      setAnswers({ ...answers, first: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="procedural_computer_programming_language"
                  >
                    procedural computer programming language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="multi-paradigm_computer_programming_language"
                    value="procedural computer programming language"
                    onChange={(e) =>
                      setAnswers({ ...answers, first: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="multi-paradigm computer programming language"
                  >
                    multi-paradigm computer programming language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="All_the_above"
                    value="All the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, first: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="All_the_above">
                    All the above
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q2.</h3>
                  <h5 class="mt-1 ml-2">C first appeared in</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="1972"
                    value="1972"
                    onChange={(e) =>
                      setAnswers({ ...answers, second: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="1972">
                    1972
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="1974"
                    value="1974"
                    onChange={(e) =>
                      setAnswers({ ...answers, second: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="1974">
                    1974
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="1982"
                    value="1982"
                    onChange={(e) =>
                      setAnswers({ ...answers, second: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="1982">
                    1982
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="1984"
                    value="1984"
                    onChange={(e) =>
                      setAnswers({ ...answers, second: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="1984">
                    1984
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q3.</h3>
                  <h5 class="mt-1 ml-2">Filename extension of C language is</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id=".cp"
                    value=".cp"
                    onChange={(e) =>
                      setAnswers({ ...answers, third: e.target.value })
                    }
                  />
                  <label class="form-check-label" for=".cp">
                    .cp
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="cl"
                    value="cl"
                    onChange={(e) =>
                      setAnswers({ ...answers, third: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="cl">
                    cl
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id=".c"
                    value=".c"
                    onChange={(e) =>
                      setAnswers({ ...answers, third: e.target.value })
                    }
                  />
                  <label class="form-check-label" for=".c">
                    .c
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="All_the_above"
                    value="All the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, third: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="All_the_above">
                    All the above
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q4.</h3>
                  <h5 class="mt-1 ml-2">C influenced</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault4"
                    id="C_OC"
                    value="C++, C#, and Objective-C"
                    onChange={(e) =>
                      setAnswers({ ...answers, fourth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="C_OC">
                    C++, C#, and Objective-C
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault4"
                    id="Java_and_JavaScript"
                    value="Java and JavaScript"
                    onChange={(e) =>
                      setAnswers({ ...answers, fourth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Java_and_JavaScript">
                    Java and JavaScript
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault4"
                    id="PPP"
                    value="Perl, PHP, and Python"
                    onChange={(e) =>
                      setAnswers({ ...answers, fourth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="PPP">
                    Perl, PHP, and Python
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault4"
                    id="All_the_above"
                    value="All the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, fourth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="All_the_above">
                    All the above
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q5.</h3>
                  <h5 class="mt-1 ml-2">Who is father of C Language ?</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault5"
                    id="Bjarne_Stroustrup"
                    value="Bjarne Stroustrup"
                    onChange={(e) =>
                      setAnswers({ ...answers, fifth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Bjarne_Stroustrup">
                    Bjarne Stroustrup
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault5"
                    id="Dennis_Ritchie"
                    value=" Dennis Ritchie"
                    onChange={(e) =>
                      setAnswers({ ...answers, fifth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Dennis_Ritchie">
                    Dennis Ritchie
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault5"
                    id="EFC"
                    value="Dr. E.F. Codd"
                    onChange={(e) =>
                      setAnswers({ ...answers, fifth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="EFC">
                    Dr. E.F. Codd
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault5"
                    id="JAG"
                    value="James A. Gosling"
                    onChange={(e) =>
                      setAnswers({ ...answers, fifth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="JAG">
                    James A. Gosling
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q6.</h3>
                  <h5 class="mt-1 ml-2">
                    For 16-bit compiler, allowable range for integer constants
                    is
                  </h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault6"
                    id="option1"
                    value="-32768 to 32767"
                    onChange={(e) =>
                      setAnswers({ ...answers, sixth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="option1">
                    -32768 to 32767
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault6"
                    id="option2"
                    value="-3.4e38 to 3.4e38"
                    onChange={(e) =>
                      setAnswers({ ...answers, sixth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="option2">
                    -3.4e38 to 3.4e38
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault6"
                    id="option3"
                    value="-32668 to 32667"
                    onChange={(e) =>
                      setAnswers({ ...answers, sixth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="option3">
                    -32668 to 32667
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault6"
                    id="option4"
                    value="-32767 to 32768"
                    onChange={(e) =>
                      setAnswers({ ...answers, sixth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="option4">
                    -32767 to 32768
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q7.</h3>
                  <h5 class="mt-1 ml-2">
                    C programs are converted into machine language with the help
                    of
                  </h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault7"
                    id="a_compiler"
                    value="a compiler"
                    onChange={(e) =>
                      setAnswers({ ...answers, seventh: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="a_compiler">
                    a compiler
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault7"
                    id="an_editor"
                    value="an editor"
                    onChange={(e) =>
                      setAnswers({ ...answers, seventh: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="an_editor">
                    an editor
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault7"
                    id="an_operating_system"
                    value="an operating system"
                    onChange={(e) =>
                      setAnswers({ ...answers, seventh: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="an_operating_system">
                    an operating system
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault7"
                    id="None_of_the_above"
                    value="None of the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, seventh: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="None_of_the_above">
                    None of the above
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q8.</h3>
                  <h5 class="mt-1 ml-2">C was primarily developed as</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault8"
                    id="General_purpose_language"
                    value="General purpose language"
                    onChange={(e) =>
                      setAnswers({ ...answers, eigtht: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="General_purpose_language"
                  >
                    General purpose language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault8"
                    id="Data_processing_language"
                    value="Data processing language"
                    onChange={(e) =>
                      setAnswers({ ...answers, eigtht: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="Data_processing_language"
                  >
                    Data processing language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault8"
                    id="System_programming_language"
                    value="System programming language"
                    onChange={(e) =>
                      setAnswers({ ...answers, eigtht: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="System_programming_language"
                  >
                    System programming language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault8"
                    id="None_of_the_above"
                    value="None of the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, eigtht: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="None_of_the_above">
                    None of the above
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q9.</h3>
                  <h5 class="mt-1 ml-2">C Language developed at</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault9"
                    id="ATT"
                    value="AT & T Bell Laboratories of USA in 1970"
                    onChange={(e) =>
                      setAnswers({ ...answers, ninth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="ATT">
                    AT & T Bell Laboratories of USA in 1970
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault9"
                    id="Cambridge_University"
                    value="Cambridge University in 1972"
                    onChange={(e) =>
                      setAnswers({ ...answers, ninth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Cambridge_University">
                    Cambridge University in 1972
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault9"
                    id="Sun_Microsystems"
                    value=" Sun Microsystems in 1973"
                    onChange={(e) =>
                      setAnswers({ ...answers, ninth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Sun_Microsystems">
                    Sun Microsystems in 1973
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault9"
                    id="ATTB"
                    value="AT & T Bell Laboratories of USA in 1972"
                    onChange={(e) =>
                      setAnswers({ ...answers, ninth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="ATTB">
                    AT & T Bell Laboratories of USA in 1972
                  </label>
                </div>
              </div>

              <div class="bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center">
                  <h3>Q10.</h3>
                  <h5 class="mt-1 ml-2">C influenced by</h5>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault10"
                    id="Assembly_language"
                    value=" Assembly language"
                    onChange={(e) =>
                      setAnswers({ ...answers, tenth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="Assembly_language">
                    Assembly language
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault10"
                    id="FORTRAN"
                    value="FORTRAN"
                    onChange={(e) =>
                      setAnswers({ ...answers, tenth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="FORTRAN">
                    FORTRAN
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault10"
                    id="ALGOL_68"
                    value="ALGOL 68"
                    onChange={(e) =>
                      setAnswers({ ...answers, tenth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="ALGOL_68">
                    ALGOL 68
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault10"
                    id="All_the_above"
                    value="All the above"
                    onChange={(e) =>
                      setAnswers({ ...answers, tenth: e.target.value })
                    }
                  />
                  <label class="form-check-label" for="All_the_above">
                    All the above
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            onClick={submitQuizHandler}
            class="btn btn-primary btn-lg btn-block mb-5 mt-3"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
