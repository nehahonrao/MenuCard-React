import React from 'react';
import "./style.css";

function Navbar() {
  return <>
  <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">breakfast</button>
        </div>
        <div className="btn-group">
          <button className="btn-group__item">Lunch</button>
        </div>
        <div className="btn-group">
          <button className="btn-group__item">Dinner</button>
        </div>
  </nav>
  </>;
}

export default Navbar;
