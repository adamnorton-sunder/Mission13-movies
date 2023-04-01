import React from 'react';
import headshot from '../assets/JoelHiltonHeadshot.jpg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="Navbar">
            <div className="centerElement">
                <h3>
                    <Link to="/">Home</Link>
                </h3>
            </div>
            <div className="centerElement">
                <h3>
                    <Link to="/podcasts">Podcasts</Link>
                </h3>
            </div>
            <div className="centerElement">
                <h3>
                    <Link to="/movies">Movie Collection</Link>
                </h3>
            </div>
            <div></div>
            <div className="centerElement">
                <Link to="/">
                    <div className="titleWrapper">
                        <h3>
                            Joel's Movie Collection
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;