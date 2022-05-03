import React from "react";

const Footer = () => {
  return (
    <footer
      class="d-flex flex-column justify-content-center align-items-center bg-dark mt-5"
      style={{ height: "150px" }}
    >
      <div
        class="row d-flex justify-content-center fs-2 mt-5"
        style={{ width: "100%" }}
      >
        <div class="col-2 d-flex justify-content-center mb-3">
          <a href="https://www.facebook.com/" target="_blanked">
            <i class="fab fa-facebook text-white"></i>
          </a>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <a href="https://twitter.com/" target="_blanked">
            <i class="fab fa-twitter text-white"></i>
          </a>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <a href="https://www.google.com/" target="_blanked">
            <i class="fab fa-google text-white"></i>
          </a>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <a href="https://www.instagram.com/" target="_blanked">
            <i class="fab fa-instagram text-white"></i>
          </a>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <a href="https://www.linkedin.com/" target="_blanked">
            <i class="fab fa-linkedin text-white"></i>
          </a>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <a href="https://www.github.com/" target="_blanked">
            <i class="fab fa-github text-white"></i>
          </a>
        </div>
      </div>
      <p class="text-white p1 mt-auto d-flex align-items-end">
        Made with ❤️ by students of KLS GIT, Belagavi
      </p>
    </footer>
  );
};

export default Footer;
