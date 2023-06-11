import React from 'react';

function Footer() {
  return (
    <footer className="lemon-footer">
      <div className="container">
        <div className="row">
          <section className="col col-3">
            <img className="logo" src="/img/b.webp" alt="Little Lemon" title="Little Lemon" />
          </section>
          <section className="col col-3">
            <em>Doormat Navigation</em>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
              <li className="nav-item"><a className="nav-link" href="/reservation">Reservations</a></li>
              <li className="nav-item"><a className="nav-link" href="/order">Order Online</a></li>
              <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
            </ul>
          </section>
          <section className="col col-3 contact">
            <em>Contact</em>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">Address</li>
              <li className="nav-item">Phone number</li>
              <li className="nav-item">Email</li>
            </ul>
          </section>
          <section className="col col-3">
            <em>Social media links</em>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
