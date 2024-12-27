import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profilepic.png';
import profilePic2 from '../assets/images/output_image.jpeg';
import gsap from "gsap";

function Main() {

  // useEffect(()=>{
  //   gsap.to("#heading", {
  //     ease: "expo.inOut", // Correct usage of Expo ease
  //     stagger: 2,         // Stagger delay
  //     width: "100%",      // Target width
  //     duration: 2,        // Duration of animation
  //     top: 0,             // Target top position
  //   });
    
  // })


  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic2} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/9455013932" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/deepak-kumar-singh-17709a205/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 className="heading bg-red-500 border border-red-500  text-blue-600 text-3xl">Deepak Kumar Singh</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/9455013932" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/deepak-kumar-singh-17709a205/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;