import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="lemon-header">
      <div className="container">
        <div className="row">
          <section className="hd-left col-sm-12 col-md-7 col-lg-6">
            <div className="inner">
              <h3>Little Lemon</h3>
              <h5>Chicago</h5>
              <p>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
              </p>
              <Link className="lemon-link" to="/reservation">Reserve a Table</Link>
            </div>
          </section>
          <section className="col-sm-12 col-md-5 col-lg-6">
            <div className="lemon-food"></div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;
