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
          <h1><strong style={{color: "#cdb4db"}}>MLSA NEW</strong></h1>
            <p>
              Student Ambassadors are required to complete various
              pre-identified activities in order to grow their skills on a
              well-defined road to success. As you complete these
              activities, your program milestones are advanced. Additional
              program benefits are unlocked too. Milestones are advanced
              in order from{" "}
              <strong style={{ color: "#4b6cb7" }}>New to Alpha</strong>,{" "}
              <strong style={{ color: "#4b6cb7" }}>Alpha to Beta</strong>{" "}
              and{" "}
              <strong style={{ color: "#4b6cb7" }}>Beta to Gold</strong>.
              Program certificates are updated with each milestone
              advancement. Milestones showcase your expertise and let the
              world know about your achievements. You are encouraged to
              share your milestone advancements with your{" "}
              <strong style={{ color: "#4b6cb7" }}>local</strong> and{" "}
              <strong style={{ color: "#4b6cb7" }}>online</strong>&nbsp;
              communities.
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
          <h1><strong style={{color: "#cdb4db"}}>MLSA ALPHA</strong></h1>
          <p>
          Student Ambassadors that complete a learning path on
                    Microsoft Learn will earn the Alpha badge.
          </p>
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
          <h1><strong style={{color: "#cdb4db"}}>MLSA BETA</strong></h1>
          <p>
            Student Ambassadors who plan and host an event for other
            students in their community will earn the Beta badge.
          </p>
          <div className="beta-perks">
                  <ul>
                    <li>
                      <strong style={{ color: "#4b6cb7" }}>
                        Alpha benefits
                      </strong>
                    </li>
                    <li>
                      <strong style={{ color: "#4b6cb7" }}>Swag</strong>
                    </li>
                    <li>
                      <strong style={{ color: "#4b6cb7" }}>
                        Event support
                      </strong>
                    </li>
                    <li>
                      <strong style={{ color: "#4b6cb7" }}>Mentorship</strong>
                    </li>
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
          <h1><strong style={{color: "#cdb4db"}}>MLSA GOLD</strong></h1>
          <p>
              Student Ambassadors who have gone above and beyond serving
              their local community will be invited to the Gold milestone.
          </p>
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

    </section>
      <Footer />
    </>
  );
}

export default Milestones;
