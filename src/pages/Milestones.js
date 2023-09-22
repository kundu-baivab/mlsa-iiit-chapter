import React from "react";
import "../CSS_files/Milestones.css";
import "animate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Milestones() {
  return (
    <>
      <Navbar />
      <section id="timeline">
        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-image">
            <img
              className="new-image "
              src="./assets/LevelNew.png"
              alt="MLSA New Logo"
            />
          </div>
          <div className="tl-content">
            <h1>MLSA NEW</h1>
            <p>
              Student Ambassadors are required to complete various
              pre-identified activities in order to grow their skills on a
              well-defined road to success. As you complete these activities,
              your program milestones are advanced. Additional program benefits
              are unlocked too. Milestones are advanced in order from New to
              Alpha, Alpha to Beta and Beta to Gold. Program certificates are
              updated with each milestone advancement. Milestones showcase your
              expertise and let the world know about your achievements. You are
              encouraged to share your milestone advancements with your local
              and online&nbsp; communities.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-image">
            <img
              className="alpha-image"
              src="./assets/LevelAlpha.png"
              alt="MLSA Alpha Logo"
            />
          </div>
          <div className="tl-content">
            <h1>MLSA ALPHA</h1>
            <p>
              Student Ambassadors that complete a learning path on Microsoft
              Learn will earn the Alpha badge.
            </p>
            <div className="alpha-perks">
              <ul>
                <li>150$ monthly Azure credits</li>
                <li>Visual Studio Enterprise subscription</li>
                <li>StudentAmbassadors.com email address</li>
                <li>Event workshop kits</li>
                <li>Incentives for event attendees</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-image">
            <img
              className="beta-image"
              src="./assets/LevelBeta.png"
              alt="MLSA Beta Logo"
            />
          </div>
          <div className="tl-content">
            <h1>MLSA BETA</h1>
            <p>
              Student Ambassadors who plan and host an event for other students
              in their community will earn the Beta badge.
            </p>
            <div className="beta-perks">
              <ul>
                <li>Alpha benefits</li>
                <li>Swag</li>
                <li>Event support</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-image">
            <img
              className="gold-image"
              src="./assets/LevelGold.png"
              alt="MLSA Gold Logo"
            />
          </div>
          <div className="tl-content">
            <h1>MLSA GOLD</h1>
            <p>
              Student Ambassadors who have gone above and beyond serving their
              local community will be invited to the Gold milestone.
            </p>
            <div className="gold-perks">
              <ul>
                <li>Alpha and Beta benefits</li>
                <li>Program leadership opportunities</li>
                <li>Microsoft Most Valuable Professional (MVP) mentorship</li>
                <li>May be invited to the MVP program</li>
                <li>Exclusive Gold swag</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Milestones;
