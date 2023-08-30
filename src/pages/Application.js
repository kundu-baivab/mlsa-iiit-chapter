import React from "react";
import Lottie from "lottie-react";
import arrow from "../images/arrow.json";
import "../CSS_files/Application.css";

function Application() {
  const numberOfArrows = 5; // Set the number of arrow animations

  return (
    <div className="custom-container">
      <div className="custom-arrow-column left">
        {[...Array(numberOfArrows)].map((_, index) => (
          <div className="custom-arrow" key={index}>
            <Lottie animationData={arrow} alt={`Arrow Animation ${index}`} />
          </div>
        ))}
      </div>
      <div className="custom-content">
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-block my-3"
        >
          Eligibility Criteria
        </button>
        <br />
        <ol>
          <li>
            You must be at least{" "}
            <strong style={{ color: "#4b6cb7" }}>16</strong> years old, have
            valid identification and be actively enrolled in an{" "}
            <strong style={{ color: "#4b6cb7" }}>
              accredited, higher education academic institution
            </strong>
            .
          </li>
          <br />
          <li>
            Some experience in coding or technology will definitely be helpful,
            but do not worry if you don't have much of technical background.
            Students of{" "}
            <strong style={{ color: "#4b6cb7" }}>
              all academic backgrounds{" "}
            </strong>
            who are interested in growing their career and tech skills, are
            encouraged to apply for this program, as all the tools and resources
            are provided to help you learn more and engage in the program.
          </li>
        </ol>
        <br />
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Application
        </button>
        <br />
        <p>
          The Application form is open throughout the year, The selections are
          done on a{" "}
          <strong style={{ color: "#4b6cb7" }}>quarterly basis</strong>. <br />
          The main steps to follow while applying for this program are as
          follows:
        </p>
        <br />
        <ol>
          <li>
            Go to{" "}
            <a href="https://studentambassadors.microsoft.com/en-US/">
              https://studentambassadors.microsoft.com/en-US/
            </a>{" "}
            Click on "<strong style={{ color: "#4b6cb7" }}>Apply now</strong>"
            and Login with any of the mentioned options available.
          </li>
          <br />
          <li>
            Once you are logged in, read all the{" "}
            <strong style={{ color: "#4b6cb7" }}>privacy and terms</strong>, and
            confirm your eligibility. Once you confirm, you will be introduced
            to a Personal Info section, fill all the details carefully.
          </li>
          <br />
          <li>
            Once you have filled the personal information, you will be
            introduced to the academic information section, once you fill that,
            the most important part of this application comes:{" "}
            <strong style={{ color: "#4b6cb7" }}>Written Sample</strong>.
          </li>
          <br />
          <li>
            The Written Sample is the most important part of this application,
            where you have to answer the given questions. <br />
            This section is divided into three parts: <br />
            <ul>
              <li>
                <strong style={{ color: "#4b6cb7" }}>Guide</strong>
              </li>
              <li>
                <strong style={{ color: "#4b6cb7" }}>Connect</strong>
              </li>
              <li>
                <strong style={{ color: "#4b6cb7" }}>Welcome</strong>
              </li>
            </ul>
          </li>
          <br />
        </ol>
      </div>
      <div className="custom-arrow-column right">
        {[...Array(numberOfArrows)].map((_, index) => (
          <div className="custom-arrow" key={index}>
            <Lottie animationData={arrow} alt={`Arrow Animation ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Application;
