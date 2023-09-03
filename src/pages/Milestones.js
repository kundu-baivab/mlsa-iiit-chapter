import React from "react";
import './Milestones.css'
import 'animate.css'


function Milestones() {


  return (

    <>
      <div className="parent-container ">

        <div className="container1">
          <div className="child1">
            <div className="new-image-container animate__animated animate__slideInLeft ">
                  <img className="new-image" src="LevelNew.png" alt="MLSA New Logo"/>  
            </div>
            <div className="intro-container hidden popup">
                <h2>MLSA MILESTONES</h2>
                <p>
                  Student Ambassadors are required to complete various pre-identified activities in order to grow their skills on a well-defined road to success. As you complete these activities, your program milestones are advanced. Additional program benefits are unlocked too. 
                  Milestones are advanced in order from New to Alpha, Alpha to Beta and Beta to Gold. Program certificates are updated with each milestone advancement.
                  Milestones showcase your expertise and let the world know about your achievements. You are encouraged to share your milestone advancements with your local and online communities.
                </p>
            </div>
          </div>
         
        </div>

            <div className="container2">
              <div className="child2">
              <div className="alpha-image-container">
                <img className="alpha-image" src="LevelAlpha.png" alt="MLSA Alpha Logo"/>  
              </div>

              <div className="alpha-container popup">
                <h3>ALPHA MLSA</h3>
                <div className="alpha-child">
                  <p>Student Ambassadors that complete a learning path on Microsoft Learn will earn the Alpha badge.</p>
                </div>
                <div className="alpha-perks">
                  <ul>
                    <li>USD150 monthly Azure credits</li>
                    <li>Visual Studio Enterprise subscription</li>
                    <li>StudentAmbassadors.com email address</li>
                    <li>Event workshop kits</li>
                    <li>Incentives for event attendees</li>
                  </ul>

                </div>
                </div>
              </div>
            
            </div>

            <div className="container3">
              <div className="child3">
              <div className="beta-image-container">
                <img className="beta-image" src="LevelBeta.png" alt="MLSA Beta Logo"/>  
              </div>  
            <div className="beta-container popup">
                <h3>BETA MLSA</h3>
              <div className="beta-child">
                <p>Student Ambassadors who plan and host an event for other students in their community will earn the Beta badge.</p>
              </div>
              <div className="beta-perks">
                <ul>
                  <li>Alpha benefits</li>
                  <li>Swag</li>
                  <li>StudentAmbassadors.com email address</li>
                  <li>Event support</li>
                  <li>Mentorship</li>
                </ul>
              </div>
              </div>
           
              </div>


            </div>

            <div className="container4">
              <div className="child4">
              <div className="gold-image-container">
                <img className="gold-image" src="LevelGold.png" alt="MLSA Gold Logo"/>  
              </div>
            <div className="gold-container popup">
                <h3>GOLD MLSA</h3>
              <div className="gold-child">
                <p>Student Ambassadors who have gone above and beyond serving their local community will be invited to the Gold milestone.</p>
              </div>
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
             

          </div>

            </div>

    </>
  );
}

export default Milestones;





