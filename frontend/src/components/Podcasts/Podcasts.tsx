import React from 'react';
import './Podcasts.css';

const Podcasts: React.FC = () => {
  return (
    <div style={{ paddingTop: '40px;'}}>
      <h1>Podcasts</h1>
      <div style={{ display: 'grid', placeItems: 'center'}}>
        <div className="card">
          <h3>
            <a style={{ color: '#000' }} href="https://baconsale.com">Bacon Sale Podcast</a>
          </h3>
        </div>
      </div>

    </div>

  );
};

export default Podcasts;