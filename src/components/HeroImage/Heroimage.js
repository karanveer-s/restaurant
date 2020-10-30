import React from 'react';
import './Heroimage.css';

const Hero = ({handleLogOut}) => {
    return(
    <div className="box-layout">
       <div className="box-layout__box">
           <h1 className="box-layout__title">Fork Full</h1>
           <p>It's time to get your hunger under control.</p>
       <button className="button" onClick={handleLogOut}>LogOut</button>
       </div>
    </div>
);
}

export default Hero;