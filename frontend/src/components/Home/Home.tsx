import React from 'react';
import headshot from '../../assets/JoelHiltonHeadshot.jpg'
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home-grid">
      <div className="right-align">
        <h1>Joel's Movie Collection</h1>
      </div>

      <div className="right-align">
        <img className="headshot" src={headshot} alt="headshot" />
      </div>

      <div className="right-align" style={{ marginTop: "20px" }}>
        <p><i>"Joel has one of the brightest minds in the industry today."</i></p>
        <p>- Marc Cuban</p>
      </div>
    </section>
  );
};

export default Home;