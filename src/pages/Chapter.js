import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../CSS_files/Chapter.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Projects() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["OUR MLSA's"],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // const CARDS = 10;
  // const MAX_VISIBILITY = 3;

  const Card = ({title,imageUrl, description}) => (
    
    <div className='card'>
      <img src={imageUrl} alt={title} />
      <div className="title">
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
    
  );
  const cardsData = [
    {
      title: 'Sumit Bhusan Panda',
      imageUrl: './assets/Sumit.jpeg',
      description: (
        <div className="description">
          <ul>
            <li><strong className="bold-black">ID:</strong> <span className="list-content">B421057</span></li>
            <li style={{ marginTop: '10px' }}><strong className="bold-black">Branch:</strong> <span className="list-content">Information Technology</span></li>
            <div className="social">
            <li style={{ marginTop: '10px' }}><strong className="bold-black"> Socials : </strong></li>&nbsp;&nbsp;
              <a href="https://github.com/SumitPanda03"><VscGithub/> </a>&nbsp;
              <a href="https://instagram.com/_sumit_panda_?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram/> </a>&nbsp;
              <a href="https://www.linkedin.com/in/sumit-panda-50ba2b224"><FaLinkedin/>  </a>&nbsp;
            </div>  
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 2',
      imageUrl: './assets/Sumit.jpeg',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 3',
      imageUrl: './assets/LevelGold.png',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 4',
      imageUrl: './assets/LevelGold.png',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 5',
      imageUrl: './assets/LevelGold.png',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 6',
      imageUrl: './assets/LevelGold.png',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Card 7',
      imageUrl: './assets/LevelGold.png',
      description: (
        <div>
          <ul>
            <li><strong>ID:</strong> Your ID</li>
            <li><strong>Branch:</strong> Your Branch</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/yourgithub">GitHub Profile</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourlinkedin">LinkedIn Profile</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/yourinstagram">Instagram Profile</a></li>
          </ul>
        </div>
      ),
    },
    // Add more objects for additional cards
  ];

  return (
    <div>
      <Navbar />
      <div className="typed-container">
        <h1 className="projects my-5 pb-2 font-weight-bold typed-content container">
          <span ref={el} />
        </h1>
      </div>
        <br />
        <br />
        <div className='app'>
        <Carousel>
          {cardsData.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}


