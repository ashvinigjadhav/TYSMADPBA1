import React from "react";

const About = () => {
  return (
    <div className="about-page d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <h2 className="text-primary fw-bold mb-4">About MediCare</h2>
        <p>
          MediCare is a smart web application built to help users organize and 
          manage their medicines, doctor appointments, and health information efficiently.
        </p>
        <p>
          It allows users to create medicine schedules, view health records, 
          and add medicines to their basket for tracking or purchase.
          The goal is to simplify healthcare management for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
