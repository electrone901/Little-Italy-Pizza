import React from 'react';
require('../../styles/navBar.css');

export default () => {
  
    return (
        <div>
          <nav className="navbar navbar-expand-sm">
            <div className="container">
              <a className="navbar-brand" to="/">
                Little Italy Pizza
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
              </button>
    
              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" to="/menu">
                      {' '}
                      Menu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  };

