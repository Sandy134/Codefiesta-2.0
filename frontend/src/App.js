import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Code from "./components/Code/Code";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Subjects from "./components/Subjects/Subjects";
import Test from "./components/Test/Test";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./components/Navbar/Navbar.css";
import DomainSubjects from "./components/DomainSubjects/DomainSubjects";
import Profile from "./components/Profile/Profile";
import Scripting from "./components/Scripting/Scripting";
import Javascript from "./components/Javascript/Javascript";

function App() {
  const [domainSelected, setDomainSelected] = useState("");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/code" element={<Code />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <Home
              setDomainSelected={setDomainSelected}
              domainSelected={domainSelected}
            />
          }
        />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/test" element={<Test />} />
        <Route path="/domainsubjects" element={<DomainSubjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scripting" element={<Scripting />} />
        <Route path="/scripting/javascript" element={<Javascript />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
