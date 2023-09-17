import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../CSS_files/Chapter.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Projects() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Current MLSA's"],
      typeSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="projects my-5 pb-2 font-weight-bold typed-content container">
        <span ref={el} />
      </h1>
      <br />
      <br />
      <div className="container1">
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/pattern.png" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">patternPrinting</h5>
                  <p className="card-text">
                    Java patterns: Solve pattern printing problems for
                    placements. Essential codes for various pattern types. #Java
                    #PlacementPreparation
                  </p>
                  <a
                    href="https://github.com/rks-031/patternPrinting.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/overview.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">rks-031</h5>
                  <p className="card-text">
                    Personalize your Github overview page with this special
                    repository. Raw code included for easy customization &
                    personalization. #Github #CodeSnippet
                  </p>
                  <a
                    href="https://github.com/rks-031/rks-031.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/weather.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">weatherApp</h5>
                  <p className="card-text">
                    Real-time weather app. Integrates with OpenWeatherMap API to
                    provide accurate weather information to users. #NodeJS
                    #WeatherApp
                  </p>
                  <a
                    href="https://github.com/rks-031/weatherApp.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/2048.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">2048-animated</h5>
                  <p className="card-text">
                    A nostalgic and visually appealing ReactJS version of the
                    classic 2048 game. Engaging gameplay for all ages. #ReactJS
                    #2048Game #Nostalgia
                  </p>
                  <a
                    href="https://github.com/rks-031/2048-animated.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/text.png" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">textUtils</h5>
                  <p className="card-text">
                    User-friendly website with text manipulation tools.
                    Word/Character counter,replace, and more.#TextUtils
                    #TextManipulation #ReactJS
                  </p>
                  <a
                    href="https://github.com/rks-031/textUtils.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/jokes.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">jokesGenerator</h5>
                  <p className="card-text">
                    Enjoy hilarious jokes with this ReactJS mini app. Dynamic
                    display of jokes and punchlines with toggle option for
                    showing/hiding punchlines. #ReactJS #JokeGenerator
                  </p>
                  <a
                    href="https://github.com/rks-031/jokesGenerator.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/medibox.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">mediBOX</h5>
                  <p className="card-text">
                    Experience mediBOX, a virtual hospital connecting people to
                    healthcare. HTML, CSS, JS, ML, Node, MongoDB power this
                    personalized platform. #mediBOX #VirtualHospital
                  </p>
                  <a
                    href="https://github.com/rks-031/mediBOX.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
