import './App.css';
import React from "react";
import profile from "./images/ektha.jpg";



function App() {
  return (
    <div className="App">
   
      <div className="content">
        {/* Left section: Text intro */}
        <div className="text-section">
          <h1>HELLO EVERYONE!</h1>
          <h2>MY NAME IS <span className="highlight">EKTHA MALLYA</span></h2>
        

        <div className='About-me'>
          <p>
            AI enthusiast with 5 years of experience in crafting smart, scalable solutions.
            I design solutions that make technology feel more human.
            Driven by curiosity, powered by creativity!
            Check out my website for my journey!
          </p>
        </div>
</div>
        <div className="image-container">
      <div className="shape-bg"></div>
      <img src={profile} alt="Ektha Mallya" className="profile-image" />
    </div>
</div>
</div>
  );
}

export default App;
