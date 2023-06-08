import React from 'react';

function Header() {
  return (
    <header className="lemon-header">
      <div className="container">
        <div className="row">
          <section className="hd-left col col-6">
            <h3>Little Lemon</h3>
            <h5>Chicago</h5>
            <p>
              We are a family owned Mediterranean restaurant, 
              focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </section>
          <section className="col col-6">
            <div className="lemon-food"></div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;