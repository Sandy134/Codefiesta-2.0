import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import validator from "email-validator";
import { register, reset } from "../../redux/userSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  const [captcha, setCapcha] = useState("");

  const navigate = useNavigate("");

  function onChange(value) {
    setCapcha(value);
  }

  const signupHandler = async () => {
    if (!username || !email || !password) {
      toast.warn("All Fields Required", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
    if (password.length < 5) {
      toast.warn("Password must have atleast 6 characters", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
    if (password !== rpassword) {
      toast.warn("Passwords not matching", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }

    if (!captcha) {
      toast.warn("Verify the Captcha", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }

    const valid = await validator.validate(email);

    if (valid) {
    } else {
      toast.warn("Invalid Email", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(data);
      toast.success("User Created Successfully", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.log(error.response.data.error);
      toast.warn("Something went wrong| Please try again", {
        closeOnClick: true,
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Registration
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please enter your details!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="username"
                        id="typeUserX"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typeRePasswordX"
                        className="form-control form-control-lg"
                        placeholder="ReEnter-Password"
                        value={rpassword}
                        onChange={(e) => setRPassword(e.target.value)}
                      />
                    </div>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                      className="mb-3 mx-5"
                    />

                    {/* <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Display captcha here"
                      />
                      <button className="btn btn-outline-light btn-lg mt-1">
                        Refresh
                      </button>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeTextX"
                        className="form-control form-control-lg"
                        placeholder="Enter Captcha"
                      />
                    </div> */}

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={signupHandler}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have an account?
                      <Link to="/login" className="text-white-50 fw-bold">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
