import React from "react";
import Lottie from "lottie-react";
import ms1 from "../images/microsoft1.json";
import ms2 from "../images/microsoft2.json";
import "../CSS_files/Title.css";

function Title() {
  return (
    <div className="home-container ">
      <div className="text-center">
        <img
          src="/assets/iiit_logo.png"
          className="title-logo"
          alt="iiit_logo"
        />
        <h1>Microsoft Learn Student Ambassadors</h1>
        <h3>@</h3>
        <h1>IIIT Bhubaneswar</h1>
        <img src="/assets/mlsa_badge.png" className="badge-logo" alt="badge" />
      </div>

      <div className="animation">
        <div className="animation-left">
          <Lottie animationData={ms1} alt="..." />
        </div>
        <div className="animation-right">
          <Lottie animationData={ms2} alt="..." />
        </div>
      </div>

      <div>
        <br />
        <button type="button" className="btn btn-secondary btn-lg btn-block">
          Microsoft Learn Student Ambassadors Program
        </button>
        <br />
        <p>
          Microsoft Learn Student Ambassadors Program is a program to bring
          together all the students from all over the world who have the passion
          for Technology, have the desire and craze to learn more about
          technology and help the community. It is a student-led community
          supported by Microsoft, aimed at empowering students to contribute to
          their technical communities while gaining skills and experiences
          related to Microsoft technologies. <br />
          <br />
          MLSAs collaborate with Microsoft, learn about Azure and other
          Microsoft services, and share their knowledge and experiences with
          their peers. The Ambassadors get an opportunity to interact with their
          peers, mentors, Professionals, learn various Microsoft technologies,
          and implement it in the real world. This program sponsors all the
          undergraduate and postgraduate students in terms of technology and all
          the events they do in this community. Once you are an ambassador, you
          are introduced to the amazing community and you can start hosting
          events!
        </p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Title;
