import React from "react";
import "../CSS_files/Milestones.css";
import "animate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Milestones() {
  return (
    <>
      <Navbar />
      <div className="parent-container container">
        <div className="container2">
          <div className="child2">
            <div className="alpha-image-container">
              <img
                className="alpha-image"
                src="./assets/LevelAlpha.png"
                alt="MLSA Alpha Logo"
              />
            </div>

            <div className="alpha-container popup">
              <h3>MLSA MILESTONES</h3>
              <div className="alpha-child">
                <p>
                  Student Ambassadors are required to complete various
                  pre-identified activities in order to grow their skills on a
                  well-defined road to success. As you complete these
                  activities, your program milestones are advanced. Additional
                  program benefits are unlocked too. Milestones are advanced in
                  order from{" "}
                  <strong style={{ color: "#4b6cb7" }}>
                    New to Alpha, Alpha to Beta
                  </strong>{" "}
                  and <strong style={{ color: "#4b6cb7" }}>Beta to Gold</strong>{" "}
                  <strong style={{ color: "#4b6cb7" }}>
                    .
                    <br />
                    <br />
                    Program certificates
                  </strong>{" "}
                  are updated with each milestone advancement. Milestones
                  showcase your expertise and let the world know about your
                  achievements. You are encouraged to share your milestone
                  advancements with your{" "}
                  <strong style={{ color: "#4b6cb7" }}>local</strong> and{" "}
                  <strong style={{ color: "#4b6cb7" }}>
                    online communities
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="child2">
            <div className="alpha-image-container">
              <img
                className="alpha-image"
                src="./assets/LevelAlpha.png"
                alt="MLSA Alpha Logo"
              />
            </div>

            <div className="alpha-container popup">
              <h3>ALPHA MLSA</h3>
              <div className="alpha-child">
                <p>
                  Student Ambassadors that complete a learning path on Microsoft
                  Learn will earn the Alpha badge.
                </p>
              </div>
              <div className="alpha-perks">
                <ul>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      150$ monthly Azure credits
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Visual Studio Enterprise subscription
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      StudentAmbassadors.com email address
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Event workshop kits
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Incentives for event attendees
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="child3">
            <div className="beta-image-container">
              <img
                className="beta-image"
                src="./assets/LevelBeta.png"
                alt="MLSA Beta Logo"
              />
            </div>
            <div className="beta-container popup">
              <h3>BETA MLSA</h3>
              <div className="beta-child">
                <p>
                  Student Ambassadors who plan and host an event for other
                  students in their community will earn the Beta badge.
                </p>
              </div>
              <div className="beta-perks">
                <ul>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>Alpha benefits</strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>Swag</strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>Event support</strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>Mentorship</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container4">
          <div className="child4">
            <div className="gold-image-container">
              <img
                className="gold-image"
                src="./assets/LevelGold.png"
                alt="MLSA Gold Logo"
              />
            </div>
            <div className="gold-container popup">
              <h3>GOLD MLSA</h3>
              <div className="gold-child">
                <p>
                  Student Ambassadors who have gone above and beyond serving
                  their local community will be invited to the Gold milestone.
                </p>
              </div>
              <div className="gold-perks">
                <ul>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Alpha and Beta benefits
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Program leadership opportunities
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Microsoft Most Valuable Professional (MVP) mentorship
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      May be invited to the MVP program
                    </strong>
                  </li>
                  <li>
                    <strong style={{ color: "#4b6cb7" }}>
                      Exclusive Gold swag
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default Milestones;
