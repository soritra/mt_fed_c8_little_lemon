import React from 'react';

function Nav() {
  return (
    <nav className="nav-top navbar navbar-expand">
      <div className="container">
        <a href="/"><img className="lemon-logo" src="/img/logo.png" alt="Little Lemon" title="Little Lemon" /></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="/reservations">Reservations</a></li>
          <li className="nav-item"><a className="nav-link" href="/order">Order Online</a></li>
          <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
