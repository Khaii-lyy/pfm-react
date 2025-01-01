import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Home.css';
import AboutSection from './AboutSection';
import Login from './Login';

const Home = () => {
    return (
      <div className="home">
        <header className="home-header">
          <h2>Welcome to ISTA Lazaret</h2>
          <p>Empowering education with technology</p>
        </header>
  
        
        <div id="home" className="home-section">
          <h3>Welcome to Our School</h3>
          <p>
            At ISTA Lazaret, we provide a nurturing environment for students to excel academically and personally.
          </p>
          <div id="training" className="training-section">
          <div className="training-text">
            <h3>Various Sectors to Prepare You for Tomorrow's Challenges</h3>
            <p>
              At OFPPT, providing comprehensive training that meets the needs of young people and professionals is a key challenge.
              Discover our various fields of training and choose from more than twenty key and strategic sectors.
            </p>
          </div>
          <div className="training-image">
            <img
              src="https://www.myway.ac.ma/images/etudiant-potensiel.svg"
              alt="Student Potential"
              className="training-img"
            />
          </div>
        </div>
  
        
        
        </div>
  
        
        <div id="about" className="about-section">
          <h3>About Us</h3>
          <AboutSection/>
        </div>
  
       
        <div id="login" className="login-section">
            <Login/>
      </div>
      </div>
    );
  };
  
  export default Home;